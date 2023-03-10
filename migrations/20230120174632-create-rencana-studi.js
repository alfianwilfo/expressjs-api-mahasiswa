"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("RencanaStudis", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      IdMahasiswa: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Mahasiswas",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      IdMatkul: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Matkuls",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("RencanaStudis");
  },
};
