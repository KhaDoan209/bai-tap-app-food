const sequelize = require('../Models/configModel');
const initModels = require('../Models/init-models');
const { successCode, failCode, errorCode } = require('../utils/response');

const models = initModels(sequelize);

const createNewOrder = async (req, res) => {
   try {
      let { user_id, food_id, amount, arr_sub_id } = req.body;
      let newOrder = {
         user_id,
         food_id,
         amount,
         code: null,
         arr_sub_id,
      };
      await models.order.create(newOrder);
      successCode(res, 'Order thành công', newOrder);
   } catch (error) {
      errorCode(res, 'Lỗi Backend');
   }
};

module.exports = {
   createNewOrder,
};
