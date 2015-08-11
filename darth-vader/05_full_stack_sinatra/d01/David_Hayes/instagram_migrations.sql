#1 Create database

CREATE DATABASE instagram;

#2 Connect to db
\c instagram;

#3 Create table
CREATE TABLE users(id SERIAL PRIMARY KEY,
  username varchar(25), email varchar(30),
  photo varchar(255));

CREATE TABLE hashtags(id SERIAL PRIMARY KEY,
  photo_id integer, hastag_text varchar(255));

CREATE TABLE photos(id SERIAL PRIMARY KEY,
  resource varchar(255), caption varchar(255),
  latitude float8, longitutde float8, userid integer);

CREATE TABLE comments(id SERIAL PRIMARY KEY,
  photo_id integer, user_id integer,
  comment_date timestamp, comment_text varchar(255));
