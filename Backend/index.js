const express = require("express")
const app = express()
const dotenv = require("dotenv")
const cors = require("cors")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

app.use(cors())
app.use(bodyParser.json())
dotenv.config()

let ImmigirationSchema = new mongoose.Schema({
    country: {
        type: String,
        required: [true, "Enter Country Name"]
    },
    title: {
        type: String,
        required: [true, "Enter Country Title"]
    },
    desc: {
        type: String,
        required: [true, "Enter Country Description"]
    },
    image: {
        type: String,
        required: [true, "Enter Country Image"]
    }
})

let ImmigirationModel = mongoose.model("imigrantion", ImmigirationSchema)



// Datalari getirmek
app.get("/imigrantion", async (req, res) => {
    let imigrant = await ImmigirationModel.find()
    res.send(imigrant)
})

// Datani ID-ye gore getirmek
app.get("/imigrantion/:id", async (req, res) => {
    let { id } = req.params
    let imigrant = await ImmigirationModel.findById(id)
    res.send({ data: imigrant })
})
// Post Atmag
app.post("/imigrantion", async (req, res) => {
    let newImigrant = ImmigirationModel(req.body)
    await newImigrant.save()
    res.send({ data: newImigrant })
})

// Delete
app.delete("/imigrantion/:id", async (req, res) => {
    let {id} = req.params
    await ImmigirationModel.findByIdAndDelete(id)
    res.send({
        message: "Succes Delete"
    })
})

mongoose.connect(process.env.ConnectionUrl)
    .then(() => {
        console.log("Succes Connected");
    })
app.listen(process.env.ConnectionPort, () => {
    console.log("5050 Success Port");
})