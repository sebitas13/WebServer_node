require('dotenv').config();
const { hasSubscribers } = require('diagnostics_channel');
const express = require('express');
const hbs = require('hbs');
const { dirname } = require('path');

const path = require("path");
const app = express();


//Handlebars
hbs.registerPartials(__dirname+'/views/partials',function(err){});
app.set('view engine', 'hbs');


port = process.env.PORT;

// Contenido estatico

app.use(express.static('public'));


app.get('/',(req,res)=>{

    res.render('home',{
        titulo : 'Practicando node',
        nombre : 'Sebitas2'
    });

});



app.get('/hola-sebas',(req,res)=>{

    res.send('Hola sebitas');

});

app.get('/elements',(req,res)=>{

    res.render('elements',{
        titulo : 'Practicando node',
        nombre : 'Sebitas2'
    });
     
});

app.get('/generic',(req,res)=>{

    res.render('generic',{
        titulo : 'Practicando node',
        nombre : 'Sebitas2'
    });
     
});

// app.get('/elements',(req,res)=>{

//     res.sendFile(path.join(__dirname,'public/elements.html'));
     
// });

// app.get('/generic',(req,res)=>{

//     res.sendFile(path.join(__dirname,'public/generic.html'));
     
// });


app.get('*',(req,res)=>{

  res.sendFile(path.join(__dirname,'public/404.html'));
   
});




app.listen(port,()=>{
    console.log(`Escuchando en puerto ${port}`);
});