const cartmodel = require('../models/cart.model')
const validationResault = require('express-validator').validationResult
const flash = require('connect-flash')
const ordermodel = require('../models/order.model')



exports.getcart = (req, res, next )=>{
    cartmodel.getItemByUseId(req.session.UserId).then((items)=>{
        res.render("cart" , {
            items : items ,
            vaildatorErr : req.flash("vaildatorErr")[0] ,
            isUser : true  ,
            isAdmin :  req.session.isAdmin

        })
    }).catch((err)=>{
        console.log(err)
    })


}

exports.getorder = (req, res, next)=>{
   ordermodel.getitems().then(items=>{
       res.render("address" , {
           items : items ,
           isUser : req.session.UserId  ,
           isAdmin :  req.session.isAdmin
       })
   })
}

exports.postsave = (req,res,next)=>{
    if(validationResault(req).isEmpty()) {
     
       cartmodel.editItemByUseId(req.body.cartId , {
           amount : req.body.amount , 
           timestamp : Date.now()
       }).then(()=>{
           res.redirect('/cart')
       })

 } else {
  req.flash("vaildatorErr" , validationResault(req).array() )
  res.redirect('/cart')
 }
}
exports.deletepost = (req,res,next)=>{
    if(validationResault(req).isEmpty()) {
     
       cartmodel.deleteitem(req.body.amount).then(()=>{
           res.redirect('/cart')
       })

 } else {
  req.flash("vaildatorErr" , validationResault(req).array() )
  res.redirect('/cart')
 }
}

exports.deleteallpost = (req,res,next)=>{
    if(validationResault(req).isEmpty()) {
     
       cartmodel.deleteallitem().then(()=>{
           res.redirect('/cart')
       })

 } else {
  req.flash("vaildatorErr" , validationResault(req).array() )
  res.redirect('/cart')
 }
}

exports.postCard = (req,res,next)=>{
   if(validationResault(req).isEmpty()) {
     
          cartmodel.additem({
          name : req.body.name ,
          price : req.body.price ,
          amount : req.body.amount,
          userId : req.session.UserId , 
          productId : req.body.productId ,
          timestamp :  Date.now()

      }).then(()=>{
          res.redirect('/cart')
      }).catch((err)=>{
          console.log(err)
      })
   }   else {
    req.flash("vaildatorErr" , validationResault(req).array() )
    res.redirect(req.body.redirect2)
   }  
}