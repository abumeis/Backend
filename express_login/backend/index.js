const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const config = require("./config");


const app = express();
const userRoute = require("./controllers/user");
app.use(bodyParser.json());
app.use(userRoute);
app.use(cors());



mongoose.connect(config.mongoDB, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  console.log("database connected");
}
);

app.listen(config.port, () => console.log("Login App connected"))


