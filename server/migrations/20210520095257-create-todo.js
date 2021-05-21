/*

Sequelize:
  Sequlize is a Node.js ORM tool for SQL databases, helps in database functionalities in the server side

This file is responsible for creating model for our task table with its attributes 

Up in sequalize means that all commands will be executed when running sequalize.
Down in sequalize means all commands will be executed when running sequalize db:migrate:undo
Used for creating tasks

*/
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Todos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        refernces: {
          model: 'Users',
          key: 'id'
        }
      },
      isCompleted: {
        type: Sequelize.BOOLEAN,
      },
      taskPriority: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      taskLabel: {
        type: Sequelize.STRING,
        allowNull: true,
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Todos');
  }
};