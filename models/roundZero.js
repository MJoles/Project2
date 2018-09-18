module.exports = function (sequelize, DataTypes) {
  var RoundZero = sequelize.define("RoundZero", {
    choiceOne: DataTypes.INTEGER,
    choiceTwo: DataTypes.INTEGER,
    choiceThree: DataTypes.INTEGER,
    choiceFour: DataTypes.INTEGER,
    choiceFive: DataTypes.INTEGER,
    choiceSix: DataTypes.INTEGER,
    choiceSeven: DataTypes.INTEGER,
    choiceEight: DataTypes.INTEGER
  });
  return RoundZero;
};
