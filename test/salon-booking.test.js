import assert from 'assert';
import SalonBooking from '../salon-booking.js';
import pgPromise from 'pg-promise';

// TODO configure this to work.
const DATABASE_URL = process.env.DATABASE_URL || "postgresql://buhle:buhle123@localhost:5432/salon_test";

const config = { 
	connectionString : DATABASE_URL
}

const pgp = pgPromise();
const db = pgp(config);

let booking = SalonBooking(db);

describe("The Booking Salon", function () {

    beforeEach(async function () {

        await db.none(`delete from booking`);

    });

    it("should be able to list treatments", async function () {

        const treatments = await booking.findAllTreatments();

         assert.deepEqual([{code: 'ped',id: 1,price: '175',type: 'Pedicure'},
            {code: 'man',id: 2,price: '215',type: 'Manicure'},
            {code: 'mak',id: 3,price: '185',type: 'Make up'},
            {code: 'Bro',id: 4,price: '240',type: 'Brows & Lashes'}], treatments);
    });

    it("should be able to find a stylist", async function () {

        const stylist = await booking.findStylist("0796895001");
        assert.equal({id:1, first_name:'sam', last_name:'smith',phone_number:'0796895001') } stylist);
    });

    it("should be able to allow a client to make a booking", async function () {
        const client = await booking.findClient("0736895021");

        const booking = await booking.makeBooking(treatmentId, client.id, date, time);

        const bookings = await booking.findClientBookings(client.id);
        assert.equal([{id:1, first_name:'kay', last_name:'smith',phone_number:'0736895021')], bookings);
    });

    it("should be able to get client booking(s)", async function () {

        const client1 = await booking.findClient("0796895101");
        const client2 = await booking.findClient("0796899001");
        
        const treatment1 = await booking.findTreatment("ped");
        const treatment2 = await booking.findTreatment("mak");

        await booking.booking(treatment1.id, client1.id, date, time);
        await booking.booking(treatment2.id, client1.id, date, time);
        await booking.booking(treatment1.id, client2.id, date, time);

        const bookings = await booking.findAllBookings(client);

        assert.equal([{booking_date:'2022-02-27',booking_time:'07:00',id:'1',id:'1',id:'2'},
            {booking_date:'2022-02-27',booking_time:'10:00',id:'2',id:'1',id:'2'}], clientBooking)
    })

    it("should be able to get bookings for a date", async function () {
        const client1 = await booking.findClient("0796895031");
        const client2 = await booking.findClient("0796895201");

        const treatment1 = await booking.findTreatment("ped");
        const treatment2 = await booking.findTreatment("man");

        await booking.booking(treatment1.id, client1.id, date, time);
        await booking.booking(treatment2.id, client1.id, date, time);
        await booking.booking(treatment3.id, client2.id, date, time);

        const bookings = await booking.findAllBookings({date, time});

        assert.equal([{booking_date:'2022-02-27',booking_time:'07:00',id:'1',id:'1',id:'2'},
            {booking_date:'2022-02-27',booking_time:'07:00',id:'2',id:'1',id:'2'}], bookings);

    });

    it("should be able to find the total income for a day", function() {
        assert.equal(1, 2);
    })

    it("should be able to find the most valuable client", function() {
        assert.equal(1, 2);
    })
    it("should be able to find the total commission for a given stylist", function() {
        assert.equal(1, 2);
    })

    after(function () {
        db.$pool.end()
    });

});