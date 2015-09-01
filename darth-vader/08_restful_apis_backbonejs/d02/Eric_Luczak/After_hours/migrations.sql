CREATE DATABASE restlessbooks;

\c restlessbooks;

DROP TABLE books;

CREATE TABLE books (id SERIAL PRIMARY KEY, title VARCHAR(255), author VARCHAR(255), year INTEGER);

INSERT INTO books (title, author, year) VALUES ('A Dance with Dragons', 'George R.R. Martin', 2011);
