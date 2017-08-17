'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('Customers', [{
        name: 'Olih Solihin',
        username:"olihsol",
        address:"Jl. Kemerdekaan no.17",
        phone:"021 3456789",
        email:"olihsol@mail.com",
        createdAt: new Date(),
        updatedAt: new Date()
    },{
        name: 'Udin Merang',
        username:"udinmer",
        address:"Jl. Proklamasi no.45",
        phone:"021 43547698",
        email:"udinmer@mail.com",
        createdAt: new Date(),
        updatedAt: new Date()
    },{
        name: 'Steven Cau',
        username:"stevecau",
        address:"Jl. pisang no.69",
        phone:"021 19293847",
        email:"stevencau@mail.com",
        createdAt: new Date(),
        updatedAt: new Date()
    }], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
