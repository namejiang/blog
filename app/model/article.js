'use strict';
const moment = require('moment');

module.exports = app => {
  const { INTEGER, DATE, DECIMAL, STRING, ENUM, TEXT } = app.Sequelize;
  const Article = app.model.define('article', {
    id: { type: INTEGER(11), primaryKey: true, autoIncrement: true },
    categoryId: { type: INTEGER(11)},
    authorId: { type: INTEGER(11)},
    title: { type: STRING(255), allowNull: false },
    summary: { type: TEXT, allowNull: false },
    hits: {  type: INTEGER(11), allowNull: false },
    url: { type: STRING(255), allowNull: false },
    tag: { type: STRING(255), allowNull: false  },
    createTime: { type: DATE, allowNull: false, get() { return moment(this.getDataValue('created_at')).format('YYYY-MM-DD HH:mm:ss'); } }
  }, {
    paranoid: true,
    timestamps: true,
  });

  return Article;
};
