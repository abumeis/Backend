const mongoose = require("mongoose");
const { Schema } = mongoose;
mongoose.connect(
  "mongodb://localhost:27017/garage",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("database connected");
  }
);

const carsSchema = new Schema({
  brand: String,
  model: String,
  year: Number,
  created: Date,
});

const carModel = mongoose.model("cars", carsSchema);

carModel
  .updateOne(
    {
      model: "Espace",
    },
    {
      year: 2000,
    }
  )
  .then((response) => {
    console.log(response);
  });
