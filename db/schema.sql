### Schema

CREATE DATABASE votingDB;
USE votingDB;

CREATE TABLE category
(
	category_id int NOT NULL AUTO_INCREMENT,
	category_name varchar(100) NOT NULL,
	choice_id int(100),
	choice_name int(100),
	is_selected BOOLEAN DEFAULT false,
	PRIMARY KEY (category_id)
);

CREATE TABLE bracketItems
(
	bracketItem_id int NOT NULL AUTO_INCREMENT,
	url varchar(255) NOT NULL,
	PRIMARY KEY (bracketItem_id)
);

CREATE TABLE votes
(
	votes_id int NOT NULL AUTO_INCREMENT,
	vote int(255),
	PRIMARY KEY (votes_id)
);
