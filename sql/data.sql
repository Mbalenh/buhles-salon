
insert into treatment (type,code,price) values ('Pedicure','ped',175);
insert into treatment (type,code,price) values ('Manicure','man' ,215);
insert into treatment (type,code,price) values ('Make up ','mak',185.00);
insert into treatment (type,code,price) values ('Brows & Lashes','bro',240.00);



INSERT INTO client(first_name, last_name, phone_number)
VALUES('mbali', 'smith', '0796895001'),
	('makho', 'brown', '0766895001'),
	('kay', 'smith', '0736895021'),
	('pretty', 'xaba', '0796895031'),
	('cindy', 'zulu', '0796899001'),
	('monica', 'chili', '0796895201'),
	('ernest', 'smith', '0796895501');


INSERT INTO stylist(first_name, last_name, phone_number,commission_percentage)
VALUES('sam', 'smith', '0796895001',0.07),
	('john', 'brown', '0766895001',0.07),
	('mike', 'smith', '0736895001',0.17),
	('pretty', 'rose', '0796895131',0.20);


INSERT INTO booking(booking_date,booking_time)
VALUES('2022-02-27', '07:00'),
('2022-02-27', '09:00'),
('2022-02-27', '08:00'),
('2022-02-27', '03:00'),
('2022-02-27', '10:00'),
('2022-02-27', '09:00');

      