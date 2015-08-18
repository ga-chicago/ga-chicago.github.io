CREATE DATABASE restfuldogs;

\c restfuldogs;

DROP TABLE dogs;

CREATE TABLE dogs (id SERIAL PRIMARY KEY, name VARCHAR(255), breed VARCHAR(255), master VARCHAR(255), age INTEGER);
