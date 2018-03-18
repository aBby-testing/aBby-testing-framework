'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Visitors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.INT
      },
      createdAt: {
        type: Sequelize.STRING
      },
      firstTimeUser: {
        type: Sequelize.STRING
      },
      visitCount: {
        type: Sequelize.INT
      },
      numPagesVisited: {
        type: Sequelize.INT
      },
      layoutType: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Visitors');
  }
};