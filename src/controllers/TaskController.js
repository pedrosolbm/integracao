const Task = require('../models/Task');

module.exports = {
    async index(req, res) {
        const task = await Task.findAll();
        return res.json(task);
    },
    async search(req, res) {
        const task = await Task.findByPk(req.params.id);
        return res.json(task);
    },
    async create(req, res) {
        const task = await Task.create({
            tarefa: req.body.tarefa,
            data: req.body.data,
            hora: req.body.hora,
            status: false,
            userId: req.body.userId
        });
        return res.json(task);
    },
    async update(req, res) {
        const task = await task.findByPk(req.params.id);
        await task.update(req.body);
        return res.json(task);
    },
    async destroy(req, res) {
        const task = await task.findByPk(req.params.id);
        await task.destroy();
        return res.send();
    }
};