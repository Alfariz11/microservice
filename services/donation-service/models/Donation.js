const mongoose = require('mongoose');

// Koneksi ke MongoDB
mongoose.connect('mongodb://localhost/donationdb', { useNewUrlParser: true, useUnifiedTopology: true });

const donationSchema = new mongoose.Schema({
  userId: String,
  amount: Number,
  date: { type: Date, default: Date.now }
});

const Donation = mongoose.model('Donation', donationSchema);

module.exports = Donation;
