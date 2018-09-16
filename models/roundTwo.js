module.exports = function (sequelize, DataTypes) {
  var RoundTwo = sequelize.define("RoundTwo", {
    choiceOne: DataTypes.INTEGER,
    choiceTwo: DataTypes.INTEGER,
  });
  return RoundTwo;
};
