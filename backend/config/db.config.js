const mysql = require('mysql')
const Sequalize = require('sequelize') 
const sequelize = new Sequalize('Employee_DB','root','123456',{
    host: 'localhost',
    dialect: 'mysql'
});
const db = {}

db.Sequelize = Sequalize;
db.sequelize = sequelize;

db.employees = require('../models/employee.model.js')(sequelize,Sequalize);


module.exports  = db;