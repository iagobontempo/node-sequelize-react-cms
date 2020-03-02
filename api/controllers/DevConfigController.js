const DevConfig = require('../models/DevConfig.js');

module.exports = app => {
    const { existsOrError, notExistsOrError } = app.api.library.validation;

    function save(req, res) {
        const config = { ...req.body };
        //UPDATE
        DevConfig.update(config, { where: { id: 1 } })
            .then(() => res.sendStatus(200))
            .catch(err => res.status(500).send(err))

    }

    function get(req, res) {
        DevConfig.findAll()
            .then(config => res.json(config))
            .catch(err => res.status(500).send(err))
    }

    return { save, get }

}