const express = require('express');
const db = require('./config/db.config');
const app = express();
const port = 3000;
const bodyparser = require('body-parser');
const cors = require('cors');
// const io = require('socket.io')(server);

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.use(
cors({
  origin: 'http://localhost:4200', // Replace with the actual origin of your Angular app
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Specify the HTTP methods you want to allow
  preflightContinue: false,
  optionsSuccessStatus: 204,
})
)

// io.on('connection', socket => {
//   console.log('A user connected');

//   socket.on('employee-added', () => {
//     io.emit('data-updated', 'Employee data has been updated');
//   });
//   socket.on('disconnect', () => {
//     console.log('A user disconnected');
//   });
// });

// db.sequelize.sync({ force: true }).then(() => {
//   console.log('Recreated the database with new tables.');
// });


app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

require('./routes/employee.route.js')(app);

app.listen(port, (err) => {
   if(err){
    console.log(`Errorrr${port}`+err);
  }else{
    console.log('Everything looks goood'+port);
  }
}); 