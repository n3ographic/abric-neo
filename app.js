const http = require('http');
const express = require('express');
const bodyParser = require('body-parser')
const mysql = require('mysql');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());


const con = mySql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'formulaire'
	});


con.connect();

console.log("test")



app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.get('/formulaire', (req, res, next) => {
  con.query('SELECT * FROM formulaire', (err, rows, fields) => {
    if(err) throw err
    console.log('The solution is :', rows[0].solution);

})
res.send(rows[0].solution);
});


app.post('/formulaire-add/:nom/:prenom/:nom/:email/:ville', (req, res, next) => {
  var c = 'C%';
  var nom = 'Lén';
  var prenom = 'Pretsell';
  var mail = 'bpretsell0@java.com';
  var ville = 'Numata';

  con.query('insert into formulaire (id, prenom, nom, email, age, ville) values', (err, rows, fields) => {
    if(err) throw err
    console.log('The solution is :', rows[0].solution);

})
  res.send(rows[0].solution);
});


app.put('/formulaire-update/:prenom', (req, res, next) => {
  var prenom = 'Antoine';
  var prenomUpdate = 'E%';
  con.query(('UPDATE formulaire SET prenom = ' + prenom + ' WHERE prenom LIKE ' + prenomUpdate), (err, rows, fields) => {
    if(err) throw err
    console.log('The solution is :', rows[0].solution);

})

  res.send(rows[0].solution);
});


app.delete('/formulaire-delete', (req, res, next) => {
  var nom = 'C%'

  con.query(('DELETE FROM formulaire WHERE nom LIKE ' + nom), (err, rows, fields) => {
    if(err) throw err
    console.log('The solution is :', rows[0].solution);

})
res.send(rows[0].solution);
});



con.end();
app.listen(port, () => console.log('listening on port ${port}'));