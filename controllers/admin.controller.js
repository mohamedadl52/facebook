const validationResault = require('express-validator').validationResult
const productmodel = require('../models/products.model')
exports.getinputproduct = (req,res, next)=>{
    res.render("addproduct" ,{
      isUser : req.session.UserId   ,
      isAdmin : true ,
      vaildatorErr : req.flash("vaildatorErr")
    })
  }


exports.addporduct = (req,res,next)=>{
 

       if(validationResault(req).isEmpty()) {
        productmodel.addproduct({
            name : req.body.name ,
            price : req.body.price ,
            catorgress : req.body.catorgress    ,
            discrption :  req.body.discrption ,
            image : req.file.filename 
     
        }).then(()=>{
            res.redirect("/")
        }).catch((err)=>{
             console.log(err)
             res.redirect("addprduct")
        })
     
 
  } else {
   req.flash("vaildatorErr" , validationResault(req).array() )
   res.redirect('/admin/add')
  }
    }