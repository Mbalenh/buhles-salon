-- Add insert scripts here
--Add the 4 treatments
insert into treatment (type,code,price) values ('Pedicure','Ped','');
insert into treatment (type,code,price) values ('Manicure','Man');
insert into treatment (type,code,price) values ('Make up ','Mak');
insert into treatment (type,code,price) values ('Brows & Lashes','Bro');


--	Add at least 7 clients.

INSERT INTO client(first_name, last_name, phone_number)
VALUES('mbali', 'smith', '0796895001'),
	('makho', 'brown', '0766895001'),
	('kay', 'smith', '0736895021'),
	('pretty', 'xaba', '0796895031'),
	('cindy', 'zulu', '0796899001'),
	('monica', 'chili', '0796895201'),
	('ernest', 'smith', '0796895501');

--Add 3 or more stylists - the stylist commission is between 7% and 20%
INSERT INTO stylist(first_name, last_name, phone_number,commission_percentage)
VALUES('sam', 'smith', '0796895001','0.07'),
	('john', 'brown', '0766895001','0.10'),
	('mike', 'smith', '0736895001','0.75'),
	('pretty', 'rose', '0796895031','0.15');


      