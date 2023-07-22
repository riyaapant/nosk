const express = require("express")
const app = express()
app.use(express.json())
const port = 8080

const fs = require('fs')


app.post("/users", (req, res) => {
    const object = []
    fs.readFile('./users.json', "utf-8", (err, data) => {
        const object = JSON.parse(data)
        console.log(object)

        const user = {
            "id": req.body.id,
            "name": req.body.name,
            "email": req.body.email
        }
        object.push(user)
        const newdata = JSON.stringify(object)
        fs.writeFile('./users.json', newdata, err => {
            if (err)
                console.log("Error writing data")
        })
        console.log(object)
    })

    res.json({ "msg": "File written successfully" })

})

/*
app.get("/users/:id", (req, res)=>{
    const id = req.params.id
    const intId = parseInt(id)
    const user = myArray.find((user)=>{
        return user.id === id
    })
    console.log(user[intId])
})
*/

/*
app.post("/register",(req,res)=>{
    const {name, email, password} = req.body
    res.json({
        "name":name,
        "email":email,
        "password":password
    })
})

app.get("/", (req,res)=>{
    res.json({
        "message": "Hello world!"
    })
    // res.send("Hello World")
})

app.get("/me", (req,res)=>{
    res.json({
        "name": "Riya Pant",
        "faculty": "BECE",
        "roll": 191333
    })
})

app.get("/echo/:var",(req,res)=>{
    console.log(req.params)
    const value = req.params.var
    res.send({
        "message": value
    })
})

app.get("/:greeting/:name",(req,res)=>{
    console.log(req.params)
    const greeting = req.params.greeting
    const name = req.params.name
    res.send({
        "greeting": greeting,
        "name": name
    })
})


app.post("/me",(req,res)=>{
    console.log(req.body)
    res.json(req.body)
})


app.post("/string", (req, res) => {
    if (req.body.operation === "title") {
        str = req.body.data[0].toUpperCase()+req.body.data.substr(1)
        res.json({
            "data": str
        })
    }
    if (req.body.operation === "upper") {
        str = req.body.data.toUpperCase()
        res.json({
            "data": str
        })
    }
})
*/


function listening() {
    console.log("listening on port 8080")
}
app.listen(port, listening)