const product = require('../models/products.model')
const User = require('../models/users.model')
const vaildtionResulte =require('express-validator').validationResult

exports.gethome = (req,res,next)=>{

  const catorgress = req.query.catorgress

  const validc = ["phone" , 'closes']

  if(catorgress && validc.includes(catorgress))
  {
      product.getproductbtcatorgress(catorgress).then((products)=>{
        res.render('index' , {
          products : products ,
          vaildatorErr : req.flash("vaildatorErr")[0] ,
          isUser : req.session.UserId  ,
          isAdmin :  req.session.isAdmin
        })
  
    })

  } else{
    product.getproduct().then((products)=>{
    return  res.render('index' , {
          products : products ,
          isUser : req.session.UserId  ,
          isAdmin :  req.session.isAdmin ,
     
    vaildatorErr : req.flash("vaildatorErr")[0]
        })
  
    })
  }


}

// get page login and rejister
exports.getlogin = (req, res, next)=>{

  
   res.render('login' , {
     errors : req.flash("errlogin")[0] ,
     isUser : req.session.UserId ,
     isAdmin :  false ,
    vaildatorErr : req.flash("vaildatorErr")
   })
}
exports.getrejister = (req, res, next)=>{
   res.render('rejister' , {
    errors : req.flash("errlogin")[0] ,
    vaildatorErr : req.flash("vaildatorErr") ,
    isUser : req.session.UserId  ,
    isAdmin :  false
   })
}




// post page login and rejister



exports.postlogin = (req, res, next)=>{

  if(vaildtionResulte(req).isEmpty()){

       User.login( req.body.email , req.body.password ).then((resulte)=>{
    req.session.UserId = resulte.id  
    req.session.isAdmin = resulte.isAdmin   
    res.redirect("/")
    next()
    }).catch((err)=>{
      
    req.flash('errlogin' , err)

    console.log(err)

    res.redirect("/login")
    })
  } else {
    
    req.flash("vaildatorErr" , vaildtionResulte(req).array() )
    res.redirect('/login')

  }

  

  }


exports.postrejister = (req, res, next)=>{

  if(vaildtionResulte(req).isEmpty()){
    User.rejisteruser(req.body.username , req.body.email , req.body.password ).then(()=>{
      res.redirect("/login")   
    }).catch((err)=>{
      console.log(err)
      
      req.flash('errlogin' , err)
      res.redirect('/rejister')
    }) 

  }
  else {
    req.flash("vaildatorErr" , vaildtionResulte(req).array() )
    res.redirect('/rejister')

  }
 
}






exports.logout = (req , res , next)=>{

req.session.destroy(()=>{


  res.redirect('/login')


})

}




