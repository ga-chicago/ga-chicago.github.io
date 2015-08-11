#1 Create DATABASE
CREATE DATABASE facebook;

#2 connect to db
\c facebook;

#3 create table
CREATE TABLE facebook_users(id SERIAL PRIMARY KEY,
  username varchar(25), first_name varchar(25),
  last_name varchar(25), email varchar(25),
  reg_date timestamp);

CREATE TABLE status_updates(id SERIAL PRIMARY KEY,
  user_id integer, post_time timestamp,
  content text, photo varchar(255),
  location varchar(25));

CREATE TABLE likes(id SERIAL PRIMARY KEY,
  user_id integer, status_update_id integer,
  like_time timestamp);
