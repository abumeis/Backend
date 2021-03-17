const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");


const app = express();
const userRoute = require("./controllers/user");
app.use(bodyParser.json());
app.use(userRoute);
app.use(cors());
const port = 8000;



mongoose.connect(
  "mongodb://localhost:27017/authentifications",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("database connected");
  }
);

app.listen(port, () => console.log(`Login App listening on port ${port}`));


