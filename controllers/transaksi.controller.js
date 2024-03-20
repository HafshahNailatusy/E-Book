const { request, response } = require("express")

const userModel = require("../models/index").user
const bookModel = require("../models/index").book
const transaksiModel = require("../models/index").transaksi
const detailmodel = require("../models/index").detailtransaksi
const Op = require("sequelize").Op

exports.getAllTransaksi = async (request, response) => {
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

exports.findTransaksi = async (request, response) => {
    let keyword = request.body.keyword
    let transaksis = await transaksiModel.findAll({
        where: {
            [Op.or]: [
                { TransaksiID: { [Op.substring]: keyword } },
                { UserID: { [Op.substring]: keyword } },
                { TglTransaksi: { [Op.substring]: keyword } },
                { Total: { [Op.substring]: keyword } },
                { MetodePay: { [Op.substring]: keyword } },
                { Status: { [Op.substring]: keyword } },
            ]
        }
    })
    return response.json({
        success: true,
        data: transaksis,
        message: "All Transaksi have been loaded"
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
        let result = await transaksiModel.create(transaksiData); //masukin ke tabel transaksi
        let id_pemesanan = result.TransaksiID; //ngambil id transaksi
        let detailsoforder = request.body.detailsoforder; //ngisi detail of order
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
    let TransaksiID = request.params.id

    let getId = await transaksiModel.findAll({ //dicari usernya
        where: {
            [Op.and]: [{ TransaksiID: TransaksiID }],
        },
    });

    if (getId.length === 0) { //klo ga nemu
        return response.status(400).json({
            success: false,
            message: "transaksi dengan id tersebut tidak ada",
        });
    }
    let dataTransaksi = {
        TransaksiID: request.body.TransaksiID,
        UserID: request.body.UserID,
        TglTransaksi: request.body.TglTransaksi,
        Total: request.body.Total,
        MetodePay: request.body.MetodePay,
    }

    if ( //kalo ada yang kosong
        dataTransaksi.UserID === "" ||
        dataTransaksi.MetodePay === "" ||
        dataTransaksi.Total === ""
    ) {
        return response.status(400).json({
            success: false,
            message:
                "Harus diisi semua.Kalau tidak ingin merubah, isi dengan value sebelumnya",
        });
    }

    transaksiModel.update(dataTransaksi, { where: { TransaksiID: TransaksiID } })
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
    let TransaksiID = request.params.id
    let getId = await transaksiModel.findAll({
        where: { //dicari 
            [Op.and]: [{ TransaksiID: TransaksiID }],
        },
    });

    // if (getId.length === 0) { //kalo ga ada yang sesuai
    //     return response.status(400).json({
    //         success: false,
    //         message: "transaksi dengan id tersebut tidak ada",
    //     });
    // }
    transaksiModel.destroy({ where: { TransaksiID: TransaksiID } })
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