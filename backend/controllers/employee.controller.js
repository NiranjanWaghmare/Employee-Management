const db = require('../config/db.config')
const Employee = db.employees

exports.create = (req, res) => {
  console.log("creating");
    const{ name,email,phoneNumber,salary,department,level } = req.body;
    
    Employee.create({
        name,
        email,
        phoneNumber,
        salary,
        department,
        level 
    }).then(employee=>{
        res.status(201).json(employee);
    }).catch(err=>{
        res.status(500).json({message: err.message})
    });
  };
  
  exports.findAll = (req, res) => {
    console.log('Select *')
    Employee.findAll()
    .then(employees => {
      res.status(200).json(employees);
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    });
  };
  
  exports.findById = (req, res) => {
    const employeeId = req.params.id;

  Employee.findByPk(employeeId)
    .then(employee => {
      if (employee) {
        res.status(200).json(employee);
      } else {
        res.status(404).json({ message: 'Employee not found' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    });
  };
  
  exports.update = (req, res) => {
    const employeeId = req.params.id;
    const updatedEmployee = req.body;
  
    Employee.findByPk(employeeId)
      .then(employee => {
        if (employee) {
          return employee.update(updatedEmployee);
        } else {
          return Promise.reject('Employee not found');
        }
      })
      .then(updated => {
        res.status(200).json(updated);
      })
      .catch(err => {
        res.status(500).json({ message: err.message });
      });
  };
  
  exports.delete = (req, res) => {
    const employeeId = req.params.id;

    Employee.findByPk(employeeId)
      .then(employee => {
        if (employee) {
          return employee.destroy();
        } else {
          return Promise.reject('Employee not found');
        }
      })
      .then(() => {
        res.status(204).end();
      })
      .catch(err => {
        res.status(500).json({ message: err.message });
      });
  };
  
  exports.deleteAll = (req, res) => {
    Employee.destroy({ where: {} })
    .then(() => {
      res.status(204).end();
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    });
  };