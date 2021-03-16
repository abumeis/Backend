
const rooms = [
  {
    people: 3,
    price: 100,
    hasBathroom: true,
  },
  {
    people: 1,
    price: 300,
    hasBathroom: false,
  },
  {
    people: 4,
    price: 1000,
    hasBathroom: true,
  }, {
    people: 2,
    price: 100,
    hasBathroom: false,
  },
  {
    people: 4,
    price: 200,
    hasBathroom: true,
  },
  {
    people: 1,
    price: 100,
    hasBathroom: false,
  },
]
const tables = [
  {
    seat: 4,
    isVIP: true,

  },
  {
    seat: 4,
    isVIP: false,

  },
  {
    seat: 8,
    isVIP: false,
  },
  {
    seat: 3,
    isVIP: false,
  },
  {
    seat: 6,
    isVIP: false,
  },
  {
    seat: 2,
    isVIP: true,
  },
]
const mongoose = require("mongoose");
const hotelModel = require("./models/hotel");
const restaurantModel = require("./models/restaurant");
const roomModel = require("./models/rooms");
const tableModel = require("./models/table");

mongoose.connect(
  "mongodb://localhost:27017/trippy_basics",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("database connected");
  }
);




const addingRooms = async () => {
  try {
    await roomModel.deleteMany({})
    const result = await roomModel.create(rooms);
    console.log(result);
    const room1 = result[0]._id;
    const room2 = result[1]._id;
    const room3 = result[2]._id;
    const room4 = result[3]._id;
    const room5 = result[4]._id;
    const room6 = result[5]._id;
    const room7 = result[6]._id;
    const room8 = result[7]._id;
    const room9 = result[8]._id;
    const room10 = result[9]._id;
    const room11 = result[10]._id;
    const room12 = result[11]._id;
    await hotelModel.deleteMany({})
    const hotels = await hotelModel.create([
      {
        name: "Atlantis Refuge Hotel",
        address: "30 rue de la frette",
        country: "France",
        city: "Paris",
        stars: 4,
        hasSpa: false,
        hasPool: true,
        priceCategory: 1111,
        rooms: [room1, room2],

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
        rooms: [room3, room4],

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
        rooms: [room5, room6],

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
        rooms: [room7, room8],
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
        rooms: [room9, room10],
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
        rooms: [room11, room12],

      },
    ]);
    console.log(hotels);

  } catch (err) {
    console.log(err)
  }
}
addingRooms()







const addingTable = async () => {
  try {
    await tableModel.deleteMany({})
    const result = await tableModel.create(tables);
    console.log(result);
    const table1 = result[0]._id;
    const table2 = result[1]._id;
    const table3 = result[2]._id;
    const table4 = result[3]._id;
    const table5 = result[4]._id;
    const table6 = result[5]._id;
    await restaurantModel.deleteMany({})
    const restos = await restaurantModel.create([
      {
        name: "The Incredible Lobster",
        address: "30 rue de l'ermitage",
        city: "Paris",
        country: "France",
        stars: 4,
        cuisine: "Crêpe",
        priceCategory: 1,
        tables: [table3, table4],
      },
      {
        name: "The Golden Fiddler",
        address: "90 via biatza",
        city: "Tripoli",
        country: "Libya",
        stars: 5,
        cuisine: "Bazine",
        priceCategory: 11,
        tables: [table5, table6],

      },
      {
        name: "The Pepper Badger",
        address: "33 rue jdida ",
        city: "Tunis",
        country: "Tunisia",
        stars: 5,
        cuisine: "Couscous",
        priceCategory: 11,
        tables: [table1, table2],

      },
      {
        name: "page2 resto1",
        address: "33 rue jdida ",
        city: "Tunis",
        country: "Tunisia",
        stars: 5,
        cuisine: "Couscous",
        priceCategory: 11,
        tables: [table1, table2],

      },
      {
        name: "page2 resto2",
        address: "33 rue jdida ",
        city: "Tunis",
        country: "Tunisia",
        stars: 5,
        cuisine: "Couscous",
        priceCategory: 11,
        tables: [table3, table4],

      },
      {
        name: "page2 resto3",
        address: "33 rue jdida ",
        city: "Tunis",
        country: "Tunisia",
        stars: 5,
        cuisine: "Couscous",
        priceCategory: 11,
        tables: [table5, table6],

      },
    ]);
    console.log(restos);

  } catch (err) {
    console.log(err)
  }
}
addingTable()
