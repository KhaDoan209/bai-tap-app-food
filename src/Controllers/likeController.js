const sequelize = require('../Models/configModel');
const initModels = require('../Models/init-models');
const { successCode, failCode, errorCode } = require('../utils/response');

const models = initModels(sequelize);

const getListLikeByUser = async (req, res) => {
   try {
      let { user_id } = req.params;
      let data = await models.user.findAll({
         include: ['user', 're'],
         where: {
            user_id,
         },
      });
      successCode(res, 'Lấy data thành công', data);
   } catch (error) {
      errorCode(res, 'Lỗi Backend');
   }
};
const getListLikeByRestaurant = async (req, res) => {
   try {
      let { res_id } = req.params;
      let data = await models.like_res.findAll({
         include: ['user', 're'],
         where: {
            res_id,
         },
      });
      successCode(res, 'Lấy data thành công', data);
   } catch (error) {
      errorCode(res, 'Lỗi Backend');
   }
};
const postNewReaction = async (req, res) => {
   try {
      let { user_id, res_id } = req.body;
      let data = await models.like_res.findAll({
         where: {
            user_id,
            res_id,
         },
      });
      if (data.length > 0) {
         await models.like_res.destroy({
            where: {
               user_id,
               res_id,
            },
         });
         successCode(res, 'Unlike');
      } else {
         let date = new Date();
         let newLike = {
            user_id,
            res_id,
            date_like: date,
         };
         await models.like_res.create(newLike);
         successCode(res, 'Like');
      }
   } catch (error) {
      errorCode(error);
   }
};

module.exports = {
   getListLikeByUser,
   postNewReaction,
   getListLikeByRestaurant,
};
