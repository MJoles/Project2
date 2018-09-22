module.exports = function (sequelize, DataTypes) {
  var RoundZero = sequelize.define("RoundZero", {
    choiceOne: DataTypes.STRING,
    choiceTwo: DataTypes.STRING,
    choiceThree: DataTypes.STRING,
    choiceFour: DataTypes.STRING,
    choiceFive: DataTypes.STRING,
    choiceSix: DataTypes.STRING,
    choiceSeven: DataTypes.STRING,
    choiceEight: DataTypes.STRING
  });
  return RoundZero;
};
