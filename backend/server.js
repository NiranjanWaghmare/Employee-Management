const express = require('express');
const db = require('./config/db.config');
const app = express();
const port = 3000;
const bodyparser = require('body-parser');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));



app.get('/', (req, res) => {
  res.send('Hello, Express!');
});



app.listen(port, (err) => {
   if(err){
    console.log(`Express server is listening on port ${port}`+err);
  }else{
    console.log('Everything looks goood');
  }
}); 