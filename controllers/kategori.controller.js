const { request, response } = require("express")
const app = require("../routes/transaksi.route")
const kategoriModel = require("../models/index").kategori
const Op = require("sequelize").Op
const Sequelize = require('sequelize')
const sequelize = new Sequelize("ebookta","root","",{
    host: "localhost",
    dialect: "mysql"
})

exports.getAllKategori = async(request, response) => {
    let kategoris = await kategoriModel.findAll() 
    if (kategoris.length === 0) {
        return response.status(400).json({
            success: false,
            message: "no category to show",
        });
    }
    return response.json({
        success: true, 
        data: kategoris,
        message: "All category have been loaded"
    })    
}
    
exports.findKategori = async (request, response) => {
    let namaKat = request.body.namaKat

    const data = await sequelize.query(
        `SELECT * from kategoris where namaKat = '${namaKat}' `
    )
    return response.json({
         success: true, 
         data: data,
         message: "Category have been loaded"
    })
}

exports.addKategori = (request, response) => {
    let newKategori = {
        namaKat: request.body.namaKat
    }

    console.log("apa:"+newKategori)

    kategoriModel.create(newKategori)
    .then(result => {
        return response.json({
            success: true, 
            data: result,
            message: "New Kategori has been inserted"
        })
    })
    .catch(error => { 
        return response.json({
            success: false, 
            message: error.message
        })
    })
}

exports.updateKategori = async (request, response) => {
    let katID = request.params.id; //user mana yang mau di update

    let getId = await kategoriModel.findAll({ //dicari usernya
        where: {
            [Op.and]: [{ katID: katID }],
        },
    });

    if (getId.length === 0) { //klo ga nemu
        return response.status(400).json({
            success: false,
            message: "kategori dengan id tersebut tidak ada",
        });
    }

    let katBaru = { //data terbaru yang udah di update
            namaKat: request.body.nama,
    };

    if ( //kalo ada yang kosong
        katBaru.namaKat === "" 
    ) {
        return response.status(400).json({
            success: false,
            message:
                "Harus diisi semua.Kalau tidak ingin merubah, isi dengan value sebelumnya",
        });
    }

    kategoriModel
        .update(katBaru, { where: { katID: katID } })
        .then((result) => {
            return response.json({
                success: true,
                message: "Data kategori has been updated"
            });
        })
        .catch((error) => {
            return response.status(400).json({
                success: false,
                message: error.message,
            });
        });
}

exports.deleteKategori = async (request, response) => {
    let katID = request.params.id; //cari user berdasarkan ID
    let getId = await kategoriModel.findAll({
        where: { //dicari 
            [Op.and]: [{ id: katID }],
        },
    });

    if (getId.length === 0) { //kalo ga ada yang sesuai
        return response.status(400).json({
            success: false,
            message: "kategori dengan id tersebut tidak ada",
        });
    }

    kategoriModel
        .destroy({ where: { katID: katID } })

        .then((result) => {
            return response.json({
                success: true,
                message: "data category has ben delete where id :" + katID,
            });
        })
        .catch((error) => {
            return response.status(400).json({
                success: false,
                message: error.message,
            });
        });
}