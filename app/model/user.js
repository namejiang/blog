'use strict';
const moment = require('moment');

module.exports = app => {
  const { INTEGER, DATE, DECIMAL, STRING, ENUM } = app.Sequelize;
  const User = app.model.define('user', {
    id: { type: INTEGER(11), primaryKey: true, autoIncrement: true },
    username: { type: STRING(255), allowNull: false },
    password: { type: STRING(255), allowNull: false },
    age: { type: ENUM('未知', '男', '女'), defaultValue: '未知', allowNull: false },
    created_at: { type: DATE, allowNull: false, get() { return moment(this.getDataValue('created_at')).format('YYYY-MM-DD HH:mm:ss'); } },
    updated_at: { type: DATE, allowNull: false, get() { return moment(this.getDataValue('updated_at')).format('YYYY-MM-DD HH:mm:ss'); } },
  }, {
    paranoid: true,
    timestamps: true,
  });

  return User;
};
