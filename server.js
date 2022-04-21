const http = require('http');
const app = require('./app');

app.set('port', process.env.PORT || 3000);
const server = http.createServer(app);


var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'formulaire'
});

connection.connect();

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connecté à la base de données MySQL!");
  connection.query("SELECT * FROM formulaire", function (err, result) {
    if (err) throw err;
    console.log(result);
  });

});

connection.end(); 


server.listen(process.env.PORT || 3000);
