const express = require(`express`)
const app = express()
app.use(express.json())
const bookController = require(`../controllers/book.controller`)
const auth = require('../auth/auth')
const {checkRole} = require('../middleware/checkRole')


app.get("/getBookAdmin", auth.authVerify, checkRole(["admin"]), bookController.getAllBook)
app.get("/getBookCustom", bookController.getAllBook)
app.get("/findBookAdmin", auth.authVerify, checkRole(["admin"]), bookController.findBook)
app.get("/findBookCustom", bookController.findBook)
app.get("/findOneAd", auth.authVerify, checkRole(["admin"]), bookController.findBook)
app.get("/findOneCus", bookController.findBook)
app.post("/add",auth.authVerify, checkRole(["admin"]), bookController.addBook)
app.put("/update/:id", auth.authVerify, checkRole(["admin"]), bookController.updateBook)
app.delete("/delete/:id", auth.authVerify, checkRole(["admin"]), bookController.deleteBook)

// app.get("/getAll", auth.authVerify, checkRole(["admin"]), userController.getAllUser)
// app.get("/findOne/:id", auth.authVerify, checkRole(["admin"]),userController.findUser)
// app.post("/addByAdmin", checkRole(["admin"]), userController.addUser)
// app.delete("/delete/:id", auth.authVerify, checkRole(["admin"]), userController.deleteUser)
// app.post("/login", userController.Login)
// app.put("/:id", userController.updateUser)
// app.get("/findAllCustomer", checkRole(["admin"]), userController.findAllCustomer)
// app.get("/findAllAdmin", checkRole(["admin"]), userController.findAllAdmin)
// app.post("/RegisterCustomer", userController.RegisterCustomer)

module.exports = app
