#1 Create database
CREATE DATABASE huffpost;

#2 Connect to database
\c huffpost

#3 Create tables
CREATE TABLE article(id SERIAL PRIMARY KEY, author_id, section_id, title varchar(255), content varchar(255));
CREATE TABLE author (id SERIAL PRIMARY KEY, name varchar(255), email varchar(255), article_id);
CREATE TABLE sections (id SERIAL PRIMARY KEY, name varchar(255));
