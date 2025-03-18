const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const logMiddleware = require('./middlewares/logMiddleware');
const app = express();
const apiRoutes = require('./routes/apiRoutes');

app.use(express.json());
app.use(logMiddleware);  // Menambahkan middleware log
app.use('/api', apiRoutes);
app.listen(5000, () => console.log('API Gateway berjalan di port 5000'));
