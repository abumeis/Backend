const mongoose = require("mongoose");
const hotelModel = require("./models/hotel");
const restaurantModel = require("./models/restaurant");
const roomModel = require("./models/rooms");

mongoose.connect(
  "mongodb://localhost:27017/trippy_basics",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("database connected");
  }
);

hotelModel.deleteMany({}).then(() => {
  hotelModel.create([
    {
      name: "Atlantis Refuge Hotel",
      address: "30 rue de la frette",
      country: "France",
      city: "Paris",
      stars: 4,
      hasSpa: false,
      hasPool: true,
      priceCategory: 1111,
    },
    {
      name: "Brass Petal Resort",
      address: "46 ben Ashour ",
      country: "Libya",
      city: "Tripoli",
      stars: 4,
      hasSpa: true,
      hasPool: false,
      priceCategory: 111,
    },
    {
      name: "Golden Palace Hotel",
      address: "55 aburgiba street",
      country: "Tunisia",
      city: "Tunis",
      stars: 5,
      hasSpa: true,
      hasPool: true,
      priceCategory: 1111,
    },
    {
      name: "4",
      address: "30 rue de la frette",
      country: "France",
      city: "Paris",
      stars: 4,
      hasSpa: false,
      hasPool: true,
      priceCategory: 1111,
    },
    {
      name: "5",
      address: "46 ben Ashour ",
      country: "Libya",
      city: "Tripoli",
      stars: 4,
      hasSpa: true,
      hasPool: false,
      priceCategory: 111,
    },
    {
      name: "6",
      address: "55 aburgiba street",
      country: "Tunisia",
      city: "Tunis",
      stars: 5,
      hasSpa: true,
      hasPool: true,
      priceCategory: 1111,
    },
  ]);
}); //

restaurantModel.deleteMany({}).then(() => {
  restaurantModel.create([
    {
      name: "The Incredible Lobster",
      address: "30 rue de l'ermitage",
      city: "Paris",
      country: "France",
      stars: 4,
      cuisine: "Crêpe",
      priceCategory: 1,
    },
    {
      name: "The Golden Fiddler",
      address: "90 via biatza",
      city: "Tripoli",
      country: "Libya",
      stars: 5,
      cuisine: "Bazine",
      priceCategory: 11,
    },
    {
      name: "The Pepper Badger",
      address: "33 rue jdida ",
      city: "Tunis",
      country: "Tunisia",
      stars: 5,
      cuisine: "Couscous",
      priceCategory: 11,
    },
    {
      name: "page2 resto1",
      address: "33 rue jdida ",
      city: "Tunis",
      country: "Tunisia",
      stars: 5,
      cuisine: "Couscous",
      priceCategory: 11,
    },
    {
      name: "page2 resto2",
      address: "33 rue jdida ",
      city: "Tunis",
      country: "Tunisia",
      stars: 5,
      cuisine: "Couscous",
      priceCategory: 11,
    },
    {
      name: "page2 resto3",
      address: "33 rue jdida ",
      city: "Tunis",
      country: "Tunisia",
      stars: 5,
      cuisine: "Couscous",
      priceCategory: 11,
    },
  ]);
});

roomModel.deleteMany({}).then(() => {
  roomModel.create([
    {
      people: 3,
      price: 100,
      hasBathroom: true,
    },
  ]);
});
