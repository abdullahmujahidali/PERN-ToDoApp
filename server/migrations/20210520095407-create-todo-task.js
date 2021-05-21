/**
 * This file is a sub file which was first being designed for creating sub labels which was later trasnfered to the create-todo file
 */
module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('TodoTasks', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        text: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        todoId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          refernces: {
            model: 'Todos',
            key: 'id'
          }
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
      await queryInterface.dropTable('TodoTasks');
    }
  };