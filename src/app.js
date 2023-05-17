const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');

//Inicializaciones
const app = express();

//Configuraciones

app.set("port", process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'), 
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars.js')
}));

app.set('view engine', '.hbs')

//Middlewares

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Global variables

app.use((req, res, next) => {
    next();
})

/*Almacenar el nombre de mi aplicacion, en cualquier vista que voy a enviar al navegador se ve mejor
Todas las vistas tienen acceso a la informacion*/

//Routes

app.use(require('./routes/index.js'));
app.use(require('./routes/authentication.js'))
app.use('/links', require('./routes/links.js'))

'/links'

//Public

app.use(express.static(path.join(__dirname, 'public')));

//Starting the server

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
})