module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('Todo', {
    title: DataTypes.STRING,
    taskPriority: DataTypes.STRING,
    isCompleted:DataTypes.BOOLEAN,
    userId: DataTypes.INTEGER
  }, {});
  Todo.associate = (models) => {
    // associations can be defined here
    Todo.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'userId'
    });
    Todo.hasMany(models.TodoTask, {
      as: 'TodoTasks',
      foreignKey: 'todoId'
    });
  };
  return Todo;
};