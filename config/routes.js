const ADMIN = require('../api/library/admin');
const DEV = require('../api/library/dev');

module.exports = app => {
    //! ** AUTHENTICATION ** //
    // app.route('/signup')
    //     .post(app.controllers.AuthController.save)
    app.route('/signin')
        .post(app.api.controllers.AuthController.signin)
    app.route('/validateToken')
        .post(app.api.controllers.AuthController.validateToken)

    //! ** CONFIG ** //
    app.route('/config')
        .get(app.api.controllers.ConfigController.get)
        .put(app.api.library.passport.authenticate())
        .put(ADMIN(app.api.controllers.ConfigController.save))

    // //! ** DEV CONFIG ** //
    app.route('/devConfig')
        .get(app.api.controllers.DevConfigController.get)
        //.get(app.api.api.devConfig.getLock) ! Como fazer para os dados sensiveis serem pegos apenas pelo localhost??? Servico de email etc
        .put(app.api.library.passport.authenticate())
        .put(ADMIN(app.api.controllers.DevConfigController.save))

    //! ** USERS ** //
    app.route('/users')
        .all(app.api.library.passport.authenticate())
        .get(ADMIN(app.api.controllers.UsersController.get))
        .post(ADMIN(app.api.controllers.UsersController.save))
    app.route('/users/:id')
        .all(app.api.library.passport.authenticate())
        .get(ADMIN(app.api.controllers.UsersController.getById))
        .put(DEV(app.api.controllers.UsersController.save))

    //! ** PAGES ** //
    app.route('/pages')
        .get(app.api.controllers.PagesController.get)
        .post(app.api.library.passport.authenticate())
        .post(ADMIN(app.api.controllers.PagesController.save))
    app.route('/pages/:id')
        .get(app.api.controllers.PagesController.getById)
        .put(app.api.library.passport.authenticate())
        .put(ADMIN(app.api.controllers.PagesController.save))
        .delete(app.api.library.passport.authenticate())
        .delete(DEV(app.api.controllers.PagesController.remove)) //Voltar para adicionar soft delete (ficará no metodo save)
    //! ** PAGES FIELD ** //
    app.route('/pages/:parentId/fields')
        .get(app.api.controllers.FieldsController.get)
        .put(app.api.controllers.FieldsController.save)
        .post(app.api.controllers.FieldsController.save)



    //! ** INTERNAL PAGES ** //
    app.route('/pages/:parentId/internal')
        .get(app.api.controllers.InternalPagesController.get)
        .post(app.api.library.passport.authenticate())
        .post(ADMIN(app.api.controllers.InternalPagesController.save))
    app.route('/pages/:parentId/internal/:id')
        .get(app.api.controllers.InternalPagesController.getById)
        .put(app.api.library.passport.authenticate())
        .put(ADMIN(app.api.controllers.InternalPagesController.save))
        .delete(app.api.library.passport.authenticate())
        .delete(DEV(app.api.controllers.InternalPagesController.remove))
    //! ** INTERNAL PAGES FIELD ** //
    app.route('/pages/:parentId/internalFields')
        .get(app.api.controllers.FieldsController.getInternal)
        .put(app.api.controllers.FieldsController.saveInternal)
        .post(app.api.controllers.FieldsController.saveInternal)

    //! ** VALUES ** //
    app.route('/pages/:parentId/fields/value')
        .get(app.api.controllers.FieldValuesController.get)
        .put(app.api.controllers.FieldValuesController.save)
        .post(app.api.controllers.FieldValuesController.save)
}