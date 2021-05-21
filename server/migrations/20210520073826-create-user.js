/*

Sequelize:
  Sequlize is a Node.js ORM tool for SQL databases, helps in database functionalities in the server side

This file is responsible to create a model here name is actually username and it must be unique 

Up in sequalize means that all commands will be executed when running sequalize.
Down in sequalize means all commands will be executed when running sequalize db:migrate:undo
Used for authentication (Sign Up & Sign In)
*/

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        unique: true
      },
      email: {
        type: Sequelize.STRING,
        unique: true, 
      },
      password: {
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};