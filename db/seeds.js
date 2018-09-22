var userSeeds = [
  { name: "Vincent Balog" },
  { name: "Johnsie Keene" },
  { name: "Pauletta Hardegree" },
  { name: "Quinton Fregoso" },
  { name: "Virgil Luedke" },
  { name: "Nilsa Steinhauer" },
  { name: "Dwana January" },
  { name: "Rolland Umland" },
  { name: "Princess Otey" },
  { name: "Vincenzo Leeman" },
];

var seeds = [
  { movieTitle: "The Dark Knight", posterURL: "https://goo.gl/images/5t15Vd" },
  { movieTitle: "Captain America: The Winter Soldier", posterURL: "https://goo.gl/images/vWT7HS" },
  { movieTitle: "Spiderman 2", posterURL: "https://goo.gl/images/NZpZ2B" },
  { movieTitle: "Superman (1978)", posterURL: "https://goo.gl/images/j2qSrc" },
  { movieTitle: "The Avengers", posterURL: "https://goo.gl/images/4jiwJf" },
  { movieTitle: "Batman Begins", posterURL: "https://goo.gl/images/qRu6H9" },
  { movieTitle: "Guardians of the Galaxy", posterURL: "https://goo.gl/images/Xmzqie" },
  { movieTitle: "Logan", posterURL: "https://goo.gl/images/adxta5" }



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
  { user_id: 1, choiceOne: 1, choiceTwo: 2, choiceThree: 3, choiceFour: 4, choiceFive: 5, choiceSix: 6, choiceSeven: 7, choiceEight: 8 },
  { user_id: 2, choiceOne: 1, choiceTwo: 2, choiceThree: 3, choiceFour: 4, choiceFive: 5, choiceSix: 6, choiceSeven: 7, choiceEight: 8 },
  { user_id: 4, choiceOne: 1, choiceTwo: 2, choiceThree: 3, choiceFour: 4, choiceFive: 5, choiceSix: 6, choiceSeven: 7, choiceEight: 8 },
  { user_id: 5, choiceOne: 1, choiceTwo: 2, choiceThree: 3, choiceFour: 4, choiceFive: 5, choiceSix: 6, choiceSeven: 7, choiceEight: 8 },
  { user_id: 6, choiceOne: 1, choiceTwo: 2, choiceThree: 3, choiceFour: 4, choiceFive: 5, choiceSix: 6, choiceSeven: 7, choiceEight: 8 },
  { user_id: 7, choiceOne: 1, choiceTwo: 2, choiceThree: 3, choiceFour: 4, choiceFive: 5, choiceSix: 6, choiceSeven: 7, choiceEight: 8 },
  { user_id: 8, choiceOne: 1, choiceTwo: 2, choiceThree: 3, choiceFour: 4, choiceFive: 5, choiceSix: 6, choiceSeven: 7, choiceEight: 8 },
  { user_id: 9, choiceOne: 1, choiceTwo: 2, choiceThree: 3, choiceFour: 4, choiceFive: 5, choiceSix: 6, choiceSeven: 7, choiceEight: 8 },
  { user_id: 10, choiceOne: 1, choiceTwo: 2, choiceThree: 3, choiceFour: 4, choiceFive: 5, choiceSix: 6, choiceSeven: 7, choiceEight: 8 }
];

var roundOneSeeds = [
//   { user_id: 1, choiceOne: 1, choiceTwo: 3, choiceThree: 5, choiceFour: 7 },
//   { user_id: 2, choiceOne: 1, choiceTwo: 4, choiceThree: 5, choiceFour: 8 },
//   { user_id: 3, choiceOne: 1, choiceTwo: 3, choiceThree: 6, choiceFour: 7 },
//   { user_id: 4, choiceOne: 2, choiceTwo: 3, choiceThree: 5, choiceFour: 8 },
//   { user_id: 5, choiceOne: 1, choiceTwo: 4, choiceThree: 6, choiceFour: 7 },
//   { user_id: 6, choiceOne: 2, choiceTwo: 3, choiceThree: 5, choiceFour: 8 },
//   { user_id: 7, choiceOne: 2, choiceTwo: 4, choiceThree: 6, choiceFour: 7 },
//   { user_id: 8, choiceOne: 1, choiceTwo: 3, choiceThree: 5, choiceFour: 8 },
//   { user_id: 9, choiceOne: 2, choiceTwo: 3, choiceThree: 5, choiceFour: 7 },
//   { user_id: 10, choiceOne: 1, choiceTwo: 4, choiceThree: 6, choiceFour: 8 }
];

var roundTwoSeeds = [
  { user_id: 1, choiceOne: 1, choiceTwo: 5 },
  { user_id: 2, choiceOne: 4, choiceTwo: 8 },
  { user_id: 3, choiceOne: 3, choiceTwo: 6 },
  { user_id: 4, choiceOne: 2, choiceTwo: 8 },
  { user_id: 5, choiceOne: 4, choiceTwo: 7 },
  { user_id: 6, choiceOne: 1, choiceTwo: 6 },
  { user_id: 7, choiceOne: 2, choiceTwo: 7 },
  { user_id: 8, choiceOne: 3, choiceTwo: 5 },
  { user_id: 9, choiceOne: 2, choiceTwo: 5 },
  { user_id: 10, choiceOne: 4, choiceTwo: 8 }
];

var roundThreeSeeds = [
  { user_id: 1, choiceOne: 1 },
  { user_id: 2, choiceOne: 8 },
  { user_id: 3, choiceOne: 3 },
  { user_id: 4, choiceOne: 8 },
  { user_id: 5, choiceOne: 4 },
  { user_id: 6, choiceOne: 1 },
  { user_id: 7, choiceOne: 7 },
  { user_id: 8, choiceOne: 5 },
  { user_id: 9, choiceOne: 2 },
  { user_id: 10, choiceOne: 8 }
];

module.exports = {
  seeds: seeds,
  userSeeds: userSeeds,
  roundZeroSeeds: roundZeroSeeds,
  roundOneSeeds: roundOneSeeds,
  roundTwoSeeds: roundTwoSeeds,
  roundThreeSeeds: roundThreeSeeds
};
