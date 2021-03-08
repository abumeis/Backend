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

carModel.findById('604642b01c59ca2714d8d872',(error,data)=>{
    if(error){
        console.log(error)
    }else{
        console.log(data)
    }
})