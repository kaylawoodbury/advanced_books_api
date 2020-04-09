'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Books', //source model
      'AuthorId', // name of the new column
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Authors', //name of the target model/table
          key: 'id'
        }
        // onUpdate: 'CASCADE',
        // onDelete: 'SET NULL'
      } //settings
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Books',
      'AuthorId'
    )
  }
};
