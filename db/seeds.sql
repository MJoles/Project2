INSERT INTO votingDB.categories (category_name) VALUES ('Superhero Movies');
INSERT INTO votingDB.categories (category_name) VALUES ('Horror Movies');
INSERT INTO votingDB.categories (category_name) VALUES ('Comedy Movies');
INSERT INTO votingDB.categories (category_name) VALUES ('Animal GIFs');
INSERT INTO votingDB.categories (category_name) VALUES ('Sports GIFs');

INSERT INTO votingDB.rounds (round_name, match_name) VALUES ('Round One', 'Match One');
INSERT INTO votingDB.rounds (round_name, match_name) VALUES ('Round One', 'Match Two');
INSERT INTO votingDB.rounds (round_name, match_name) VALUES ('Round One', 'Match Three');
INSERT INTO votingDB.rounds (round_name, match_name) VALUES ('Round One', 'Match Four');
INSERT INTO votingDB.rounds (round_name, match_name) VALUES ('Round Two', 'Match One');
INSERT INTO votingDB.rounds (round_name, match_name) VALUES ('Round Two', 'Match Two');
INSERT INTO votingDB.rounds (round_name, match_name) VALUES ('Round Two', 'Match Three');
INSERT INTO votingDB.rounds (round_name, match_name) VALUES ('Round Two', 'Match Four');



INSERT INTO votingDB.choices (choice_name) VALUES ('');



CREATE TABLE choices
(
	id INT NOT NULL AUTO_INCREMENT,
	category_id INT(100),
	choice_name INT(100),
	choice_url VARCHAR(255) NOT NULL,
	-- is_choices_selected BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);


INSERT INTO votingDB.choices (choice_name, , is_choice_selected) VALUES ('The Dark Knight', true);
INSERT INTO votingDB.choices (choice_name, , is_choice_selected) VALUES ('Captain America: The Winter Soldier', false);
INSERT INTO votingDB.choices (choice_name, , is_choice_selected) VALUES ('Spiderman 2', false);
INSERT INTO votingDB.choices (choice_name, , is_choice_selected) VALUES ('Superman (1978)', false);
INSERT INTO votingDB.choices (choice_name, , is_choice_selected) VALUES ('The Avengers', false);
INSERT INTO votingDB.choices (choice_name, , is_choice_selected) VALUES ('Batman Begins', false);
INSERT INTO votingDB.choices (choice_name, , is_choice_selected) VALUES ('Guardians of the Galaxy', false);
INSERT INTO votingDB.choices (choice_name, , is_choice_selected) VALUES ('Logan', false);

INSERT INTO votingDB.subCategory (category_name, is_category_selected) VALUES ('Horror Movies', true);

INSERT INTO votingDB.choice (choice_name, choice_url, is_choice_selected) VALUES ('Halloween (1978)', '', false);
INSERT INTO votingDB.choice (choice_name, choice_url, is_choice_selected) VALUES ('It Follows', '', true);
INSERT INTO votingDB.choice (choice_name, choice_url, is_choice_selected) VALUES ('The Shining', '', false);
INSERT INTO votingDB.choice (choice_name, choice_url, is_choice_selected) VALUES ('Psycho (1960)', '', true);
INSERT INTO votingDB.choice (choice_name, choice_url, is_choice_selected) VALUES ('Scream', '', false);
INSERT INTO votingDB.choice (choice_name, choice_url, is_choice_selected) VALUES ('The Cabin in the Woods', '', true);
INSERT INTO votingDB.choice (choice_name, choice_url, is_choice_selected) VALUES ('A Nightmare on Elm Street (1984)', '', false);
INSERT INTO votingDB.choice (choice_name, choice_url, is_choice_selected) VALUES ('Scream 3', '', true);

INSERT INTO votingDB.subCategory (category_name, is_category_selected) VALUES ('Comedy Movies', false);

INSERT INTO votingDB.choice (choice_name, choice_url, is_choice_selected) VALUES ('Monty Python and the Holy Grail', '', false);
INSERT INTO votingDB.choice (choice_name, choice_url, is_choice_selected) VALUES ('Airplane', '', false);
INSERT INTO votingDB.choice (choice_name, choice_url, is_choice_selected) VALUES ('Groundhog Day', '', false);
INSERT INTO votingDB.choice (choice_name, choice_url, is_choice_selected) VALUES ('Ghostbusters', '', false);
INSERT INTO votingDB.choice (choice_name, choice_url, is_choice_selected) VALUES ('The Hangover', '', false);
INSERT INTO votingDB.choice (choice_name, choice_url, is_choice_selected) VALUES ('Dumb and Dumber', '', false);
INSERT INTO votingDB.choice (choice_name, choice_url, is_choice_selected) VALUES ('Vacation', '', false);
INSERT INTO votingDB.choice (choice_name, choice_url, is_choice_selected) VALUES ('Office Space', '', false);

INSERT INTO votingDB.vote (vote_name, vote_total, is_vote_selected) VALUES ('Airplane', 5, true);
INSERT INTO votingDB.vote (vote_name, vote_total, is_vote_selected) VALUES ('Airplane', 5, true);
INSERT INTO votingDB.vote (vote_name, vote_total, is_vote_selected) VALUES ('Airplane', 5, true);
INSERT INTO votingDB.vote (vote_name, vote_total, is_vote_selected) VALUES ('Airplane', 5, true);
INSERT INTO votingDB.vote (vote_name, vote_total, is_vote_selected) VALUES ('Airplane', 5, true);
INSERT INTO votingDB.vote (vote_name, vote_total, is_vote_selected) VALUES ('Airplane', 5, true);
INSERT INTO votingDB.vote (vote_name, vote_total, is_vote_selected) VALUES ('Airplane', 5, true);
