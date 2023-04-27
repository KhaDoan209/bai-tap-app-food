const express = require('express');
const { createNewOrder } = require('../Controllers/orderController');
const orderRouter = express.Router();
orderRouter.post('/create-new-order', createNewOrder);
module.exports = orderRouter;
