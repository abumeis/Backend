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
carModel.deleteMany({}).then(() => {
  carModel.create([
    {
      brand: "Renault",
      model: "Espace",
      year: 1999,
    },
    {
      brand: "Renault",
      model: "Scenic",
      year: 2004,
    },
    {
      brand: "Peugeot",
      model: "308",
      year: 2017,
    },
  ]);
});

