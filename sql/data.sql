-- Add insert scripts here
--Add the 4 treatments
insert into treatment (type) values ('Pedicure');
insert into treatment (type) values ('Manicure');
insert into treatment (type) values ('Make up ');
insert into treatment (type) values ('Brows & Lashes');

--	Add at least 7 clients.

INSERT INTO client(first_name, last_name, phone_number)
VALUES('mbali', 'smith', '0796895001'),
	('makho', 'brown', '0766895001'),
	('kay', 'smith', '0736895001'),
	('pretty', 'xaba', '0796895031'),
	('cindy', 'zulu', '0796895001'),
	('monica', 'chili', '0796895001'),
	('ernest', 'smith', '0796895001');

--Add 3 or more stylists - the stylist commission is between 7% and 20%
INSERT INTO stylist(first_name, last_name, phone_number,commission_percentage)
VALUES('sam', 'smith', '0796895001','0.07'),
	('john', 'brown', '0766895001','0.10'),
	('mike', 'smith', '0736895001','0.75'),
	('pretty', 'rose', '0796895031','0.15');


      