const { request, response } = require("express")

const upload = require('./upload-image').single('filename')
const bookModel = require(`../models/index`).book
const Op = require(`sequelize`).Op
const path = require('path')
const fs = require(`fs`)
const kategoriModel = require(`../models/kategori`).kategori

exports.getAllBook = async (request, response) => {
    let books = await bookModel.findAll()
    return response.json({
        status: true,
        data: books,
        message: `All Book have been loaded`
    })
}

exports.findBook = async (request, response) => {
    let keyword = request.body.keyword
    let books = await bookModel.findAll({
        where: {
            [Op.or]: [
                { judul: { [Op.like]: "%" + keyword + "%" } } ||
                { penulis: { [Op.like]: "%" + keyword + "%" } } 
            ]
        }
    })
    return response.json({
        status: true,
        data: books,
        message: `All Book have been loaded`
    })
}

exports.findByKategori = async (req, res) => {
    await bookModel.findAll({
        where: { KategoriID: req.params.id },
        include: [{ kategoriModel, as: 'kategori' }]
    })
        .then(result => {
            return res.json({
                status: true,
                data: result,
            })
        })
        .catch(error => {
            return res.json({
                status: false,
                message: error.message
            })
        })
}

exports.findBookID = async (request, response) => {
    let BookID = request.params.id;
    if (!BookID) { 
        return response.status(400).json({
            status: false,
            message: "masukkan id user di url",
        });
    } else { 
        let user = await userModel.findOne({
            where: {
                [Op.and]: [{ BookID: BookID }],
            },
        });

        if (!user) { 
            return response.status(400).json({
                status: false,
                message: "no book to show",
            });
        } else { 
            return response.json({
                status: true,
                data: user,
                message: `book have been loaded`,
            });
        }
    }
}

exports.addBook = (request, response) => {
    upload(request, response, async error => {
        if (error) {
            return response.json({ message: error })
        }
        if (!request.file) {
            return response.json({ message: `Nothing to Upload` })
        }

        let newBook = {
            judul: request.body.Judul,
            penulis: request.body.Penulis,
            sinopsis: request.body.Sinopsis,
            foto: request.file.filename,
            harga: request.body.harga,
            KategoriID: request.body.KategoriID
        }

        console.log(newBook)

        bookModel.create(newBook)
            .then(result => {
                return response.json({
                    status: true,
                    data: result,
                    message: `New Book has been inserted`
                })
            })
            .catch(error => {
                return response.json({
                    status: false,
                    message: error.message
                })
            })
    })
}

exports.updateBook = (request, response) => {
    upload(request, response, async error => {
        /** check if there are error when upload */
        if (error) {
            return response.json({ message: error })
        }

        let BookID = request.params.BookID

        let dataBook = {
            BookID: request.body.BookID,
            Judul: request.body.judul,
            Penulis: request.body.penulis,
            Sinopsis: request.body.sinopsis,
            Harga: request.body.harga,
            KategoriID: request.body.KategoriID
        }

        if (request.file) {
            /** get selected event's data */
            const selectedBook = await bookModel.findOne({
                where: { BookID: BookID }
            })
            const oldImage = selectedBook.image

            /** prepare path of old image to delete file */
            const pathImage = path.join(__dirname, `../image`, oldImage)

            if (fs.existsSync(pathImage)) {
                /** delete old image file */
                fs.unlink(pathImage, error => console.log(error))
            }

            /** add new image filename to event object */
            dataBook.image = request.file.filename

        }




        bookModel.update(dataBook, { where: { id: BookID } })
            .then(result => {
                return response.json({
                    status: true,
                    message: `Data book has been updated`
                })
            })
            .catch(error => {
                return response.json({
                    status: false,
                    message: error.message
                })
            })
    })
}

exports.deleteBook = async (request, response) => {
    const BookID = request.params.BookID
    const book = await bookModel.findOne({ where: { BookID: BookID } })
    const oldImage = book.foto
    const pathImage = path.join(__dirname, `../image`, oldImage)

    if (fs.existsSync(pathImage)) {
        fs.unlink(pathImage, error => console.log(error))
    }

    bookModel.destroy({ where: { BookID: BookID } })
        .then(result => {
            return response.json({
                status: true,
                message: `Data Book has been deleted`
            })
        })
        .catch(error => {
            /** if update's process fail */
            return response.json({
                status: false,
                message: error.message
            })
        })
}