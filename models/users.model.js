const mongoose = require("mongoose")
const bcrypt = require('bcryptjs')
const userSchema = new mongoose.Schema({
    email : String , 
    username : String , 
    password : String ,
    isAdmin : {
        type : Boolean ,
        default : false
    }
})

const User = mongoose.model("user" , userSchema)



exports.rejisteruser = (username, email , password )=>{
    return new Promise((resolve , reject)=>{
         
        mongoose.connect('mongodb://localhost/online-shope', {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
            
           return User.findOne({
               email : email
           }).then((user)=>{
                 if(user) {   
            mongoose.disconnect()
            reject("email is used")
                 }

                 else {
                     return bcrypt.hash(password , 10)
                 }
           }).then((hachpasssword)=>{
               let user = new User({
                   username : username ,
                   email : email ,           
                   password : hachpasssword 
               })
               return user.save()
           }).then (()=>{

            mongoose.disconnect()
               resolve()
               
           }).catch((err)=>{
               
            mongoose.disconnect()
               reject(err)
           })



         })
      
     })
}

exports.login = (email , password)=>{


   return new Promise((resolve , reject)=>{
mongoose.connect('mongodb://localhost/online-shope', {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{ 
      User.find({
        email : email
    }).then((user)=>{
        

        if (user.length <= 0) {
        mongoose.disconnect()   
        reject("email is not found")
                
             }


        else {
                 bcrypt.compare( password , user[0].password ).then((same)=>{
                         if(!same){
                            mongoose.disconnect()
                            reject("passowrd is wrong")
                        }
                        else {
                        mongoose.disconnect()
                        resolve({
                            id :user[0]._id, 
                            isAdmin : user[0].isAdmin
                        })
                            }
                    })

             }


        }).catch((err)=>{
            mongoose.disconnect()
           
            console.log(err)
        })
  }) 
})
         
    


   
           
    


}