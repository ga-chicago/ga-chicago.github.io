CREATE DATABASE huffington;

\c huffington;

CREATE TABLE article (
	id SERIAL PRIMARY KEY,
	author_ids text,
	section_ids text,
	title varchar(255),
	content text,
	created_date timestamp,
	updated_date timestamp,
	is_published char(1)
);

CREATE TABLE section (
	id SERIAL PRIMARY KEY,
	title varchar(255),
	description text,
	created_date timestamp,
	updated_date timestamp,
	is_published char(1)
);

CREATE TABLE authors (
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
	phone varchar(255),
	is_admin char(1)
);