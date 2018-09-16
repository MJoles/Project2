module.exports = function (sequelize, DataTypes) {
  var Movie = sequelize.define("Movie", {
    movieTitle: DataTypes.STRING,
    isSelected: DataTypes.BOOLEAN
  });
  return Movie;
};
