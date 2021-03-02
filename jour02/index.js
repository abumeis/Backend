const express = require('express');
const expressHandelbars = require('express-handlebars');

const app = express();
app.engine('handlebars',expressHandelbars());
app.set('view engine','handlebars');
//app.use(express.static('./public'));

//Port
app.listen(8000, () => {
    console.log('Server started on port 8000');
  });


  
// Routes





app.get("/login", (req, res) => {
  res.render("login");
});

app.use(express.urlencoded({ extended: true }))
app.post("/login", (req, res) => {
    console.log(req.body);
    res.redirect('https://github.com/abumeis/Backend')

})