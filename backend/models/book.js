'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class book extends Model {
    
    static associate(models) {

    }
  }
  book.init({
    BookID: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    judul: DataTypes.STRING,
    penulis: DataTypes.STRING,
    sinopsis: DataTypes.STRING,
    foto: DataTypes.STRING,
    harga: DataTypes.INTEGER,
    kategori: DataTypes.STRING
    
  }, {
    sequelize,
    modelName: 'book',
  });
  return book;
};