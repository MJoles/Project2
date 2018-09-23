// Movie table
module.exports = function (sequelize, DataTypes) {
  var Movie = sequelize.define("Movie", {
    movieTitle: DataTypes.STRING,
    posterURL: DataTypes.STRING
    // ultimately decided against using this boolean field when a user selects a movie
    //isSelected: DataTypes.BOOLEAN
  });
  return Movie;
};
