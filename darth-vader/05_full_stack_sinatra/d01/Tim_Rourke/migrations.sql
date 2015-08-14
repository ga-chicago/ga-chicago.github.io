CREATE DATABASE todo_items;

\c todo_items;

CREATE TABLE todo_list (
	id SERIAL PRIMARY KEY,
	name varchar(255),
	description varchar(255));