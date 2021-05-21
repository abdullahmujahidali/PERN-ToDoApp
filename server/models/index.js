/*
Dotenv:
  dotenv is a no-dependency module that allows us to loads enviornment variables that we have defined for our application
  it is recommended for development side we can hide our secret infromation and from dotenv we can access it.

Config:
  Config allows us to read our .env file that we have created it is a component from our package dotenv
In this file we are creating a token that is valid for only 24hour, after that sesssion (token) will expire
the purpose of using this file is to authenticate a user for next components and make a barrier infront of 
require login components, user is search by primary key if found we return status otherwise user is redirected 

FS:
  Fs stands for File server. The Node. js file system module allows you to work with the file system on your computer.

This file is used for setup database connection and identify enviornment etc.
*/


import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import envVars from '../config/config';

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = envVars[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;