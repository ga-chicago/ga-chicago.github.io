CREATE DATABASE great_movies;
\c great_movies;
CREATE TABLE movies (id SERIAL PRIMARY KEY, title varchar(255), release_year integer, director varchar(25), genre varchar(255), star1 varchar(40), star2 varchar(40), star3 varchar(40), rating integer);
