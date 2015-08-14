CREATE DATABASE paypal;

\c paypal;

CREATE TABLE purchases (
	id SERIAL PRIMARY KEY,
	user_id integer,
	paid_user_id integer,
	title varchar(255),
	description text,
	amount integer,
	purchased_date timestamp
);

CREATE TABLE gifts (
	id SERIAL PRIMARY KEY,
	user_id integer,
	paid_user_id integer,
	title varchar(255),
	description text,
	amount integer,
	gifted_date timestamp
);

CREATE TABLE users (
	id SERIAL PRIMARY KEY,
	username varchar(40),
	email text,
	password text,
	joined_date timestamp,
	balance integer,
	address_1 varchar(255),
	address_2 varchar(255),
	address_3 varchar(255),
	city varchar(255),
	province varchar(255),
	country varchar(255),
	phone varchar(255)
);