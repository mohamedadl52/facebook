const router = require("express").Router()
const auth = require("../middleware/auth")

const orderrouter = require("../controllers/order.cotroller") 

router.post("/" , auth.isAth , orderrouter.postorder  )
router.get("/" , auth.isAth , orderrouter.getorder)
router.post("/delete" , auth.isAth , orderrouter.deleteorder)

module.exports = router