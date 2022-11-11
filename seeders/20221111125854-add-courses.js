'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

  await queryInterface.bulkInsert('courses', [{
       title: 'adsi',
       description: 'programacion de sistemas',
       weeks: '8',
       enroll_cost: '500',
       minimum_skill:'800',
       bootcamp_id:'1'
      },

      {
        title: 'videojuegos',
       description: 'sala de computador',
       weeks: '5',
       enroll_cost: '300',
       minimum_skill:'200',
       bootcamp_id:'2'
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('courses', null, {});
  }
};