const mysql = require('mysql2');

// Koneksi ke MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',  // Sesuaikan dengan password Anda
  database: 'userdb'
});

// Koneksi yang berhasil
db.connect((err) => {
  if (err) {
    console.error('Koneksi gagal:', err.stack);
  } else {
    console.log('Terhubung ke MySQL');
  }
});

// Model untuk User
const createUser = (username, password, callback) => {
  const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
  db.query(query, [username, password], callback);
};

module.exports = { createUser };
