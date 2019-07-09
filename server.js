const express = require('express');
const app = express();
const hbs = require('hbs');
require('./helpers/helpers');

const port = process.env.PORT || 3000; // Variable de entorno.

app.use(express.static(__dirname + '/public')); // Middleware: Instruccion o callback que se va a ejecutar siempre, no importa el que el usuario pide.

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    // res.send('Hola Mundo');

    // let salida = {
    //     nombre: 'Yamil',
    //     apellido: 'Uclés', 
    //     edad: 33,
    //     url: req.url
    // }
    res.render('home', {
        name: 'yAmil'
    });
});

app.get('/about', (req, res) => {
    res.render('about')
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});