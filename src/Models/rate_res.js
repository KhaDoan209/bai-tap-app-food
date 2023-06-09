const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
   return rate_res.init(sequelize, DataTypes);
};

class rate_res extends Sequelize.Model {
   static init(sequelize, DataTypes) {
      return super.init(
         {
            user_id: {
               type: DataTypes.INTEGER,
               allowNull: false,
               primaryKey: true,
               references: {
                  model: 'user',
                  key: 'user_id',
               },
            },
            res_id: {
               type: DataTypes.INTEGER,
               allowNull: false,
               primaryKey: true,
               references: {
                  model: 'restaurant',
                  key: 'res_id',
               },
            },
            comment: {
               type: DataTypes.TEXT,
               allowNull: true,
            },
            date_rate: {
               type: DataTypes.DATE,
               allowNull: true,
            },
         },
         {
            sequelize,
            tableName: 'rate_res',
            timestamps: false,
            indexes: [
               {
                  name: 'PRIMARY',
                  unique: true,
                  using: 'BTREE',
                  fields: [{ name: 'user_id' }, { name: 'res_id' }],
               },
               {
                  name: 'res_id',
                  using: 'BTREE',
                  fields: [{ name: 'res_id' }],
               },
            ],
         }
      );
   }
}
