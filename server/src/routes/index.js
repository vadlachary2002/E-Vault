const express = require('express');
const userRoute = require('./user.route');
const accountRoute = require('./account.route');
const imageRoute =  require('./image.route');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/user',
    route: userRoute,
  },
  {
    path: '/accounts',
    route: accountRoute,
  },
];


defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});


module.exports = router;
