const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://app.aaccent.su',
      changeOrigin: true,
      secure: false,
      cookieDomainRewrite: '',
      onProxyRes: function(proxyRes, req, res) {
        const cookies = proxyRes.headers['set-cookie'];
        if (cookies) {
          const newCookies = cookies.map(cookie => cookie.replace(/; secure/gi, ''));
          proxyRes.headers['set-cookie'] = newCookies;
        }
      }
    })
  );
};