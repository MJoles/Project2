-- Added some dummy data for movies (superhero movies and horror movies, and comedies)
-- Need to add more dummy data (regarding GIFs)

INSERT INTO votingDB.categories (category_name, category_group) VALUES ('Superhero Movies', 1);
INSERT INTO votingDB.categories (category_name, category_group) VALUES ('Horror Movies', 2);
INSERT INTO votingDB.categories (category_name, category_group) VALUES ('Comedy Movies', 3);
INSERT INTO votingDB.categories (category_name, category_group) VALUES ('Animal GIFs', 4);
INSERT INTO votingDB.categories (category_name, category_group) VALUES ('Sports GIFs', 5);
-- Superhero Movies
INSERT INTO votingDB.choices (choice_name, group_code, category_group, is_choice_selected) VALUES ('The Dark Knight', 'A', 1, true);
INSERT INTO votingDB.choices (choice_name, group_code, category_group, is_choice_selected) VALUES ('Captain America: The Winter Soldier', 'B', 1, false);
INSERT INTO votingDB.choices (choice_name, group_code, category_group, is_choice_selected) VALUES ('Spiderman 2', 'C', 1, true);
INSERT INTO votingDB.choices (choice_name, group_code, category_group, is_choice_selected) VALUES ('Superman (1978)', 'D', 1, false);
INSERT INTO votingDB.choices (choice_name, group_code, category_group, is_choice_selected) VALUES ('The Avengers', 'E', 1, true);
INSERT INTO votingDB.choices (choice_name, group_code, category_group, is_choice_selected) VALUES ('Batman Begins', 'F', 1, false);
INSERT INTO votingDB.choices (choice_name, group_code, category_group, is_choice_selected) VALUES ('Guardians of the Galaxy', 'G', 1, true);
INSERT INTO votingDB.choices (choice_name, group_code, category_group, is_choice_selected) VALUES ('Logan', 'H', 1, false);
-- Horror Movies
INSERT INTO votingDB.choices (choice_name, group_code, category_group, is_choice_selected) VALUES ('Halloween (1978)', 'A', 2, false);
INSERT INTO votingDB.choices (choice_name, group_code, category_group, is_choice_selected) VALUES ('It Follows', 'B', 2, true);
INSERT INTO votingDB.choices (choice_name, group_code, category_group, is_choice_selected) VALUES ('The Shining', 'C', 2, false);
INSERT INTO votingDB.choices (choice_name, group_code, category_group, is_choice_selected) VALUES ('Psycho (1960)', 'D', 2, true);
INSERT INTO votingDB.choices (choice_name, group_code, category_group, is_choice_selected) VALUES ('Scream', 'E', 2, false);
INSERT INTO votingDB.choices (choice_name, group_code, category_group, is_choice_selected) VALUES ('The Cabin in the Woods', 'F', 2, true);
INSERT INTO votingDB.choices (choice_name, group_code, category_group, is_choice_selected) VALUES ('A Nightmare on Elm Street (1984)', 'G', 2, false);
INSERT INTO votingDB.choices (choice_name, group_code, category_group, is_choice_selected) VALUES ('Scream 3', 'H', 2, true);
-- Comedies
INSERT INTO votingDB.choices (choice_name, group_code, category_group, is_choice_selected) VALUES ('Monty Python and the Holy Grail', 'A', 3, false);
INSERT INTO votingDB.choices (choice_name, group_code, category_group, is_choice_selected) VALUES ('Airplane', 'B', 3, true);
INSERT INTO votingDB.choices (choice_name, group_code, category_group, is_choice_selected) VALUES ('Groundhog Day', 'C', 3, false);
INSERT INTO votingDB.choices (choice_name, group_code, category_group, is_choice_selected) VALUES ('Ghostbusters', 'D', 3, true);
INSERT INTO votingDB.choices (choice_name, group_code, category_group, is_choice_selected) VALUES ('The Hangover', 'E', 3, false);
INSERT INTO votingDB.choices (choice_name, group_code, category_group, is_choice_selected) VALUES ('Dumb and Dumber', 'F', 3, true);
INSERT INTO votingDB.choices (choice_name, group_code, category_group, is_choice_selected) VALUES ('Vacation', 'G', 3, false);
INSERT INTO votingDB.choices (choice_name, group_code, category_group, is_choice_selected) VALUES ('Office Space', 'H', 3, true);

SELECT * FROM votingDB.categories;
SELECT * FROM votingDB.choices;
