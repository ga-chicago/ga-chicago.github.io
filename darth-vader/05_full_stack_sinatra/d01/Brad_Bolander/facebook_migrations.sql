#1 Create database
CREATE DATABASE facebook;

#2 Connect to database
\c facebook

#3 Create tables
CREATE TABLE user(id SERIAL PRIMARY KEY, first_name varchar(255), last_name varchar(255), password varchar(255), email varchar(255), joinDate date);
CREATE TABLE status_updates(id SERIAL PRIMARY KEY, user_id, post_time timestamp, content varchar(255))
CREATE TABLE likes(id SERIAL PRIMARY KEY, user_id, status_updates_id)
