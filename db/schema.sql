### Schema

CREATE DATABASE votingDB;
USE votingDB;

CREATE TABLE categories
(
	id INT NOT NULL AUTO_INCREMENT,
	category_name VARCHAR(100) NOT NULL,
	-- is_brackets_selected BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

CREATE TABLE rounds
(
	id INT NOT NULL AUTO_INCREMENT,
	round_name VARCHAR(255) NOT NULL,
	match_name VARCHAR(255) NOT NULL,
	-- is_choices_selected BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

CREATE TABLE choices
(
	id INT NOT NULL AUTO_INCREMENT,
	category_id INT(100),
	choice_name INT(100),
	choice_url VARCHAR(255) NOT NULL,
	is_choices_selected BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

CREATE TABLE users
(
	id INT NOT NULL AUTO_INCREMENT,
	user_name INT,
	PRIMARY KEY (id)
);
