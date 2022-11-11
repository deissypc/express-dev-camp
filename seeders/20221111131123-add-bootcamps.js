'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

  await queryInterface.bulkInsert('bootcamps', [{
    name: 'curso',
    description: 'programacion',
    average_cost	: '600',
    average_rating: '500',
    user_id:'1'
      },

      {
        name: 'ads',
        description: 'programa',
        average_cost	: '300',
        average_rating: '500',
        user_id:'2'
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('bootcamps', null, {});
  }
};
