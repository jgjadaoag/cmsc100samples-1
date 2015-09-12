var mysql = require('mysql');
module.exports = mysql.createConnection({
	//host	 : 'localhost',
	socketPath	: '/run/mysqld/mysqld.sock',
	user	 : 'root',
	password : 'moemoekyun',
	database : 'cmsc100ef2l'
});
