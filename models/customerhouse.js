'use strict';
// const model = require('../models')

module.exports = function(sequelize, DataTypes) {
  var CustomerHouse = sequelize.define('CustomerHouse', {
    CustomerId: DataTypes.INTEGER,
    HouseId: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    comment: DataTypes.STRING
});

  CustomerHouse.associate=(models)=>{
      CustomerHouse.belongsTo(models.Customer);
      CustomerHouse.belongsTo(models.House);
  }
  return CustomerHouse;
};
