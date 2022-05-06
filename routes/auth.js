const express = require("express");
const router = express.Router();
const { validatorRegister, validatorLogin } = require("../validators/auth");
const { loginCtrl } = require("../controllers/auth");

/**
 * Crear registro
 */
router.post("/register", validatorRegister, loginCtrl);

module.exports = router;
