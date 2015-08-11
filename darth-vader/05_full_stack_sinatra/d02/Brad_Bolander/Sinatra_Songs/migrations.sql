CREATE DATABASE songs;

\c songs

CREATE TABLE playList(id SERIAL PRIMARY KEY, title varchar(255), artist varchar(255), album varchar(255), releaseYear int);

INSERT INTO playList (title, artist, album, releaseYear)
VALUES ('Little Secrets', 'Passion Pit', 'Manners', '2008');

INSERT INTO playList (title, artist, album, releaseYear)
VALUES ('telegraph ave.', 'Childish Gambino', 'Because the Internet', '2013');

INSERT INTO playList (title, artist, album, releaseYear)
VALUES ('Whitby', 'The Octopus Project', 'Fever Forms', '2013');
