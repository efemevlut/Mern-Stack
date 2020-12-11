const express = require("express");

const router = express.Router();

const AuthController = require("../controllers/AuthController");

/**
 * @route POST / api/auth/register
 * @desc Register endpoint 
 * @access Public
*/
router.post("/register", AuthController.authRegister);

/**
 * @route POST /api/auth/login
 * @desc Login endpoint
 * @acces Private
*/
router.post("/login", AuthController.authLogin)

module.exports = router;
