const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const surveyRoutes = require("./views/users");
const mongoose = require("mongoose");

const port = 8080;
app.use(bodyParser.json())

app.use("/survey", surveyRoutes )


mongoose.connect('mongodb+srv://Ranjana:abc1234@cluster0.5pxtx.mongodb.net/TailView?retryWrites=true&w=majority',
    { useNewUrlParser : true, useUnifiedTopology: true }, 
    () => { console.log("DB connected!!")
})



app.get("/" , (req,res) => {
    res.send("We are at HomePage")
} )


app.listen(port , () => {
    console.log(`server started running on port ${port} !!`)
});
