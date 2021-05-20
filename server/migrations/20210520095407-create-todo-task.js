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
        type: Sequelize.STRING
      },
      todoId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        refernces: {
          model: 'Todos',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      isCompleted:{
        type: Sequelize.BOOLEAN,
      },
      taskPriority:{
        type: Sequelize.STRING,
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