const mongoose = require('mongoose')


const cartschema = mongoose.Schema({
name : String , 
price : Number , 
amount : Number ,
userId : String ,
productId : String ,
timestamp : Number
})

const cartItem = mongoose.model("cart" , cartschema)

exports.additem = (data)=>{
    return new Promise((resolve , reject)=>{
        mongoose.connect('mongodb://localhost/online-shope', {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
            const item = new cartItem(data)
            return item.save()
        }).then(()=>{
            mongoose.disconnect()
            resolve("item added to cart")
        }).catch((err)=>{
            mongoose.disconnect()
            reject(err)
        })
    })
}


exports.getItemByUseId = userIds=>{
return new Promise((resolve , reject)=>{
    mongoose.connect('mongodb://localhost/online-shope' , {useNewUrlParser : true , useUnifiedTopology : true}).then(()=> { return cartItem.find({ userId : userIds })
        }).then(items =>{
    mongoose.disconnect()
       resolve(items)
}).catch((err)=>{
 mongoose.disconnect()
  reject(err)
})

}) }




exports.editItemByUseId = (id ,  newData )=>{
return new Promise((resolve , reject)=>{
    mongoose.connect('mongodb://localhost/online-shope' , { useNewUrlParser : true , useUnifiedTopology : true }).then(()=> { 
        return cartItem.updateOne({
        _id : id , 
        amount : newData.amount ,
        timestamp : newData.timestamp
        
    })
        }).then(items =>{
    mongoose.disconnect()
       resolve(items)
       console.log(items)
}).catch((err)=>{
 mongoose.disconnect()
  reject(err)
  console.log(err)
})

}) }

exports.deleteitem = (id )=>{
return new Promise((resolve , reject)=>{
    mongoose.connect('mongodb://localhost/online-shope' , { useNewUrlParser : true , useUnifiedTopology : true }).then(()=> { 
        return cartItem.deleteOne({
        amount : id
        
    })
        }).then(items =>{
    mongoose.disconnect()
       resolve(items)
       console.log(items)
}).catch((err)=>{
 mongoose.disconnect()
  reject(err)
  console.log(err)
})

}) }


exports.deleteallitem = ()=>{
return new Promise((resolve , reject)=>{
    mongoose.connect('mongodb://localhost/online-shope' , { useNewUrlParser : true , useUnifiedTopology : true }).then(()=> { 
        return cartItem.deleteMany({})
        }).then(items =>{
    mongoose.disconnect()
       resolve(items)
       console.log(items)
}).catch((err)=>{
 mongoose.disconnect()
  reject(err)
  console.log(err)
})

}) }






//   web  html - css - js    =>    pug - ejs => html , css => tailwind css ,  
// app  < android -ios >
// ai  python 
