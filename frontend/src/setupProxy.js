const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    ['/dog', '/estimate'],
    createProxyMiddleware({
      target: 'http://i6d111.p.ssafy.io:8081',
      changeOrigin: true,
    })
  );
};