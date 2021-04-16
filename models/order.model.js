const mongoose = require('mongoose')


const orderschema = mongoose.Schema({
name : String , 
price : Number , 
amount : Number ,
productId : String ,
address : String , 
timestamp : Number  ,
})


// const sorderschema = mongoose.Schema({
// name : String , 
// price : Number , 
// amount : Number ,
// productId : String ,
// address : String ,
// timestamp : Number  ,
// })

const orderItem = mongoose.model("order" , orderschema)
// const sorderItem = mongoose.model("sorder" , sorderschema)

exports.additem = (data)=>{
    return new Promise((resolve , reject)=>{
        mongoose.connect('mongodb://localhost/online-shope', {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
            const item = new orderItem(data)
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

exports.getitems = ()=>{
    return new Promise((resolve , reject)=>{
         mongoose.connect('mongodb://localhost/online-shope', {useNewUrlParser : true , useUnifiedTopology : true}).then(()=>{
             return orderItem.find({})
         }).then(user=>{

            mongoose.disconnect()
             resolve(user)
         }).catch((err)=>{
           mongoose.disconnect()
           reject(err)
         })    
    })
}
// exports.sadditem = (data)=>{
//     return new Promise((resolve , reject)=>{
//         mongoose.connect('mongodb://localhost/online-shope', {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
//             const item = new sorderItem(data)
//             return item.save()
//         }).then(()=>{
//             mongoose.disconnect()
//             resolve("item added to cart")
//         }).catch((err)=>{
//             mongoose.disconnect()
//             reject(err)
//         })
//     })
// }


// exports.getItemByUseId = userIds=>{
// return new Promise((resolve , reject)=>{
//     mongoose.connect('mongodb://localhost/online-shope' , {useNewUrlParser : true , useUnifiedTopology : true}).then(()=> { return cartItem.find({ userId : userIds })
//         }).then(items =>{
//     mongoose.disconnect()
//        resolve(items)
// }).catch((err)=>{
//  mongoose.disconnect()
//   reject(err)
// })

// }) }




// exports.editItemByUseId = (id ,  newData )=>{
// return new Promise((resolve , reject)=>{
//     mongoose.connect('mongodb://localhost/online-shope' , { useNewUrlParser : true , useUnifiedTopology : true }).then(()=> { 
//         return cartItem.updateOne({
//         _id : id , 
//         amount : newData.amount ,
//         timestamp : newData.timestamp
        
//     })
//         }).then(items =>{
//     mongoose.disconnect()
//        resolve(items)
//        console.log(items)
// }).catch((err)=>{
//  mongoose.disconnect()
//   reject(err)
//   console.log(err)
// })

// }) }

// exports.deleteitem = (id )=>{
// return new Promise((resolve , reject)=>{
//     mongoose.connect('mongodb://localhost/online-shope' , { useNewUrlParser : true , useUnifiedTopology : true }).then(()=> { 
//         return cartItem.deleteOne({
//         _id : id
        
//     })
//         }).then(items =>{
//     mongoose.disconnect()
//        resolve(items)
//        console.log(items)
// }).catch((err)=>{
//  mongoose.disconnect()
//   reject(err)
//   console.log(err)
// })

// }) }


exports.deleteitem = (id)=>{
return new Promise((resolve , reject)=>{
    mongoose.connect('mongodb://localhost/online-shope' , { useNewUrlParser : true , useUnifiedTopology : true }).then(()=> { 
        return orderItem.deleteOne({
            _id : id
        })
        }).then(() =>{
    mongoose.disconnect()
       resolve("items")
       console.log("deleted")
}).catch((err)=>{
 mongoose.disconnect()
  reject(err)
  console.log(err)
})

}) }


