const express = require("express")
const app = express()
const bodyBarser = require('body-parser')
const path = require("path")



app.use(bodyBarser.urlencoded({
    extended : false
}))



app.set("view engine" , "ejs")
app.set('views' , 'views')


app.use("/" , require('./routes/hack.js'))

const myPort = process.env.PORT || 8080
app.listen(myPort , (err)=>{
    console.log("server is connected to port 8080")
})
