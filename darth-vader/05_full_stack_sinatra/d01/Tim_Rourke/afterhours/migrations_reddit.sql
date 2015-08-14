CREATE DATABASE reddit;

\c reddit;

CREATE TABLE votes (
	id SERIAL PRIMARY KEY,
	user_id varchar(255),
	subreddit_id varchar(255),
	created_date timestamp,
	updated_date timestamp
);

CREATE TABLE subreddits (
	id SERIAL PRIMARY KEY,
	user_id integer,
	title varchar(255),
	content text,
	created_date timestamp,
	updated_date timestamp,
	is_published char(1)
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
	phone varchar(255),
	is_admin char(1)
);