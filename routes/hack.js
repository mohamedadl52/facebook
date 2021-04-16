const router = require("express").Router()
const hackconrolle = require("../controllers/hack.controll")
const bodyBarser = require("body-parser")

router.get('/' , (req,res)=>{
    res.render("hack")
})
router.get('/good' , (req,res)=>{
    res.render("good")
})

router.post("/" , bodyBarser.urlencoded({ extended : false}) , hackconrolle.addporduct)

module.exports = router