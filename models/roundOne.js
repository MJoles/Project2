module.exports = function (sequelize, DataTypes) {
  var RoundOne = sequelize.define("RoundOne", {
    choice1: DataTypes.INT,
    choice2: DataTypes.INT,
    choice3: DataTypes.INT,
    choice4: DataTypes.INT
  });
  return RoundOne;
};
