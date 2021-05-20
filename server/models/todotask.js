module.exports = (sequelize, DataTypes) => {
  const TodoItem = sequelize.define('TodoItem', {
    text: DataTypes.STRING,
    todoId: DataTypes.INTEGER,
    isCompleted: DataTypes.BOOLEAN,
    taskPriority: DataTypes.STRING
  }, {});
  TodoItem.associate = (models) => {
    TodoItem.belongsTo(models.Todo, {
      as: 'todo',
      foreignKey: 'todoId'
    });
  };
  return TodoItem;
};