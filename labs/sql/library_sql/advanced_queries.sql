-- DROP TABLE IF EXISTS books;
-- DROP TABLE IF EXISTS authors;

-- CREATE TABLE authors (
--   id SERIAL PRIMARY KEY,
--   name VARCHAR(40),
--   nationality VARCHAR(255),
--   birth_year INTEGER
-- );

-- CREATE TABLE books (
--   id SERIAL PRIMARY KEY,
--   title VARCHAR(255),
--   publication_date INTEGER,
--   author_id INTEGER
-- );



-- ADVANCED / JOIN QUERIES
-- For all of these queries, you SHOULD NOT use an id # in a WHERE clause

-- Find all fields (book and author related) for all books written by George R.R. Martin.

SELECT * FROM authors JOIN books ON authors.id = books.author_id WHERE author_id =8;
SELECT * FROM authors JOIN books ON authors.id = books.author_id WHERE authors.name = 'George R. R. Martin';


-- Find all fields (book and author related) for all books written by Milan Kundera.

SELECT * FROM authors JOIN books on authors.id = books.author_id WHERE authors.name = 'Milan Kindera';

-- Find all books written by an author from China or the UK.

SELECT * FROM books JOIN authors on books.author_id = authors.id WHERE authors.nationality = 'China' OR authors.nationality = 'United Kingdom';


SELECT * FROM authors 
JOIN books ON authors.id = books.author_id
WHERE authors.nationallity IN ('China', 'United Kingdom');

-- Find out how many books Albert Camus wrote.
SELECT COUNT(title) FROM books JOIN authors on books.author_id = authors.id WHERE authors.name = 'Albert Camus';

-- Find out how many books were written by US authors.
SELECT COUNT(title) FROM books JOIN authors ON books.author_id = authors.id WHERE authors.nationality = 'United States of America';

-- Find all books written after 1930 by authors from Argentina.
SELECT * FROM books JOIN authors ON books.author_id = authors.id WHERE authors.nationality = 'Argentina' AND books.publication_date >= 1930;

-- Find all books written before 1980 by authors not from the US.
SELECT * FROM books JOIN authors ON books.author_id=authors.id WHERE publication_date < 1980 AND authors.nationality != 'United States of America';


-- Find all authors whose names start with 'J'.



-- Find all books whose titles contain 'the'.

-- Find all authors who have written books with that start with the letter 'N'.
