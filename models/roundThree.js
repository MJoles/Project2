// RoundThree table structure
module.exports = function (sequelize, DataTypes) {
  var RoundThree = sequelize.define("RoundThree", {
    choiceOne: DataTypes.STRING,
  });
  return RoundThree;
};
