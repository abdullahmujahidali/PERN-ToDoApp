/*
The purpose of this file is to create a new model when we are trying to perform task related to this particular model 
and define assoication with other table like foreign key etc.
todo table has a foreign key of userId from user table
*/

module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('Todo', {
    title: DataTypes.STRING,
    taskPriority: DataTypes.STRING,
    isCompleted:DataTypes.BOOLEAN,
    taskLabel: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Todo.associate = (models) => {
    Todo.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'userId'
    });

  };
  return Todo;
};