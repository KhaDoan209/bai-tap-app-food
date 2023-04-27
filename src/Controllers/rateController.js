const sequelize = require('../Models/configModel');
const initModels = require('../Models/init-models');
const { successCode, failCode, errorCode } = require('../utils/response');

const models = initModels(sequelize);

const getListRateByUser = async (req, res) => {
   try {
      let { user_id } = req.params;
      let data = await models.rate_res.findAll({
         where: {
            user_id: user_id,
         },
         include: ['user', 're'],
      });
      successCode(res, 'Lấy data thành công', data);
   } catch (error) {
      errorCode(res, 'Lỗi Backend');
   }
};
const getListRateByRestaurant = async (req, res) => {
   try {
      let { res_id } = req.params;
      let data = await models.rate_res.findAll({
         where: {
            res_id: res_id,
         },
         include: ['user', 're'],
      });
      successCode(res, 'Lấy data thành công', data);
   } catch (error) {
      errorCode(res, 'Lỗi Backend');
   }
};

const createNewRate = async (req, res) => {
   try {
      let { user_id, res_id, comment } = req.body;
      let date = new Date();
      let newRate = {
         user_id,
         res_id,
         date_rate: date,
         comment,
      };
      await models.rate_res.create(newRate);
      successCode(res, 'Rate thành công');
   } catch (error) {
      errorCode(res, 'Lỗi Backend');
   }
};
module.exports = {
   getListRateByUser,
   getListRateByRestaurant,
   createNewRate,
};
