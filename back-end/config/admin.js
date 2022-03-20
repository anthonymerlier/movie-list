module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '656fe598d928dbee4ddbbbcc022c9e8d'),
  },
});
