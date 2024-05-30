const express = require(`express`)
const app = express()
app.use(express.json())
const transaksiController = require(`../controllers/transaksi.controller`)
const auth = require('../auth/auth')
const {checkRole} = require('../middleware/checkRole')

app.get("/getAllTran", transaksiController.getAllTransaksi)
app.get("/findTransaksi/:id",  transaksiController.findTransaksi)
app.get("/findTransaksiUser/:keyword", transaksiController.findTransaksi2)
app.post("/add", transaksiController.addTransaksi)
app.put("/update/:id",auth.authVerify, checkRole(["admin"]), transaksiController.updateTransaksi)
app.delete("/delete/:id",auth.authVerify, checkRole(["admin"]), transaksiController.deleteTransaksi)

module.exports = app
