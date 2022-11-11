'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

  await queryInterface.bulkInsert('reviews', [{
       title: 'software',
       text: 'programacion de sistemas',
       rating: '5',
       bootcamp_id: '1',
       user_id	:'1'
      },

      {
        title: 'soft',
        text: 'programacion',
        rating: '8',
        bootcamp_id: '2',
        user_id	:'2'
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('reviews', null, {});
  }
};
