const mongoose = require("mongoose");
const express = require("express");
const app = express();
const port = 8000;
const hotelModel = require("./models/hotel");
const restaurantModel = require("./models/restaurant");
mongoose.connect(
  "mongodb://localhost:27017/trippy_basics",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("database connected");
  }
);

app.listen(port, () => console.log(`Trippy app listening on port ${port}`));


app.get("/hotels" , async(req, res)=>{
    const hotels = await hotelModel.find();
    res.json(hotels)
})