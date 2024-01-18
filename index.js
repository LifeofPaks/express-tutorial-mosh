const Joi = require("joi") //npm i joi
const express = require("express")
const app = express()
const dotenv = require("dotenv").config()

const port = process.env.PORT || 5003
app.use(express.json())

const courses =[
    {
        id: 1,
        name:"Course1"
    },
    {
        id: 2,
        name:"Course2"
    },
    {
        id: 3,
        name:"Course3"
    }
]

app.get("/api/courses", (req, res) =>{
    res.send(courses)
})

app.get("/api/courses/:id", (req, res) =>{
    const course = courses.find(course => course.id === req.params.id)
    if(!course){
        res.status(404)
        res.json({message:"There is no course avaliable with that ID"})
    }
    res.send(course)
})

app.post("/api/courses", (req, res) =>{

    // using joi for validation
    
    const course = {
        id: courses.length + 1,
        name: req.body.name
    }
    
    courses.push(course)
    res.send(course)
})


app.listen(port, () =>{
    console.log(`Listening on Port:${port}`)
})