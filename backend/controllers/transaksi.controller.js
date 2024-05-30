const { request, response } = require("express")
const transaksiModel = require("../models/index").transaksi
const bookModel = require("../models/index").book
const Sequelize = require('sequelize')
const sequelize = new Sequelize("ebookta", "root", "", {
    host: "localhost",
    dialect: "mysql"
})

exports.getAllTransaksi = async (request, response) => { //unknown column
    const sql = await transaksiModel.findAll({
        include: [{
            model: bookModel,
            as: "book"
        }
        ]
    }
    )

    if (sql[0].length === 0) {
        return response.json({
            status: false,
            message: "no transaction to show",
        });
    }
    return response.json({
        status: true,
        data: sql,
        message: "All Transaksi have been loaded"
    })
}

exports.findTransaksi = async (request, response) => { //unknown column
    let id = request.params.id

    const data = await sequelize.query(
        `SELECT from transaksis where TransaksiID = '${id}'`
    )
    if (data[0].length === 0) {
        return response.status(400).json({
            status: false,
            message: "no transaction to show",
        });
    }

    return response.json({
        status: true,
        data: data,
        message: "Data Transaksi have been loaded"
    })
}

exports.findTransaksi2 = async (request, response) => { //unknown column
    let userID = request.body.keyword

    const data = await sequelize.query(
        `SELECT * from transaksis where UserID = ${userID}`
    )
    if (data[0].length === 0) {
        return response.status(400).json({
            status: false,
            message: "no transaction to show",
        });
    }

    return response.json({
        status: true,
        data: data,
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
        BookID: request.body.BookID
    };

    transaksiModel
        .create(transaksiData)
        .then((result) => {
            return response.json({
                status: true,
                data: result,
                message: `New transaksi has been inserted`,
            });
        })
        .catch((error) => {
            return response.status(400).json({
                status: false,
                message: error.message,
            });
        });
}
    ;


exports.updateTransaksi = async (request, response) => {
    let id = request.params.id

    console.log("first: " + id)

    const getId = await sequelize.query(
        `SELECT TransaksiID from transaksis where TransaksiID = ${id} `
    )

    if (getId[0].length === 0) { //klo ga nemu
        return response.status(400).json({
            status: false,
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
                status: true,
                message: "Data Transaksi has been updated"
            })
        })
        .catch(error => {
            return response.json({
                status: false,
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
            status: false,
            message: "transaksi dengan id tersebut tidak ada",
        });
    }
    transaksiModel.destroy({ where: { TransaksiID: id } })
        .then(result => {
            return response.json({
                status: true,
                message: "Data Transaksi has been deleted"
            })
        })
        .catch(error => {
            return response.json({
                status: false,
                message: error.message
            })
        })
}

exports