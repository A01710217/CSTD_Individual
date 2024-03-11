exports.get_login = (request, response, next) => {
    response.render('login', {
        nombreUsuario: request.session.username || '',
    });
};

exports.post_login = (request, response, next) => {
    console.log(request.body);
    request.session.username = request.body.nombreUsuario;
    response.redirect('/');
}

exports.get_logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/usuarios/login');
    });
}