const express = require("express");
const port = process.env.PORT || 5000 ;
const app = express()
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));


app.get("/", function (req, res) {
    res.sendFile(__dirname  + "/index.html");
})


app.listen(port, function (req, res) {
    console.log("server is renning on port 4000");
});