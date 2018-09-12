### Schema

CREATE DATABASE votingDB;
USE votingDB;

CREATE TABLE brackets
(
	id INT NOT NULL AUTO_INCREMENT,
	category_name VARCHAR(100) NOT NULL,
	-- is_brackets_selected BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

CREATE TABLE choices
(
	id INT NOT NULL AUTO_INCREMENT,
	bracket_id INT(100),
	choice_name INT(100),
	choice_url VARCHAR(255) NOT NULL,
	-- is_choices_selected BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

CREATE TABLE votes
(
	id INT NOT NULL AUTO_INCREMENT,
	user_id INT,
	bracket_id INT,
	vote_name INT(255),
	round_number INT,
	-- vote_number INT,
	-- is_votes_selected BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

CREATE TABLE users
(
	id INT NOT NULL AUTO_INCREMENT,
	user_name INT,
	PRIMARY KEY (id)
);
