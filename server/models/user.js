/*
The purpose of this file is to create a new model when we are trying to perform task related to this particular model 
and define assoication with other table like foreign key etc.
user table has a foreign key of userId from todo table

*/
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  User.associate = (models) => {
    // associations can be defined here
    User.hasMany(models.Todo,{
      as: 'todos',
      foreignKey: 'userId',
    })
  };
  return User;
};