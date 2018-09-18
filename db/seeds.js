var userSeeds = [
  { ip_address: "165.124.145.36"}
];

var seeds = [
  { movieTitle: "The Dark Knight"},
  { movieTitle: "Captain America: The Winter Soldier"},
  { movieTitle: "Spiderman 2"},
  { movieTitle: "Superman (1978)"},
  { movieTitle: "The Avengers"},
  { movieTitle: "Batman Begins"},
  { movieTitle: "Guardians of the Galaxy"},
  { movieTitle: "Logan"}

  // { text: "Horror Movie", movieTitle: "Halloween (1978)", isSelected: false},
  // { text: "Horror Movie", movieTitle: "It Follows", isSelected: false},
  // { text: "Horror Movie", movieTitle: "The Shining", isSelected: false},
  // { text: "Horror Movie", movieTitle: "Psycho", isSelected: false},
  // { text: "Horror Movie", movieTitle: "The Cabin in the Woods", isSelected: false},
  // { text: "Horror Movie", movieTitle: "A Nightmare on Elm Street (1984)", isSelected: false},
  // { text: "Horror Movie", movieTitle: "Scream 2", isSelected: false},
  // { text: "Horror Movie", movieTitle: "Friday the 13th (1980)", isSelected: false},
  //
  // { text: "Comedy Movie", movieTitle: "Monty Python and the Holy Grail", isSelected: false},
  // { text: "Comedy Movie", movieTitle: "Airplane", isSelected: false},
  // { text: "Comedy Movie", movieTitle: "Groundhog Day", isSelected: false},
  // { text: "Comedy Movie", movieTitle: "Ghostbusters", isSelected: false},
  // { text: "Comedy Movie", movieTitle: "The Hangover", isSelected: false},
  // { text: "Comedy Movie", movieTitle: "Dumb and Dumber", isSelected: false},
  // { text: "Comedy Movie", movieTitle: "Vacation", isSelected: false},
  // { text: "Comedy Movie", movieTitle: "Office Space", isSelected: false},
];

var roundZeroSeeds = [
  { user_id: 1, choiceOne: 1, choiceTwo: 2, choiceThree: 3, choiceFour: 4, choiceFive: 5, choiceSix: 6, choiceSeven: 7, choiceEight: 8}
];

var roundOneSeeds = [
  { user_id: 1, choiceOne: 2, choiceTwo: 4, choiceThree: 6, choiceFour: 7 }
];

var roundTwoSeeds = [
  { user_id: 1, choiceOne: 4, choiceTwo: 7 }
];

var roundThreeSeeds = [
  { user_id: 1, choiceOne: 4 }
];

module.exports = {
  seeds: seeds,
  userSeeds : userSeeds,
  roundZeroSeeds: roundZeroSeeds,
  roundOneSeeds: roundOneSeeds,
  roundTwoSeeds: roundTwoSeeds,
  roundThreeSeeds : roundThreeSeeds
};
