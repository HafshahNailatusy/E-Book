const { request, response } = require("express")

const userModel = require("../models/index").user
const bookModel = require("../models/index").book
const transaksiModel = require("../models/index").transaksi
const detailmodel = require("../models/index").detailtransaksi
const Op = require("sequelize").Op
const Sequelize = require('sequelize')
const sequelize = new Sequelize("ebookta","root","",{
    host: "localhost",
    dialect: "mysql"
})

exports.getAllTransaksi = async (request, response) => { //unknown column
    let transaksis = await transaksiModel.findAll()
    if (transaksis.length === 0) {
        return response.status(400).json({
            success: false,
            message: "no transaction to show",
        });
    }
    return response.json({
        success: true,
        data: transaksis,
        message: "All Transaksi have been loaded"
    })
}

exports.findTransaksi = async (request, response) => { //unknown column
    let keyword = request.body.keyword
    let transaksis = await transaksiModel.findAll({
        where: {
            [Op.or]: [
                { TransaksiID: { [Op.substring]: keyword } },
                { UserID: { [Op.substring]: keyword } },
                { TglTransaksi: { [Op.substring]: keyword } },
                { MetodePay: { [Op.substring]: keyword } },
                { Status: { [Op.substring]: keyword } },
            ]
        }
    })

    console.log("asdas: "+transaksis.TransaksiID)
    return response.json({
        success: true,
        data: transaksis,
        message: "Data Transaksi have been loaded"
    })
}
exports.addTransaksi = async (request, response) => {
    const today = new Date();
    const TglTransaksi = `${today.getFullYear()}-${today.getMonth()}-
        ${today.getDate()}${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`
    const transaksiData = {
        UserID: request.body.UserID,
        MetodePay: request.body.MetodePay,
        TglTransaksi: TglTransaksi,
    };

    try {
        let result = await transaksiModel.create(transaksiData);
        let id_pemesanan = result.TransaksiID;
        let detailsoforder = request.body.detailsoforder;
        for (let i = 0; i < detailsoforder.length; i++) {
            detailsoforder[i].TransaksiID = id_pemesanan;
        }
        await detailmodel.bulkCreate(detailsoforder);
        response.status(201).json({
            success: true,
        });
    } catch (error) {
        return response.json({
            success: false,
            message: error.message,
        });
    }
};

exports.updateTransaksi = async (request, response) => {
    let id = request.params.id

    console.log("first: "+id)

    const getId = await sequelize.query(
        `SELECT TransaksiID from transaksis where TransaksiID = ${id} `
    )

    if (getId[0].length === 0) { //klo ga nemu
        return response.status(400).json({
            success: false,
            message: "transaksi dengan id tersebut tidak ada",
        });
    }

    let dataTransaksi = {
        UserID: request.body.UserID,
        MetodePay: request.body.MetodePay,
        detailsoforder: request.body.detailsoforder
    }

    if ( //kalo ada yang kosong
        dataTransaksi.UserID === "" ||
        dataTransaksi.MetodePay === "" 
    ) {
        return response.status(400).json({
            success: false,
            message:
                "Harus diisi semua.Kalau tidak ingin merubah, isi dengan value sebelumnya",
        });
    }

    transaksiModel.update(dataTransaksi, { where: { TransaksiID: id } })
        .then(result => {
            return response.json({
                success: true,
                message: "Data Transaksi has been updated"
            })
        })
        .catch(error => {
            return response.json({
                success: false,
                message: error.message
            })
        })
}

exports.deleteTransaksi = async (request, response) => { 
    let id = request.params.id 
    
    const getId = await sequelize.query(
        `SELECT TransaksiID from transaksis where TransaksiID = ${id} `
    )

    if (getId[0].length === 0) { //kalo ga ada yang sesuai
        return response.status(400).json({
            success: false,
            message: "transaksi dengan id tersebut tidak ada",
        });
    }
    transaksiModel.destroy({ where: { TransaksiID: id } })
        .then(result => {
            return response.json({
                success: true,
                message: "Data Transaksi has been deleted"
            })
        })
        .catch(error => {
            return response.json({
                success: false,
                message: error.message
            })
        })
}