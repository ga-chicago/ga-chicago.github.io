#1 Create database

CREATE DATABASE huffington_post;

#2 connect to db
\c huffington;

#3 create table
CREATE TABLE sections(id SERIAL PRIMARY KEY,
  title varchar(255), description varchar(255),
  editor_id(255));

CREATE TABLE articles(id SERIAL PRIMARY KEY,
  title varchar(255), section_id integer,
  author_id(255), editor_id(255), photo varchar(255),
  publication_date timestamp);

CREATE TABLE author(id SERIAL PRIMARY KEY,
  first_name varchar(25), last_name varchar(25),
  email varchar(30), twitter_username varchar(25));
