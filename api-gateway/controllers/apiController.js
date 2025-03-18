const { createProxyMiddleware } = require('http-proxy-middleware');

exports.forwardRequest = (target) => createProxyMiddleware({ target, changeOrigin: true });
