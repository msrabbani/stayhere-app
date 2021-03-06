'use strict';
module.exports = function(sequelize, DataTypes) {
  var Customer = sequelize.define('Customer', {
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING
  });
  Customer.associate = (models) => {
      Customer.belongsToMany(models.House, {through: "CustomerHouse"});
  }
  return Customer;
};
