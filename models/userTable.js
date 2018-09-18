module.exports = function (sequelize, DataTypes) {
  var userTable = sequelize.define("userTable", {
    ip_address: DataTypes.STRING
  });
  return userTable;
};
