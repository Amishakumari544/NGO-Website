const express = require('express');
const cors =require('cors')
const app = express()
const https = require("https")
const fs = require("fs")

const PORT=process.env.PORT || 4000


const razorpayRouter = require('./razorpay')

app.use(cors());
app.use(express.json())

app.use('/razorpay',razorpayRouter)
app.use('/ping',(req,res)=>{
    res.send("server is on");
})

app.listen(PORT, () => {
    console.log(`your server has been started on port ${PORT}`)
})


