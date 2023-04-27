const express = require('express');
const rootRouter = express.Router();
const likeRouter = require('./likeRouter');
const orderRouter = require('./orderRoute');
const rateRouter = require('./rateRouter');

rootRouter.use('/like', likeRouter);
rootRouter.use('/rate', rateRouter);
rootRouter.use('/order', orderRouter);
module.exports = rootRouter;
