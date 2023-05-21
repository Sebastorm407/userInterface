const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
const sequelize = require('../database/db.js')
const User = require('../database/models/User.js')
const Links = require('../database/models/Links.js');

const PORT = process.env.PORT || 3000;
//Inicializaciones
const app = express();

//Configuraciones

app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'), 
    partialsDir: path.join(app.get('views'), 'partials'),
    //Se configura la extension que tendran los archivos .handlebars a .hbs
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
    //Toma la informacion del usuario, informacion del servidor, toma una funcion para continuar con el resto del codigo
    next();
})

/*Almacenar el nombre de mi aplicacion, en cualquier vista que voy a enviar al navegador se ve mejor
Todas las vistas tienen acceso a la informacion*/

//Routes

app.get('/', (req, res) => {
    User.create({
        name: "Sebas",
        username: "Sebastorm",
        password: "12345",
        fullname: "Sebastian Vargas"
    }).then(user => {
        res.json(user);
    });
})

app.get('/', (req, res) => {
    Links.create({
        titulo: "Entretenimiento",
        url: "https://hola.com",
        descripcion: "Es un cosa de locos"
    }).then(links => {
        res.json(links);
    });
})
//app.use(require('./routes/index.js'));
app.use(require('./routes/authentication.route.js'))
app.use('/links', require('./routes/links.route.js'))

//Public

app.use(express.static(path.join(__dirname, 'public')));

//Starting the server

app.listen(PORT, () => {
    console.log(`Listening on port: https://localhost:${PORT}`);

    //Conectarse a la base de datos
    //Force true: DROP TABLES 
    sequelize.sync({ force: false }).then(() => {
        console.log("We are connected to the database");

    }).catch(error => {
        console.log("Se ha producido un error", error)
    })
})