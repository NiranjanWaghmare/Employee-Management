module.exports = (app) => {
    const employees = require('../controllers/employee.controller.js');
  
    app.post('/api/employee', employees.create); 
    app.get('/api/employee', employees.findAll); 
    app.get('/api/employee/:id', employees.findById); 
    app.put('/api/employee/:id', employees.update); 
    app.delete('/api/employee/:id', employees.delete); 
    app.delete('/api/employee', employees.deleteAll); 
  };
  