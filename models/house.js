'use strict';
module.exports = function(sequelize, DataTypes) {
  var House = sequelize.define('House', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    price: DataTypes.STRING
}, {
    hooks: {
        beforeCreate: (models) => {
            let tempPrice = 'IDR '
            models.price = tempPrice + models.price
        }
    }
});
  House.associate = (models) => {
      House.belongsToMany(models.Customer, {through: "CustomerHouse"});
  }
  return House;
};
