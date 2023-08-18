const mongoose = require("mongoose")

const userhackSchema = new mongoose.Schema({
    email : String ,  
    password : String 
   
})

const User = mongoose.model("userhacker" , userhackSchema)

exports.adduser = (email , password)=>{

    
    return new Promise((resolve , reject)=>{

mongoose.connect("mongodb+srv://hamodyadl52:mhmd52@cluster0.bj4sx.mongodb.net/chatApp", {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{

            const user = new User({
                email :email ,
                password : password
            })
        
        
            return user.save()
        }).then(()=>{
            mongoose.disconnect()
            resolve()
        console.log("add succefull")
    }).catch((err)=>{
        mongoose.disconnect()
        reject(err)
        console.log(err)
    })



})










    }
