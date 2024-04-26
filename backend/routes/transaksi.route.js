const express = require(`express`)
const app = express()
app.use(express.json())
const transaksiController = require(`../controllers/transaksi.controller`)
const auth = require('../auth/auth')
const {checkRole} = require('../middleware/checkRole')

app.get("/getAllTran", auth.authVerify, checkRole(["admin"]), transaksiController.getAllTransaksi)
app.get("/findTransaksi", auth.authVerify, checkRole(["admin"]), transaksiController.findTransaksi)
app.post("/add", transaksiController.addTransaksi)
app.post("/addDetailTransaksi", transaksiController.addDetailTransaksi)
app.put("/update/:id",auth.authVerify, checkRole(["admin"]), transaksiController.updateTransaksi)
app.delete("/delete/:id",auth.authVerify, checkRole(["admin"]), transaksiController.deleteTransaksi)

module.exports = app
