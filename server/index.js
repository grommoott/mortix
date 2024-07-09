const express = require("express")
const cors = require("cors")
const PORT = process.env.PORT || 7777

const app = express()

app.use(cors())

app.use(express.static("../dist"))

app.get("/", (req, res) => {
    res.sendFile("index.html")
})

app.listen(PORT, () => {
    console.log("Server started on port " + PORT)
})