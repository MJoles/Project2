module.exports = function (sequelize, DataTypes) {
  var RoundTwo = sequelize.define("RoundTwo", {
    choice1: DataTypes.INT,
    choice2: DataTypes.INT,
  });
  return RoundTwo;
};
