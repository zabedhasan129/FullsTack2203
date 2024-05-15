const express = require("express");
var cors = require('cors');
// const secureApi = require("./middleware/secureapi");
const app = express();


app.use(cors())
app.use(express.json());

app.post("/api/v1/auth/registration", (req,res) => {
    console.log(req.body)
})


app.listen(8000, () => {
    console.log("Port Connected");
});