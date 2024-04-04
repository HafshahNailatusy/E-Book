const express = require(`express`)
const app = express()
const userController = require(`../controllers/user.controller`)
const auth = require('../auth/auth')
const { checkRole } = require('../middleware/checkRole')

app.use(express.json())

app.get("/getAll", auth.authVerify, checkRole(["admin"]), userController.getAllUser)
app.get("/findOne/:id", auth.authVerify, checkRole(["admin"]), userController.findUser)
app.get("/search/:nama", auth.authVerify, checkRole(["admin"]), userController.searchUser)
app.post("/addByAdmin", auth.authVerify, checkRole(["admin"]), userController.addUser)
app.delete("/delete/:id", auth.authVerify, checkRole(["admin"]), userController.deleteUser)
app.get("/findAllCustomer", checkRole(["admin"]), userController.findAllCustomer)
app.get("/findAllAdmin", checkRole(["admin"]), userController.findAllAdmin)
app.post("/login", userController.Login)
app.put("/:id", userController.updateUser)
app.post("/RegisterCustomer", userController.RegisterCustomer)
app.put("/resetpassword/:id", userController.resetpasswordUser)


module.exports = app
