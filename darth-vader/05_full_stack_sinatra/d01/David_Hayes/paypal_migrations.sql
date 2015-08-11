#1 Create DATABASE
CREATE DATABASE paypal1;

#2 connect to db
\c paypal1;

#3 create table

CREATE TABLE users(id SERIAL PRIMARY KEY,
  username varchar(255), firstname varchar(15),
  lastname varchar(255), email varchar(30),
  reg_date timestamp);

CREATE TABLE purchases(id SERIAL PRIMARY KEY,
  user_id integer, vendor_id integer, description varchar(255),
  amount money, purchase_datetime timestamp);

CREATE TABLE gifts(id SERIAL PRIMARY KEY,
  donor_id integer, recipient_id integer, message varchar(255),
  gift_datetime timestamp);
