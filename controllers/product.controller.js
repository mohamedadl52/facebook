const productmodel = require("../models/products.model")

exports.getproduct = (req,res,next)=>{

    
const id = req.params.id

productmodel.getproductbyid(id).then((product)=>{
   res.render('product' , {
       product : product ,
       isUser : req.session.UserId  ,
       isAdmin :  req.session.isAdmin
   })
})


}




