CREATE TABLE books (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title varchar(1000) NOT NULL,
  author varchar(1000) NOT NULL,
  isbn varchar(100) NOT NULL,
  publishYear NUMERIC(4) NOT NULL,
  reserved BOOL NOT NULL DEFAULT FALSE
)
