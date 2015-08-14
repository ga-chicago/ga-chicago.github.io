CREATE DATABASE sinatra_songs;

\c sinatra_songs;

CREATE TABLE songs (
	id SERIAL PRIMARY KEY,
	title varchar(255),
	artist varchar(255),
	album varchar(255),
	release_year varchar(255),
	likes integer,
	spotify_url varchar(255)
);