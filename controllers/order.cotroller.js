const ordermodel = require("../models/order.model")
const validationResault = require('express-validator').validationResult
exports.postorder = (req, res , next)=>{
    if(validationResault(req).isEmpty()) {
     
        ordermodel.additem({
        name : req.body.name ,
        price : req.body.price ,
        address : req.body.address , 
        amount : req.body.amount,
        productId : req.body.productId ,
        timestamp :  Date.now()  

    }).then(()=>{

          require('../models/cart.model').deleteitem(req.body.amount).then(()=>{
              res.redirect('/order')
          })

    }).catch((err)=>{
        console.log(err)
    })
 }   else {
  req.flash("vaildatorErr" , validationResault(req).array() )
  res.redirect('/cart')
 }  
}
exports.getorder = (req, res , next)=>{  
    ordermodel.getitems().then((items)=>{

         res.render("order" , {
             items : items  ,
             isUser : req.session.UserId  ,
             isAdmin :  req.session.isAdmin
         })


    }  ).catch((err)=>{

           console.log(err)
   
        })

 }

 exports.deleteorder = (req,res, next)=>{
    ordermodel.deleteitem(req.body.orderID).then(()=>{
        res.redirect('/order')
    })

 
 }