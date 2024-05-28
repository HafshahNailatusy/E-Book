'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transaksi extends Model {
    /** 
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.user)
      this.belongsTo(models.book)
   
    }
  }
  transaksi.init({
    TransaksiID: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    BookID: DataTypes.INTEGER,
    UserID: DataTypes.INTEGER,
    TglTransaksi: DataTypes.INTEGER,
    MetodePay: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'transaksi',
  });
  return transaksi;
};