#Create database
CREATE DATABASE paypal;

#Connect to databse
\c paypal;

#Create tables
CREATE TABLE users (id SERIAL PRIMARY KEY, name varchar(255), password varchar(255), email varchar(255));
CREATE TABLE gifts (id SERIAL PRIMARY KEY, price decimal, description varchar(255));
CREATE TABLE purchases (id SERIAL PRIMARY KEY, quantity int, price decimal, description varchar(255));
