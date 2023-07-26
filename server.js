const express = require("express");
const dbConnect = require("./config/database")
const todoRoutes = require("./routes/todoRoutes")
const cors =require("cors")
const bodyParser=require("body-parser")

const app = express();
dbConnect();

require("dotenv").config();
const PORT = process.env.PORT || 4001;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());

app.use("/todo", todoRoutes);

app.listen(PORT, () => {
    console.log(`Server started at port no. ${PORT}`)
})

app.get("/", (req, res) => {
    res.send(`<h1>This is HomePage</h1>`)
})