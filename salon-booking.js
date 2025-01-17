export default function salonBooking(db) {

     async function findStylist(phoneNumber){
    
    const stylists = await db.oneOrNone(`select * from stylist where phone_number = $1`, [phoneNumber])
        return stylists;

  async function findClient(phoneNumber){
    
    const clients = await db.oneOrNone(`select * from client where phone_number = $1`, [phoneNumber])
        return clients;
}

  async function findTreatment(phoneNumber){
    
    const treatments = await db.oneOrNone(`select * from treatment where code = $1`, [phoneNumber])
        return treatments;
}

 async function findAllTreatments() {
        const AllTreatments = await db.oneOrNone(`select * from treatment where type = $1`)
        return AllTreatments;
    }

     async function makeBooking(clientId, treatmentId, stylistId, date, time) {
        await db.none(`insert into booking(clientId, treatmentId, stylistId,date, time) values ($1, $2, $3,$4,$5)`, 
            [clientId, treatmentId, stylistId,date,time])
    }

      async function findAllBookings(date){
    
    const books = await db.oneOrNone(`select * from booking where date = $1`, [date])
        return books;
}

     async function findClientBookings(clientId){
    
    const clientbooking = await db.oneOrNone(`select * from booking where client_id = $1`, [clientId])
     
        return clientbooking;
}

   async function findStylistsForTreatment(treatmentId){
    
    const findStylists = return await db.manyOrNone(`select * from booking join stylist on booking.stylist_id = stylist.id where treatment_id = $1`, [treatmentId]);
        return findStylists;
}

   async function findAllBookings({date, time}){
    
    const allbooking = await db.oneOrNone(`select * from booking where client_id = $1`, [date,time])
     
        return allbooking;
}
}async function totalIncomeForDay(date) {
  
        let db_results = await db.oneOrNone(
          "select sum(price), booking_date from treatment join booking on treatment.id = booking.treatment_id where booking_date = $1 group by booking_date",
          [date]
        );
        return db_results;
    }
    async function mostValuableClient() {
  
        let db_results = await db.manyOrNone(
          "select sum(price),client_id from booking join treatment on booking.treatment_id = treatment.id group by client_id"
        );
        let price = 0;
        let valuableClientId = {};
        db_results.forEach((item) => {
          if (item.sum > price) {
            price = item.sum;
            valuableClientId = { id: item.client_id };
          }
        });
        let client = await db.oneOrNone(
          "select first_name from client where id = $1",
          [valuableClientId.id]
        );
        return client;
  
    }























    return {
        findStylist,
        findTreatment,
        findClient,
        findAllTreatments,
        makeBooking,
        findAllBookings,
        findClientBookings,
        findAllBookings,
        findStylistsForTreatment,
        totalIncomeForDay,
        mostValuebleClient,
        totalCommission



    }
}  