module.exports = function (sequelize, DataTypes) {
  var RoundThree = sequelize.define("RoundThree", {
    choiceOne: DataTypes.INTEGER,
  });
  return RoundThree;
};
