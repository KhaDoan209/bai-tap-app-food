const express = require('express');
const {
   getListRateByUser,
   getListRateByRestaurant,
   createNewRate,
} = require('../Controllers/rateController');
const rateRouter = express.Router();

rateRouter.get('/get-list-rate-by-user/:user_id', getListRateByUser);
rateRouter.get('/get-list-rate-by-restaurant/:res_id', getListRateByRestaurant);
rateRouter.post('/create-new-rate', createNewRate);
module.exports = rateRouter;
