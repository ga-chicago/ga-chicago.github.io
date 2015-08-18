CREATE DATABASE auth_example;

\c auth_example

CREATE TABLE user_acounts (id SERIAL PRIMARY KEY, name varchar(255), password_hash varchar(255), password_salt varchar(255));
