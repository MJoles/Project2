// RoundTwo table structure
module.exports = function(sequelize, DataTypes) {
  var RoundTwo = sequelize.define("RoundTwo", {
    choiceOne: DataTypes.STRING,
    choiceTwo: DataTypes.STRING
  });
  return RoundTwo;
};
