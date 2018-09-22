// module.exports = function (sequelize, DataTypes) {
//   var userTable = sequelize.define("userTable", {
//     ip_address: DataTypes.STRING
//   });
//   return userTable;
// };

module.exports = function (sequelize, DataTypes) {
  var userTable = sequelize.define("userTable", {
    name: {
    type: DataTypes.STRING,
    allowNull: false,
      validate: {
        len: [1]
      }
    }
  });
  return userTable;
};
