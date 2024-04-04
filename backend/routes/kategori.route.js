const express = require(`express`)
const app = express()
app.use(express.json())
const auth = require('../auth/auth')
const {checkRole} = require('../middleware/checkRole')
const kategoriController = require(`../controllers/kategori.controller`)

app.get("/", kategoriController.getAllKategori)
app.get("/find", kategoriController.findKategori)
app.post("/add", auth.authVerify, checkRole(["admin"]), kategoriController.addKategori)
app.put("/:id",  auth.authVerify, checkRole(["admin"]), kategoriController.updateKategori)
app.delete("/:id", auth.authVerify, checkRole(["admin"]), kategoriController.deleteKategori)

module.exports = app
