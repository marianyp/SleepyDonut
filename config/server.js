module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '72d3dc583ccd48f1e1b2b2147c9ab4a8'),
    },
  },
});
