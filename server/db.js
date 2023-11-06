const mysql = require('mysql');

const db = mysql.createPool({
   host: 'localhost',
   user:'root',
   password: '',
   database: 'pap',
});

db.getConnection((err, connection) => {
   if (err) {
      console.error('Erro ao conectar ao banco de dados:', err.message);
   } else {
      console.log('Conexão bem-sucedida ao banco de dados!');
      connection.release();
   }
});

module.exports = db;