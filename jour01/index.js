const express = require('express');
const app = express();


app.listen(8000, () => {
    console.log('Server started on port: ');
  });


//  app.get('/authors/1', (req, res) => {
//    res.send('Lawrence Nowell, UK');
//  });
//  app.get('/authors/2/', (req, res) => {
//      res.send('William Shakespeare, UK');
//  });
//  app.get('/authors/3/', (req, res) => {
//      res.send('Charles Dickens, US');
//  });
//  app.get('/authors/4/', (req, res) => {
//    res.send('Oscar Wilde, UK');
//});






  
  const authors = [
    {
      id:1,
      name: "Lawrence Nowell",
      nationality: "UK",
      books: "Beowulf"
    },
    {
      id:2,
      name: "William Shakespeare",
      nationality: "UK",
      books: "Hamlet, Othello, Romeo and Juliet, MacBeth"
    },
    {
      id:3,
      name: "Charles Dickens",
      nationality: "US",
      books: "Oliver Twist, A Christmas Carol"

    },
    {
      id:4,
        username: "Oscar Wilde",
        nationality: "UK",
        books: "The Picture of Dorian Gray, The Importance of Being Earnest"

      }
  ];
  
  // Routes
  app.get("/", (req, res) => {
    res.send("Authors API");
})

app.get('/authors/:id', (req, res) => {
    if (authors[req.params.id] === undefined) {
        res.send(`The author id ${req.params.id} does not exist`)
    }else{
        res.send(`His name is ${authors[req.params.id].name } and he was born in ${authors[req.params.id].nationality} and he wrote ${authors[req.params.id].books}`)


    }

});

app.get("/cars/", (req, res) => {
    res.send("error fatal l'ordi va expluser")
})


app.get("/authors/:id/books", (req, res) => {
  res.send(`He wrote ${JSON.stringify(authors[req.params.id].books)}`)
})




