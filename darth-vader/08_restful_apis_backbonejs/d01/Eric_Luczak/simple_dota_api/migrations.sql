CREATE DATABASE simpleheroes;

\c simpleheroes;

CREATE TABLE heros (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  ability_1 VARCHAR(255),
  ability_2 VARCHAR(255),
  ability_3 VARCHAR(255),
  ability_4 VARCHAR(255)
);
