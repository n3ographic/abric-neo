const http = require('http');
const express = require('express');
const bodyParser = require('body-parser')
const mysql = require('mysql');
const { parseUrl } = require('mysql/lib/ConnectionConfig');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
//app.use(bodyParser.json())


const con = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'formulaire',
  port : 3306
	});


try{
  con.connect();
} catch(e){
    console.log("Oops ça marche pas")
    console.log(e)

  }



/*con.connect();
console.log("test")*/



app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.get('/', (req, res, next) =>{
  

  res.send('Formulaire sélectionné')
  
})

app.get('/formulaire', (req, res, next) => {
  con.query('SELECT * FROM formulaire', (err, rows, fields) => {
    //if(err) throw err;
    console.log('The solution is :', rows);

  
})
//res.send(rows[0].solution);
});


app.post('/formulaire/add!/:nom/:prenom/:nom/:email/:ville', (req, res, next) => {
  var nom = req.params.nom;
  var prenom = req.params.prenom;
  var mail = req.params.mail;
  var ville = req.params.ville;

  con.query('INSERT INTO formulaire (prenom, nom, email, age, ville) values(' + nom + prenom + mail +  ville +')', (err, rows, fields) => {
    //if(err) throw err;
    console.log('The solution is :', rows);

})
  //res.send(rows[0].solution);
});


app.put('/formulaire/update/:prenom/:prenomUpdate', (req, res, next) => {
  var prenom = req.params.prenom;
  var prenomUpdate = req.params.prenomUpdate;
  con.query(('UPDATE formulaire SET prenom = ' + prenom + ' WHERE prenom LIKE ' + prenomUpdate), (err, rows, fields) => {
    //if(err) throw err;
    console.log('The solution is :', rows);

})

 // res.send(rows[0].solution);
});


app.delete('/formulaire/delete/:nom', (req, res, next) => {
  var nom = req.params.nom;
  con.query(('DELETE FROM formulaire WHERE nom LIKE ' + nom), (err, rows, fields) => {
    //if(err) throw err;
    console.log('The solution is :', rows);

})
//res.send(rows[0].solution);
});



con.end();
app.listen(port, () => console.log(`listening on port ${port}`));