const { Sequelize } = require('sequelize');
const config = require('../config/config');

const sequelize = new Sequelize(
   config.db_database,
   config.db_user,
   config.db_pass,
   {
      host: config.db_host,
      port: config.db_port,
      dialect: config.db_dialect,
   }
);

module.exports = sequelize;

//yarn sequelize-auto -h localhost -d db_food -u root -x 1234 -p 3307 --dialect mysql -o src/Models -l es6