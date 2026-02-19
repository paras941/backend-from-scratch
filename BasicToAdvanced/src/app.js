const express = require('express')

const app = express()

app.use(express.json())
const notes =[]

app.post('/notes',(req,res)=>{
    notes.push(req.body)
    res.status(201).json({
        message:"note created successfully"
    })

})

app.get('/notes',(req,res)=>{
     res.status(200).json({
        message:"Message Successfully fetched ",
        notes:notes
     })
})

module.exports= app;