module.exports = function(sequelize, DataTypes) {
  var RoundOne = sequelize.define("RoundOne", {
    choiceOne: DataTypes.STRING,
    choiceTwo: DataTypes.STRING,
    choiceThree: DataTypes.STRING,
    choiceFour: DataTypes.STRING
  });
  return RoundOne;
};
