'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

  await queryInterface.bulkInsert('users', [{
       name: 'deissy',
       email: 'deissy@misena.edu.co',
       password: "1234"
      },

      {
        name: 'diego',
        email: 'diego@misena.edu.co',
        password: "5678"
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('users', null, {});
  }
};
