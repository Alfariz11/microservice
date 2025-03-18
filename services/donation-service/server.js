const express = require('express');
const mongoose = require('mongoose');
const donationRoutes = require('./routes/donationRoutes');
const logMiddlewareDonation = require('./middlewares/logMiddleware');
const donationApp = express();

donationApp.use(express.json());
donationApp.use(logMiddlewareDonation);  // Menambahkan middleware log
mongoose.connect('mongodb://localhost/donationdb', { useNewUrlParser: true, useUnifiedTopology: true });
donationApp.use('/donations', donationRoutes);
donationApp.listen(5002, () => console.log('Donation Service berjalan di port 5002'));
