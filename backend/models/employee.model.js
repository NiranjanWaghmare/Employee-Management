module.exports = (sequelize, Sequelize) => {
    const Employee = sequelize.define('employee', {
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      phoneNumber: {
        type: Sequelize.STRING
      },
      salary: {
        type: Sequelize.DECIMAL(10, 2) 
      },
      department: {
        type: Sequelize.STRING
      },
      level: {
        type: Sequelize.INTEGER
      }
    });
  
    return Employee;
  };