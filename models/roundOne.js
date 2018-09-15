module.exports = function (sequelize, DataTypes) {
  var RoundOne = sequelize.define("RoundOne", {
    choiceOne: DataTypes.INTEGER,
    choiceTwo: DataTypes.INTEGER,
    choiceThree: DataTypes.INTEGER,
    choiceFour: DataTypes.INTEGER
  });
  return RoundOne;
};
