const express = require('express');

const app = express();

console.log("test")

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.get('/formulaire', (req, res, next) => {
  res.send('SELECT * FROM formulaire');
});

app.post('/formulaire', (req, res, next) => {
  var c = 'C%'
  res.send('DELETE FROM formulaire WHERE nom LIKE' + c );
});

app.get('/formulaire', (req, res, next) => {
  res.send('SELECT * FROM formulaire');
});

app.put('/formulaire', (req, res, next) => {
  var prenom = 'Antoine';
  var prenomUpdate = 'E%';
  res.send('UPDATE formulaire SET prenom = ' + prenom + ' WHERE prenom LIKE ' + prenomUpdate);
});

app.get('/formulaire', (req, res, next) => {
  res.send('SELECT * FROM formulaire');
});

app.delete('/formulaire', (req, res, next) => {
  var nom = 'C%'
  res.send('DELETE FROM formulaire WHERE nom LIKE ' + nom );
});

app.get('/formulaire', (req, res, next) => {
  res.send('SELECT * FROM formulaire');
});

module.exports = app;