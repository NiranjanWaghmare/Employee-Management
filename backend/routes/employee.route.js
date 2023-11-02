module.exports = app =>{
    const employees = require('../controllers/employee.controller.js');

    app.post('api/employee', employees.create);
    app.get('api/empoyee/',employees.findAll);
    app.get('api/empoyee/:id',employees.findById);
    app.put ('api/empoyee/:id',employees.update);
    app.delete ('api/empoyee/:id',employees.delete);
    app.delete ('api/empoyee/',employees.deleteAll);
};