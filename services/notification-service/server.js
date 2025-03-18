const express = require('express');
const notificationRoutes = require('./routes/notificationRoutes');
const logMiddlewareNotification = require('./middlewares/logMiddleware');
const notificationApp = express();

notificationApp.use(express.json());
notificationApp.use(logMiddlewareNotification);  // Menambahkan middleware log
notificationApp.use('/notifications', notificationRoutes);
notificationApp.listen(5003, () => console.log('Notification Service berjalan di port 5003'));
