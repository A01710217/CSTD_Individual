const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './Laboratorio22/views');

const session = require('express-session');
app.use(session({
  secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste', 
  resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
  saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

const cookieParser = require('cookie-parser');
app.use(cookieParser());

//Configurando multer para subir archivos
const multer = require('multer');

//fileStorage: Es nuestra constante de configuración para manejar el almacenamiento
const fileStorage = multer.diskStorage({
    destination: (request, file, callback) => {
        //'uploads': Es el directorio del servidor donde se subirán los archivos 
        callback(null, 'Laboratorio22/public/uploads');
    },
    filename: (request, file, callback) => {
        //aquí configuramos el nombre que queremos que tenga el archivo en el servidor, 
        //para que no haya problema si se suben 2 archivos con el mismo nombre concatenamos el timestamp
        //Linea que solo funciona en Mac: callback(null, new Date().toISOString() + '-' + file.originalname);
        callback(null, Number(new Date()).toString() + file.originalname);
    },
});

//En el registro, pasamos la constante de configuración y
//usamos single porque es un sólo archivo el que vamos a subir, 
//pero hay diferentes opciones si se quieren subir varios archivos. 
//'archivo' es el nombre del input tipo file de la forma

//Nota: Preguntar a Lalo
app.use(multer({ storage: fileStorage }).single('imagen_producto'));

//Protección contra ataques de CRF CSRF
const csrf = require('csurf');
const csrfProtection = csrf();

app.use(csrfProtection);

const rutasHome = require('./routes/productos.routes.js');
const rutasFeedback = require('./routes/feedback.routes.js');
const rutasResenia = require('./routes/resenia.routes.js');
const rutasUsuarios = require('./routes/usuario.routes.js');

app.use('/', rutasHome);
app.use('/feedback', rutasFeedback);
app.use('/resenia', rutasResenia);
app.use('/usuarios', rutasUsuarios);

app.use((request, response, next) => {
  response.status(404);
  response.sendFile(path.join(__dirname, 'views', '404.html')); //Manda la respuesta
});

app.listen(3000);