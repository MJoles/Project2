module.exports = function (sequelize, DataTypes) {
  var Movie = sequelize.define("Movie", {
    movieTitle: DataTypes.STRING,
    posterURL: DataTypes.STRING
    //isSelected: DataTypes.BOOLEAN
  });
  return Movie;
};
