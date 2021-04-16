const mongoose = require("mongoose")



const productmodel = new mongoose.Schema({
    name : String, 
    image : String, 
    price : String, 
    catorgress : String ,
    discrption : String
})



const produt = mongoose.model('prduct' , productmodel)



exports.getproduct = ()=>{

 return new Promise((resolve , reject)=>{
         
    mongoose.connect('mongodb://localhost/online-shope', {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
        return produt.find({})
     }).then((products)=>{
         resolve(products)
         mongoose.disconnect()
     }).catch((err)=>{
         
        mongoose.disconnect()
         reject(err)
     })
  
 })


}

exports.getproductbtcatorgress = (catorgress)=>{

 return new Promise((resolve , reject)=>{
         
    mongoose.connect('mongodb://localhost/online-shope', {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
        return produt.find({ catorgress : catorgress})
     }).then((products)=>{
         resolve(products)
         mongoose.disconnect()
     }).catch((err)=>{
         
        mongoose.disconnect()
         reject(err)
     })
  
 })


}
exports.getproductbyid = (id)=>{

 return new Promise((resolve , reject)=>{
         
    mongoose.connect('mongodb://localhost/online-shope', {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
        return produt.findById(id)
     }).then((products)=>{

         resolve(products)
         mongoose.disconnect()
     }).catch((err)=>{
         
        mongoose.disconnect()
         reject(err)
     })
  
 })


}


exports.addproduct = (data)=>{
    return new Promise((resolve , reject)=>{
        mongoose.connect('mongodb://localhost/online-shope', {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
            const item = new produt(data)
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