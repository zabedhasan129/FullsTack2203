require('dotenv').config()
const express = require("express");
var cors = require('cors');
const secureApi = require("./middleware/secureapi");
const app = express();
const routes = require("./routes");
const mognodbConfig = require('./mogodbConfig/mongodbConfig');


mognodbConfig();
app.use(cors())
app.use(express.json());
app.use(routes)

// app.post("/api/v1/auth/registration",secureApi, (req,res) => {
//     console.log(req.body)
// })


app.listen(8000, () => {
    console.log("Port Connected");
});