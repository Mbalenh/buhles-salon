
create table client (
	id serial not null primary key,
	first_name text not null,
    last_name text not null,
     phone_number varchar(10) NOT NULL UNIQUE
);

create table treatment (
	id serial not null primary key,
	type  text not null,
    code text not null,
   price decimal not null
   
);
create table stylist (
	id serial not null primary key,
	first_name text not null,
    last_name text not null,
	phone_number varchar(10) NOT NULL UNIQUE,
	commission_percentage NUMERIC(3,2)

);

create table booking(
	id serial not null primary key,
	booking_date DATE NOT NULL DEFAULT CURRENT_DATE,
	booking_time TIME NOT NULL,
    treatment_id  int not null,
    client_id  int not null,
    stylist_id  int not null,
    foreign key (treatment_id ) references treatment(id),
    foreign key (client_id) references client(id),
    foreign key (stylist_id) references stylist(id)

);



