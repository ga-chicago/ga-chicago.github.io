#1 Create database
CREATE DATABASE todo_items;

#2 Connect to database
\c todo_items

#3 Create table
CREATE TABLE todo_list (id SERIAL PRIMARY KEY,
name varchar(255), description varchar(255));
