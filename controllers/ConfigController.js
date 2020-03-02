const Config = require('../models/Config.js');

module.exports = app => {

    function save(req, res) {
        const config = { ...req.body };
        //UPDATE
        Config.update(config, { where: { id: 1 } })
            .then(() => res.sendStatus(200))
            .catch(err => res.status(500).send(err))

    }

    function get(req, res) {
        Config.findAll()
            .then(config => res.json(config))
            .catch(err => res.status(500).send(err))
    }

    return { save, get }

}