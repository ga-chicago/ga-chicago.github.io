CREATE DATABASE facebook;

\c facebook;

CREATE TABLE post (
	id SERIAL PRIMARY KEY,
	user_id integer,
	title varchar(255),
	content text,
	created_date timestamp,
	updated_date timestamp
);

CREATE TABLE likes (
	id SERIAL PRIMARY KEY,
	user_id integer,
	post_id integer,
	created_date timestamp,
	updated_date timestamp
);

CREATE TABLE users (
	id SERIAL PRIMARY KEY,
	username varchar(40),
	email text,
	password text,
	joined_date timestamp,
	address_1 varchar(255),
	address_2 varchar(255),
	address_3 varchar(255),
	city varchar(255),
	province varchar(255),
	country varchar(255),
	phone varchar(255)
);