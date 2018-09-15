module.exports = function (sequelize, DataTypes) {
  var RoundZero = sequelize.define("RoundZero", {
    choice1: DataTypes.INTEGER,
    choice2: DataTypes.INTEGER,
    choice3: DataTypes.INTEGER,
    choice4: DataTypes.INTEGER,
    choice5: DataTypes.INTEGER,
    choice6: DataTypes.INTEGER,
    choice7: DataTypes.INTEGER,
    choice8: DataTypes.INTEGER
  });
  return RoundZero;
};
