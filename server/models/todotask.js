module.exports = (sequelize, DataTypes) => {
  const TodoTask = sequelize.define('TodoTask', {
    text: DataTypes.STRING,
    todoId: DataTypes.INTEGER,
    isCompleted: DataTypes.BOOLEAN,
    taskPriority: DataTypes.STRING
  }, {});
  TodoTask.associate = (models) => {
    TodoTask.belongsTo(models.Todo, {
      as: 'todo',
      foreignKey: 'todoId'
    });
  };
  return TodoTask;
};