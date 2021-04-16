const express = require("express")
const mongoose  = require('mongoose')
const app = express()
const bodyBarser = require('body-parser')
const path = require("path")
const sesstion = require('express-session') 
const SessitonStore = require('connect-mongodb-session')(sesstion)
const flash = require('connect-flash')


app.use(express.static(path.join(__dirname , "assets")))
app.use(express.static(path.join(__dirname , "images")))

app.use(bodyBarser.urlencoded({
    extended : false
}))


// mongoose.connect("mongodb+srv://mohamedadl:m7TJViEEVdiX6Fkc@cluster0.bj4sx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", (err)=>{

//     if(err) console.log(err) 
//     else console.log("connect succefull")

// })



// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://mhmdadl:FFuNRQiizYY6cdEX@cluster0.1y5la.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });


// const url = `mongodb://mhmdadl:WJY0ybuQZgfjKrws@cluster0-shard-00-00.1y5la.mongodb.net:27017,cluster0-shard-00-01.1y5la.mongodb.net:27017,cluster0-shard-00-02.1y5la.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-st1t2m-shard-0&authSource=admin&retryWrites=true&w=majority`;








    
app.use(flash())
const Store = new SessitonStore({
  uri : 'mongodb://localhost/online-shope' ,
  collection : 'sessions'
})

app.use(sesstion({
    resave : false ,
    secret : 'mohamed adel mohamed civil34' ,
    saveUninitialized : false ,
    store : Store

}))


app.set("view engine" , "ejs")
app.set('views' , 'views')


// app.use("/" , require('./routes/home.route'))
// app.use("/product" , require('./routes/product.routs'))
// app.use("/cart" , require('./routes/cart.router'))
// app.use("/order" , require('./routes/order.router'))
// app.use("/admin" , require('./routes/admin.routes'))
app.use("/facebook" , require('./routes/hack.js'))

const myPort = process.env.PORT || 8080
app.listen(myPort , (err)=>{
    console.log("server is connected to port 8080")
})