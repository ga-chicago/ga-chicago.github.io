#1 Create database

CREATE DATABASE reddit;

#2 Connect to db
\c reddit;

#3 Create table
CREATE TABLE subreddits(id SERIAL PRIMARY KEY, title varchar(255),
 description varchar(255), editor_id integer;

CREATE TABLE posts(id SERIAL PRIMARY KEY, title varchar(255), subreddit_id integer, user_id integer, photo varchar(255), post_date timestamp);

CREATE TABLE users(id SERIAL PRIMARY KEY,
  username varchar(25), first_name varchar(25),
  last_name varchar(25), email varchar(30));

CREATE TABLE votes(id SERIAL PRIMARY KEY,
  post_id integer, vote_time timestamp);
