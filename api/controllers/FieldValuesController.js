const FieldValue = require('../models/FieldValue.js');

module.exports = app => {
    const { existsOrError } = app.api.library.validation;

    function save(req, res) {
        const value = { ...req.body };

        if (req.params.parentId) {
            value.parent_id = req.params.parentId;
        }

        if (req.body.fieldId) {
            value.field_id = req.body.fieldId;
        }

        if (req.body.id) {
            value.id = req.body.id;
        }

        try {
            existsOrError(value.parent_id, 'ParentId não informado');
            existsOrError(value.field_id, 'FieldId não infomado');
            existsOrError(value.value, 'Nome não informado');
        } catch (msg) {
            return res.status(400).send(msg);
        }

        if (value.id) { //UPDATE
            FieldValue.update(value, { where: { id: value.id } })
                .then(() => res.sendStatus(200))
                .catch(err => res.status(500).send(err))
        } else { //CREATE
            FieldValue.create({ ...value })
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

        FieldValue.findAll({ where: { parent_id: req.params.parentId } })
            .then(value => res.json(value))
            .catch(err => res.status(500).send(err))
    }

    return { save, get }
}