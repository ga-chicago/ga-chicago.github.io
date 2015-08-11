#Create database
CREATE DATABASE reddit;

#Connect to databse
\c reddit;

#Create tables
CREATE TABLE users (id SERIAL PRIMARY KEY, name varchar(255), email varchar(255), password varchar(255));
CREATE TABLE subreddits (id SERIAL PRIMARY KEY, name varchar(255), sub_count int);
CREATE TABLE votes (id SERIAL PRIMARY KEY, user_id int, post_id int, vote_type boolean);
