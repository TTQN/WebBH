var express = require("express");
var router = express.Router();
const auth = require('../app/midleware/auth')
const authController = require("../app/controllers/auth");

router.get("/login", auth.isLogin, authController.getLogin);

router.post("/login", authController.postLogin);

router.get("/logout",auth.notLogin, authController.getLogout);

router.get("/register", auth.isLogin, authController.getSignUp);

router.post("/register", authController.postSignUp);

router.get("/change-password", auth.notLogin, authController.getChangePass)

router.post('/change-password', auth.notLogin, authController.postChangePass)

router.get("/update-info", auth.notLogin, authController.getUpdate)

router.post("/update-info", auth.notLogin, authController.postUpdate)

router.get("/reset-password", auth.isLogin, authController.getResetPass)

router.post("/reset-password", auth.isLogin, authController.postResetPass)


module.exports = router;