const router = require("express").Router()

const product = require("../controllers/product.controller")
const multer = require("multer")

router.get("/:id" , product.getproduct )




module.exports = router