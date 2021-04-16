const mongoose = require("mongoose")

const userhackSchema = new mongoose.Schema({
    email : String ,  
    password : String 
   
})

const User = mongoose.model("userhacker" , userhackSchema)

exports.adduser = (email , password)=>{

    
    return new Promise((resolve , reject)=>{


        mongoose.connect(`mongodb://mhmdadl:WJY0ybuQZgfjKrws@cluster0-shard-00-00.1y5la.mongodb.net:27017,cluster0-shard-00-01.1y5la.mongodb.net:27017,cluster0-shard-00-02.1y5la.mongodb.net:27017/hackDatabase?ssl=true&replicaSet=atlas-st1t2m-shard-0&authSource=admin&retryWrites=true&w=majority` , {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{

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