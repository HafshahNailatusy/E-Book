const express = require(`express`)
const app = express()
app.use(express.json())
const bookController = require(`../controllers/book.controller`)
const auth = require('../auth/auth')
const {checkRole} = require('../middleware/checkRole')


app.get("/getBookAdmin", auth.authVerify, checkRole(["admin"]), bookController.getAllBook)
app.post("/add",auth.authVerify, checkRole(["admin"]), bookController.addBook)
app.put("/update/:id", auth.authVerify, checkRole(["admin"]), bookController.updateBook)
app.delete("/delete/:id", auth.authVerify, checkRole(["admin"]), bookController.deleteBook)
app.get("/findBookAdmin", auth.authVerify, checkRole(["admin"]), bookController.findBook)
app.get("/findByID/:id", auth.authVerify, checkRole(["admin"]), bookController.findBookID)
app.get("/findByKategoriAdmin/:id", auth.authVerify, checkRole(["admin"]), bookController.findByKategori)
app.get("/getBookCustom", bookController.getAllBook)
app.get("/findBookCustom", bookController.findBook)
app.get("/findOneCus", bookController.findBook)
app.get("/findByKategori/:id", bookController.findByKategori)

module.exports = app
