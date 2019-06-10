'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, DECIMAL, STRING, ENUM, TEXT} = Sequelize;
    await queryInterface.createTable('article', {
      id: { type: INTEGER(11), primaryKey: true, autoIncrement: true },
      categoryId: { type: INTEGER(11)},
      authorId: { type: INTEGER(11)},
      title: { type: STRING(255), allowNull: false },
      summary: { type: TEXT, allowNull: false },
      hits: {  type: INTEGER(11), allowNull: false },
      url: { type: STRING(255), allowNull: false },
      tag: { type: STRING(255), allowNull: false  },
      createTime: { type: DATE, allowNull: false}
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('article');
  }
};
