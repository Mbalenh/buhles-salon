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
    
    const findStylists = await db.oneOrNone(`select * from booking where client_id = $1`, [clientId])
        return findStylists;
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