const { request, response } = require("express")


const transaksiModel = require(`../models/index`).transaksi
const detailtransaksiModel = require (`../models/index`).detailtransaksi
const Op = require(`sequelize`).Op

exports.getAllTransaksi = async(request, response) => {
    let transaksis = await transaksiModel.findAll({
        include:[
            `user`, `admin`, {
                model: detailtransaksiModel,
                as: `detailtransaksi`,
                include: ["book"]
            }
        ]
    }) 
    return response.json({
        success: true, 
        data: transaksis,
        message: `All Transaksi have been loaded`
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
                { AdminID: { [Op.substring]: keyword } }
            ]
        }
    })
    return response.json({
         success: true, 
         data: transaksis,
         message: `All Transaksi have been loaded`
    })
}

exports.addTransaksi = async (request, response) => {

    let newTransaksi = {
        TransaksiID: request.body.TransaksiID, 
        UserID: request.body.UserID,
        TglTransaksi: request.body.TglTransaksi,
        Total: request.body.Total,
        MetodePay: request.body.MetodePay,
        Status: request.body.Status,
        AdminID: request.body.AdminID
    }

    
    transaksiModel.create(newTransaksi)
    .then(result => {

        let detailtransaksi = request.body.detailtransaksi
        detailtransaksiModel.bulkCreate(detailtransaksi)
        .then(result => {
            return response.json({
                success: true,
                message: `New Transaksi has been added`
            })
        })
        .catch(error => {
            return response.json({
                success: false, 
                message: error.message
            })
        })
    })
    .catch(error => {
        return response.json({
            success: false, 
            message: error.message
        })
    })
}

exports.updateTransaksi = (request, response) => {
    let dataTransaksi = {
        TransaksiID: request.body.TransaksiID, 
        UserID: request.body.UserID,
        TglTransaksi: request.body.TglTransaksi,
        Total: request.body.Total,
        MetodePay: request.body.MetodePay,
        Status: request.body.Status,
        AdminID: request.body.AdminID
    }

    let TransaksiID = request.params.TransaksiID
 
    transaksiModel.update(dataTransaksi, { where: { TransaksiID: TransaksiID } })
        .then(async result => {
            await detailtransaksiModel.destroy(
                {where: {TransaksiID: TransaksiID}}
            )

            let detailtransaksi= request.body.detailtransaksi

            detailtransaksiModel.bulkCreate(detailtransaksi)
                .then(result => {
                    return response.json({
                        success: true,
                        message: `Data Transaksi has been updated`
                    })
                })
                .catch(error => {
                    return response.json({
                        success: false, 
                        message: error.message
                    })
                })
        })
        .catch(error => {
            return response.json({
                success: false, 
                message: error.message
            })
        })
}

exports.deleteTransaksi = (request, response) => {
    let TransaksiID = request.params.TransaksiID
     transaksiModel.destroy({ where: { TransaksiID: TransaksiID } })
        .then(result => {
            transaksiModel.destroy({where: {TransaksiID:TransaksiID}})
            .then(result => {
                return response.json({
                    success: true,
                    message: `Data Transaksi has been updated`
                })
            })
            .catch(error => {
                return response.json({
                    success: false,
                    message: error.message
                })
            })
        })
        .catch(error => {
            return response.json({
                success: false,
                message: error.message
            })
        })
    }