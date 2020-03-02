const ADMIN = require('../library/admin');
const DEV = require('../library/dev');

module.exports = app => {
    //! ** AUTHENTICATION ** //
    // app.route('/signup')
    //     .post(app.controllers.AuthController.save)
    app.route('/signin')
        .post(app.controllers.AuthController.signin)
    app.route('/validateToken')
        .post(app.controllers.AuthController.validateToken)

    //! ** CONFIG ** //
    app.route('/config')
        .get(app.controllers.ConfigController.get)
        .put(app.library.passport.authenticate())
        .put(ADMIN(app.controllers.ConfigController.save))

    // //! ** DEV CONFIG ** //
    app.route('/devConfig')
        .get(app.controllers.DevConfigController.get)
        //.get(app.api.devConfig.getLock) ! Como fazer para os dados sensiveis serem pegos apenas pelo localhost??? Servico de email etc
        .put(app.library.passport.authenticate())
        .put(ADMIN(app.controllers.DevConfigController.save))

    //! ** USERS ** //
    app.route('/users')
        .all(app.library.passport.authenticate())
        .get(ADMIN(app.controllers.UsersController.get))
        .post(ADMIN(app.controllers.UsersController.save))
    app.route('/users/:id')
        .all(app.library.passport.authenticate())
        .get(ADMIN(app.controllers.UsersController.getById))
        .put(DEV(app.controllers.UsersController.save))

    //! ** PAGES ** //
    app.route('/pages')
        .get(app.controllers.PagesController.get)
        .post(app.library.passport.authenticate())
        .post(ADMIN(app.controllers.PagesController.save))
    app.route('/pages/:id')
        .get(app.controllers.PagesController.getById)
        .put(app.library.passport.authenticate())
        .put(ADMIN(app.controllers.PagesController.save))
        .delete(app.library.passport.authenticate())
        .delete(DEV(app.controllers.PagesController.remove)) //Voltar para adicionar soft delete (ficará no metodo save)
    //! ** PAGES FIELD ** //
    app.route('/pages/:parentId/fields')
        .get(app.controllers.FieldsController.get)
        .put(app.controllers.FieldsController.save)
        .post(app.controllers.FieldsController.save)



    //! ** INTERNAL PAGES ** //
    app.route('/pages/:parentId/internal')
        .get(app.controllers.InternalPagesController.get)
        .post(app.library.passport.authenticate())
        .post(ADMIN(app.controllers.InternalPagesController.save))
    app.route('/pages/:parentId/internal/:id')
        .get(app.controllers.InternalPagesController.getById)
        .put(app.library.passport.authenticate())
        .put(ADMIN(app.controllers.InternalPagesController.save))
        .delete(app.library.passport.authenticate())
        .delete(DEV(app.controllers.InternalPagesController.remove))
    //! ** INTERNAL PAGES FIELD ** //
    app.route('/pages/:parentId/internalFields')
        .get(app.controllers.FieldsController.getInternal)
        .put(app.controllers.FieldsController.saveInternal)
        .post(app.controllers.FieldsController.saveInternal)

    //! ** VALUES ** //
    app.route('/pages/:parentId/fields/value')
        .get(app.controllers.FieldValuesController.get)
        .put(app.controllers.FieldValuesController.save)
        .post(app.controllers.FieldValuesController.save)
}