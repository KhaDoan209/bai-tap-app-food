const express = require('express');
const {
   getListLikeByUser,
   postNewReaction,
   getListLikeByRestaurant,
} = require('../Controllers/likeController');
const likeRouter = express.Router();

likeRouter.get('/get-list-like-by-user/:user_id', getListLikeByUser);
likeRouter.get('/get-list-like-by-restaurant/:res_id', getListLikeByRestaurant);
likeRouter.post('/post-new-reaction', postNewReaction);
module.exports = likeRouter;
