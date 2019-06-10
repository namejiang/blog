'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, DECIMAL, STRING, ENUM } = Sequelize;
    await queryInterface.createTable('user', {
      id: { type: INTEGER(11), primaryKey: true, autoIncrement: true },
      username: { type: STRING(255), allowNull: false },
      password: { type: STRING(255), allowNull: false },
      age: { type: ENUM('未知', '男', '女'), defaultValue: '未知', allowNull: false },
      created_at: { type: DATE, allowNull: false},
      updated_at: { type: DATE, allowNull: false},
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('user');
  }
};
