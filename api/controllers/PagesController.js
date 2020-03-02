const Page = require('../models/Page.js');
const InternalPage = require('../models/InternalPage.js');

module.exports = app => {
    const { existsOrError, notExistsOrError } = app.api.library.validation;

    function save(req, res) {
        const page = { ...req.body };

        if (req.params.id) {
            page.id = req.params.id;
        }

        try {
            existsOrError(page.name, 'Nome não informado');
            existsOrError(page.uri, 'URI não informada')
        } catch (msg) {
            return res.status(400).send(msg);
        }

        if (page.id) { //UPDATE
            Page.update(page, { where: { id: page.id } })
                .then(() => res.sendStatus(200))
                .catch(err => res.status(500).send(err))
        } else { //CREATE
            Page.create({ ...page })
                .then(() => res.sendStatus(200))
                .catch(err => res.status(500).send(err))
        }
    }

    function get(req, res) {
        Page.findAll({ where: { deleted: false } })
            .then(pages => res.json(pages))
            .catch(err => res.status(500).send(err))
    }

    function getById(req, res) {
        const pageId = req.params.id

        Page.findOne({ where: { id: pageId, deleted: false } })
            .then(page => res.json(page))
            .catch(err => res.status(500).send(err))
    }

    async function remove(req, res) {
        try {
            existsOrError(req.params.id, 'Código da página não informado')

            const internalPage = await InternalPage.findAll({ where: { parent_id: req.params.id } })
            notExistsOrError(internalPage, 'Página possui dependencias internas.')

            const rowsDeleted = await Page.destroy({ where: { id: req.params.id } })

            res.status(204).send()
        } catch (msg) {
            res.status(400).send(msg)
        }
    }

    return { save, get, getById, remove }

}