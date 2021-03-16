const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json())
const port = 8000;
const hotelModel = require("./models/hotel");
const restaurantModel = require("./models/restaurant");
//const roomModel = require("./models/rooms");
//const tableModel = require("./models/tables");
mongoose.connect(
  "mongodb://localhost:27017/trippy_basics",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("database connected");
  }
);

app.listen(port, () => console.log(`Trippy app listening on port ${port}`));

////CRUD Hotels

//get all hotels
//app.get("/hotels", async (req, res) => {
//  const hotels = await hotelModel.find();
//  res.json(hotels);
//});

//get by id included rooms id too
app.get("/hotels/:id", async (req, res) => {
  const getHotelById = await hotelModel.findById(req.params.id).populate("rooms").lean().exec();
  res.json(getHotelById);
})



//pagination
app.get("/hotels/", async (req, res) => {
  try {
    const limit = req.query;
    const page = req.query;
    //const options = {
    //   page: parseInt(page, 10) || 1,
    //   limit: parseInt(limit, 10)|| 1,
    // };

    const hotels = await hotelModel.paginate({}, { limit: 3, page: 2 });
    return res.json(hotels);
  } catch (error) {
    console.log("the pagination is not working");

  }
})


app.get("/hotels/", async (req, res) => {
  const page = req.query.page
  const limit = req.query.limit
  try {
    const getHotelById = await hotelModel.findById(req.params.id);
    res.send(getHotelById);
  } catch (error) {
    res.send(`the hotel with ID ${req.params.id} not found`);
  }

  res.json(hotels);
});


///psot
app.post("/hotels", async (req, res) => {
  try {
    const addHotel = await hotelModel.create({
      name: req.body.name,
      address: req.body.address,
      country: req.body.country,
      city: req.body.city,
      stars: req.body.stars,
      hasSpa: req.body.hasSpa,
      hasPool: req.body.hasPool,
      priceCategory: req.body.priceCategory,
    });
    res.send(`the ${addHotel} it has been added`);
  } catch {
    res.send("hotel has not been added ");
  }
});

//put 

app.put("/hotels/:id", async (req, res) => {
  try {
    await hotelModel.updateOne(
      {
        _id: req.params.id,
      },
      {
        address: req.query.address, //"or whatever"
      }

    );
    res.send("the hotel address has been modified");
  } catch (error) {
    res.send("the hotel address has Not modified");
  }
});

app.delete("/hotels/:id", async (req, res) => {
  try {
    await hotelModel.deleteOne({ _id: req.params.id })
    res.send(`the hotel with ID ${req.params.id} has been deleted`);

  } catch (error) {
    res.send(`the hotel with ID ${req.params.id} was not deleted yet`);
  }
});



////CRUD Resturants

//get All the Restaurants
//app.get("/restaurants", async (req, res) => {
//    const resto = await restaurantModel.find();
//    res.json(resto);
//  });

//get by id included tables id too
app.get("/restaurants/:id", async (req, res) => {
  const getRestoById = await restaurantModel.findById(req.params.id).populate("tables").lean().exec();
  res.json(getRestoById);
})


//pagination
app.get("/restaurants/", async (req, res) => {
  try {
    const limit = req.query;
    const page = req.query;
    const resto = await restaurantModel.paginate({}, { limit: 3, page: 2 });
    return res.json(resto);
  } catch (error) {
    console.log("the pagination is not working");

  }
})
///psot
app.post("/restaurants", async (req, res) => {
  try {
    const addResto = await restaurantModel.create({
      name: req.body.name,
      address: req.body.address,
      country: req.body.country,
      city: req.body.city,
      stars: req.body.stars,
      cuisine: req.body.cuisine,
      priceCategory: req.body.priceCategory,


    });
    res.send(`the resturant with all these info ${addResto} has been added`);
  } catch {
    res.send("the resturant has not been added ");
  }
});

//put 

app.put("/restaurants/:id", async (req, res) => {
  try {
    const hotels = await restaurantModel.updateOne(
      {
        _id: req.params.id,
      },
      {
        name: req.query.name,
      }
    );
    res.send("the resto name has been modified");
  } catch (error) {
    res.send("the resturant name has Not been modified");
  }
});

app.delete("/restaurants/:id", async (req, res) => {
  try {
    await restaurantModel.deleteOne({ _id: req.params.id })
    res.send(`the resto with ID ${req.params.id} has been deleted`);
  } catch (error) {
    res.send(`the resto with ID ${req.params.id} was not deleted yet`);
  }
});