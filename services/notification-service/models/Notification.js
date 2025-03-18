const redis = require('redis');

// Koneksi ke Redis
const client = redis.createClient({ host: 'localhost', port: 6379 });

// Fungsi untuk menyimpan notifikasi di Redis
const saveNotification = (userId, message, callback) => {
  const notificationId = `notification:${userId}`;
  client.set(notificationId, message, 'EX', 3600, callback); // Notifikasi disimpan selama 1 jam
};

module.exports = { saveNotification };
