const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyParser = require("body-parser")

const app = express();
//app is used instead of writing server or any other name you name it.


app.use(morgan("tiny"))
app.use(bodyParser.urlencoded({extended: true}))



dotenv.config({path: "config.env"})
const PORT = process.env.PORT || 2000


app.set("view engine", "ejs")

app.get("/", (req, res)=>{
    res.render("index")
})

app.get("/", (req, res)=>{
    res.send("this is a project we are working on")
})

app.listen(PORT, ()=>{
    console.log(`server running on http://localhost:${PORT}`);
})