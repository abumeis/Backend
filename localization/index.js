const express = require('express');
const expressHandelbars = require('express-handlebars');
const translations = require('./translations.json');

const app = express();
app.engine('handlebars',expressHandelbars());
app.set('view engine','handlebars');
//app.use(express.static('./public'));

//Port
app.listen(8000, () => {
    console.log('Server started on port 8000');
  });


  
// Routes
app.get('/',(req, res)=> {
    res.render("home",{lang :translations[0].translation, title:"c'est comme ça qu'on dit Bonjour, ça va ? en Arabe",
    img:'https://restcountries.eu/data/lby.svg'})
});



app.get('/:lang', (req, res) => {
    if(req.params.lang === "ar"){
    res.render("home",{lang :translations[0].translation, title:"c'est comme ça qu'on dit Bonjour, ça va ? en Arabe",
    img:'https://restcountries.eu/data/lby.svg'})
}

    else if(req.params.lang === "zh"){
        res.render("home",{lang :translations[1].translation, title:"c'est comme ça qu'on dit Bonjour, ça va ? en Chinois",
        img:'https://restcountries.eu/data/chn.svg'})
    }

    else if(req.params.lang === "ru"){
        res.render("home",{lang :translations[2].translation, title:"c'est comme ça qu'on dit Bonjour, ça va ? en Russe",
        img:'https://restcountries.eu/data/rus.svg'})
    }

    else{
        res.render("home",{lang :translations[0].translation})
        }
    
});