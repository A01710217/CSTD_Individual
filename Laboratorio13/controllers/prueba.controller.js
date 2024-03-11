//En el archivo .routes.js, se importa el controlador: 
//router.get('/validar-contrasiena', prueba_controller.get_validar_contrasiena);
// router.post('/validar-contrasiena', prueba_controller.post_validar_contrasiena);
//para usarvariables:

//const prueba_controller = require('../controllers/prueba.controller');

exports.get_crear = {request, response, next} => {
    response.render('crear');
};

exports.post_crear = {request, response, next} => {
    console.log(request.body);
    if (request.body.password === request.body.confirm_password) {
        response.redirect('/');
    } else {
        response.redirect('/validar-contrasiena');
    }
};