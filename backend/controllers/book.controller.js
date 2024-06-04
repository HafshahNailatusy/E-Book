const { request, response } = require("express")

const upload = require('./upload-image').single('foto')
const bookModel = require(`../models/index`).book
const Op = require(`sequelize`).Op
const path = require('path')
const fs = require(`fs`)

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
                { kategori: { [Op.like]: "%" + keyword + "%" } } ||
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
        where: { kategori: req.body.kategori }
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
            message: "masukkan id buku di url",
        });
    } else { 
        let user = await bookModel.findOne({
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
            judul: request.body.judul,
            penulis: request.body.penulis,
            sinopsis: request.body.sinopsis,
            foto: request.file.filename,
            harga: request.body.harga,
            kategori: request.body.kategori
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
        if (error) {
            return response.json({ message: error })
        }

        let BookID = request.params.BookID

        let dataBook = {
            BookID: request.body.BookID,
            judul: request.body.judul,
            penulis: request.body.penulis,
            sinopsis: request.body.sinopsis,
            harga: request.body.harga,
            kategori: request.body.kategori
        }

        if (request.file) {
            const selectedBook = await bookModel.findOne({
                where: { BookID: BookID }
            })
            const oldImage = selectedBook.image
            const pathImage = path.join(__dirname, `../image`, oldImage)
            if (fs.existsSync(pathImage)) {
                fs.unlink(pathImage, error => console.log(error))
            }
            dataBook.image = request.file.filename

        }

        bookModel.update(dataBook, { where: { BookID: BookID } })
            .then(result => {
                return response.json({
                    status: true,
                    message: `Data book has been updated`,
                    bookid: BookID,
                    result: dataBook,
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
            return response.json({
                status: false,
                message: error.message
            })
        })
}
