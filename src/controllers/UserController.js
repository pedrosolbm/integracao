const User = require('../models/User');

module.exports = {
    async index(req, res) {
        const user = await User.findAll();
        return res.json(user);
    },
    async tasks(req, res) {
        const user = await User.findAll({ include: [{ all: true }] });
        return res.json(user);
    },
    async search(req, res) {
        const user = await User.findByPk(req.params.id);
        return res.json(user);
    },
    async posts(req, res) {
        const user = await User.findAll({ include: [{ all: true }] });
        return res.json(user);
    },
    async create(req, res) {
        const user = await User.create(
            {
                name: req.body.name,
                tel: req.body.tel,
                email: req.body.email,
                senha: req.body.senha,
                status: true
            }
        );
        return res.json(user);
    },
    async update(req, res) {
        const user = await User.findByPk(req.params.id);
        await user.update(req.body);
        return res.json(user);
    },
    async destroy(req, res) {
        const user = await User.findByPk(req.params.id);
        await user.destroy();
        return res.send();
    }
};
