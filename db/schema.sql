### Schema

DROP DATABASE IF EXISTS votingDB;
CREATE DATABASE votingDB;
USE votingDB;

-- INSERT INTO votingDB.categories (category_name) VALUES ('Superhero Movies');
-- INSERT INTO votingDB.categories (category_name) VALUES ('Horror Movies');
-- INSERT INTO votingDB.categories (category_name) VALUES ('Comedy Movies');
-- INSERT INTO votingDB.categories (category_name) VALUES ('Animal GIFs');
-- INSERT INTO votingDB.categories (category_name) VALUES ('Sports GIFs');

CREATE TABLE categories
(
	id INT NOT NULL AUTO_INCREMENT,
	category_name VARCHAR(100),
	category_group INT(100),
	is_category_selected BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

CREATE TABLE choices
(
	id INT NOT NULL AUTO_INCREMENT,
	choice_name VARCHAR(100),
	-- Enumerated (ENUM) types are referring to data types that comprise a static, ordered set of values.
  -- group_code ENUM('A', 'B', 'C', 'D'),
	group_code VARCHAR(1),
	category_group INT(100),
	-- choice_url VARCHAR(255) NOT NULL,
	is_choice_selected BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

CREATE TABLE rounds
(
	id INT NOT NULL AUTO_INCREMENT,
	match_id INT(100),
	is_round_selected BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

CREATE TABLE matches
(
	id INT NOT NULL AUTO_INCREMENT,
	is_match_selected BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

CREATE TABLE group_matches
(
	id INT NOT NULL AUTO_INCREMENT,
	choice_id_first_choice INT(100),
	choice_id_second_choice INT(100),
	group_code VARCHAR(1),
	match_id INT(100),
	PRIMARY KEY (id)
);

CREATE TABLE elimination_matches
(
	id INT NOT NULL AUTO_INCREMENT,
	match_id INT(100),
	elimination_code enum('R1_1', 'R1_2', 'R1_3', 'R1_4', 'R2_1', 'R2_2', 'RF'),
	PRIMARY KEY (id)
);

CREATE TABLE results
(
	id INT NOT NULL AUTO_INCREMENT,
	match_id INT(100),
	score_first_choice INT,
	score_second_choice INT,
	PRIMARY KEY (id)
);

-- -- Enumerated (ENUM) types are referring to data types that comprise a static, ordered set of values.
-- choices(choice_id, choice_name, group_code enum('A', 'B', 'C', 'D'))
-- rounds(round_id, match_id, is_round_selected)
-- matches(match_id, is_match_selected)
-- group_matches(group_match_id, choice_id_first_choice, choice_id_second_choice, group_code, match_id)
-- -- Enumerated (ENUM) types are referring to data types that comprise a static, ordered set of values.
-- elimination_matches(elimiation_matches_id match_id, elimination_code enum('R1_1', 'R1_2', 'R1_3', 'R1_4', 'R2_1', 'R2_2', 'RF')
-- results(match_id, score_first_choice, score_second_choice)

-- CREATE TABLE categories
-- (
-- 	id INT NOT NULL AUTO_INCREMENT,
-- 	category_name VARCHAR(100) NOT NULL,
-- 	-- is_brackets_selected BOOLEAN DEFAULT false,
-- 	PRIMARY KEY (id)
-- );
--
-- CREATE TABLE rounds
-- (
-- 	id INT NOT NULL AUTO_INCREMENT,
-- 	round_name VARCHAR(255) NOT NULL,
-- 	match_name VARCHAR(255) NOT NULL,
-- 	-- is_choices_selected BOOLEAN DEFAULT false,
-- 	PRIMARY KEY (id)
-- );
--
-- CREATE TABLE choices
-- (
-- 	id INT NOT NULL AUTO_INCREMENT,
-- 	category_id INT(100),
-- 	choice_name INT(100),
-- 	choice_url VARCHAR(255) NOT NULL,
-- 	is_choices_selected BOOLEAN DEFAULT false,
-- 	PRIMARY KEY (id)
-- );
--
-- CREATE TABLE users
-- (
-- 	id INT NOT NULL AUTO_INCREMENT,
-- 	user_name INT,
-- 	PRIMARY KEY (id)
-- );
