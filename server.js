/*const http = require('http');
const app = require('./app');
var mysql      = require('mysql');

app.set('port', process.env.PORT || 3000);
const server = http.createServer(app);


function handleSql(mode,callback){
	var con = mySql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'formulaire'
	 });
	con.connect(function(err){
	 if(err) throw err;
	});
	var sql = 'SELECT * FROM formulaire';
	con.query(sql,function(err,result,fields){
	  if(err) throw err;
	  if(callback) callback(err,result,fields);
	}); 
	con.end();
};

server.listen(process.env.PORT || 3000);*/
