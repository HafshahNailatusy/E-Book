const express = require(`express`)
const app = express()
app.use(express.json())
const bookController = require(`../controllers/book.controller`)
const auth = require('../auth/auth')
const {checkRole} = require('../middleware/checkRole')


app.post("/add",auth.authVerify, checkRole(["admin"]), bookController.addBook)
app.put("/update/:id", auth.authVerify, checkRole(["admin"]), bookController.updateBook)
app.delete("/delete/:BookID", auth.authVerify, checkRole(["admin"]), bookController.deleteBook)
app.get("/findBookAdmin", auth.authVerify, checkRole(["admin"]), bookController.findBook)
app.get("/findByID/:id",  bookController.findBookID)
app.get("/getAllBook", bookController.getAllBook)
app.get("/getBookCustom", bookController.getAllBook)
app.get("/findBookCustom/:keyword", bookController.findBook)
app.get("/findOneCus", bookController.findBook)
app.get("/findByKategori/:kategori", bookController.findByKategori)

module.exports = app
