exports.get_resenia = (request, response, next) => {
    response.render('resenia', {
        resenias: Resenia.fetchAll()
    });
} 

exports.post_resenia = (request, response, next) => {
    console.log(request.body);
    const resenia = new Resenia(request.body.nombre_persona, request.body.resenia_texto);

    resenia.save();
    response.redirect('/resenia');
}