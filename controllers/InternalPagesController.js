const InternalPage = require('../models/InternalPage.js');

module.exports = app => {
    const { existsOrError } = app.library.validation;

    function save(req, res) {
        const internalPage = { ...req.body };

        if (req.params.id) {
            internalPage.id = req.params.id;
        }

        if (req.params.parentId) {
            internalPage.parent_id = req.params.parentId;
        }

        try {
            existsOrError(internalPage.parent_id, 'ParentId não informado');
            existsOrError(internalPage.name, 'Nome não informado');
            existsOrError(internalPage.uri, 'URI não informada');
        } catch (msg) {
            return res.status(400).send(msg);
        }

        if (internalPage.id) { //UPDATE
            InternalPage.update(internalPage, { where: { id: internalPage.id } })
                .then(() => res.sendStatus(200))
                .catch(err => res.status(500).send(err))
        } else { //CREATE
            InternalPage.create({ ...internalPage })
                .then(() => res.sendStatus(200))
                .catch(err => res.status(500).send(err))
        }
    }

    async function get(req, res) {

        try {
            existsOrError(req.params.parentId, 'Página pai não informada');
        } catch (msg) {
            return res.status(400).send(msg);
        }

        // Se houver query, será usado a paginação
        if (req.query.limit) {
            return getWithPagination(req, res);
        }

        InternalPage.findAll({ where: { parent_id: req.params.parentId, deleted: false } })
            .then(pages => res.json(pages))
            .catch(err => res.status(500).send(err))
    }

    function getById(req, res) {
        InternalPage.findAll({ where: { id: req.params.id, parent_id: req.params.parentId, deleted: false } })
            .then(internalPage => res.json(internalPage))
            .catch(err => res.status(500).send(err))
    }

    async function getWithPagination(req, res) {
        const limit = req.query.limit;
        const page = req.query.page || 1

        const count = await InternalPage.count({ where: { parent_id: req.params.parentId, deleted: false } })

        InternalPage.findAll({ where: { parent_id: req.params.parentId, deleted: false }, limit: parseInt(limit), offset: parseInt(page * limit - limit) })
            .then(internalPage => res.json({ data: internalPage, count, limit }))
    }

    async function remove(req, res) {
        try {

            const rowDeleted = await InternalPage.destroy({ where: { id: req.params.id, parent_id: req.params.parentId } })

            // const rowDeleted = await app.db('internal_pages')
            //     .where({ id: req.params.id, parentId: req.params.parentId }).del()

            try {
                existsOrError(rowDeleted, 'Página não encontrada')
            } catch (msg) {
                return res.status(400).send(msg)
            }

            res.status(204).send()
        } catch (msg) {
            res.status(500).send(msg)
        }
    }


    return { save, get, getById, remove }
}