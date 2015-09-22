var mysql = require('mysql');
module.exports = mysql.createConnection({
	//host	 : 'localhost',
	socketPath	: '/run/mysqld/mysqld.sock',
	user	 : 'root',
	password : '',
	database : 'cmsc100ef2l'
});
