'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Houses', [{
      name: "Penginapan Senyaman Mungkin",
      address: "Jl. Terus Belok Kiri No. 27, Kec. Barubuat",
      city: "Malang",
      phone: "044-789123",
      email: "nyamansekali@yahoo.com",
      createdAt: new Date (),
      updatedAt: new Date ()
    },{
      name: "Homestay Bahagia",
      address: "Jl. Harapan Baru No. 123, Kec. Simpangsiur",
      city: "Buton",
      phone: "0812-111098",
      email: "happy@gmail.com",
      createdAt: new Date (),
      updatedAt: new Date ()
    },{
      name: "Samudera Guesthouse",
      address: "Jl. Lumba-lumba No. 77, Kec. Bahari",
      city: "Bandar Lampung",
      phone: "0724-22567",
      email: "sgh@gmail.com",
      createdAt: new Date (),
      updatedAt: new Date ()
    },{
      name: "Sudimampir Sejenak",
      address: "Jl. Tanjakan Miring No. 45, Kec. Gunungbatu",
      city: "Lombok Timur",
      phone: "0376-44890",
      email: "sgh@gmail.com",
      createdAt: new Date (),
      updatedAt: new Date ()
    },{
      name: "Rainbow Homestay",
      address: "Jl. Selamat Datang No 101, Kec. Sukasuka",
      city: "Raja Ampat",
      phone: "0971-44890",
      email: "rainbowh@mail.com",
      createdAt: new Date (),
      updatedAt: new Date ()
    }])
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Houses', null, {});
  }
};
