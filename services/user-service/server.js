const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const logMiddlewareUser = require('./middlewares/logMiddleware');
const userApp = express();

userApp.use(express.json());
userApp.use(logMiddlewareUser);  // Menambahkan middleware log
mongoose.connect('mongodb://localhost/userdb', { useNewUrlParser: true, useUnifiedTopology: true });
userApp.use('/users', userRoutes);
userApp.listen(5001, () => console.log('User Service berjalan di port 5001'));
