const User = require('../models/User');
const bcrypt = require('bcryptjs');

module.exports = {
    async index(req, res) {
        const user = await User.findAll();
        return res.json(user);
    },
    async tasks(req, res) {
        const user = await User.findAll({
            include: [{
                all: true
            }]
        });
        return res.json(user);
    },
    async search(req, res) {
        const user = await User.findByPk(req.params.id);
        return res.json(user);
    },
    async posts(req, res) {
        const user = await User.findAll({
            include: [{
                all: true
            }]
        });
        return res.json(user);
    },
    async create(req, res) {
        const user = await User.create({
            name: req.body.name,
            tel: req.body.tel,
            email: req.body.email,
            senha: bcrypt.hashSync(req.body.senha, 9, true),
            status: true
        });
        return res.json(user);
    },
    async update(req, res) {
        const user = await User.findByPk(req.params.id);
        await user.update(req.body);
        return res.json(user);
    },

    async login(req, res) {
        const user = await User.findAll({
            where: {
                email: email = req.body.email
            }
        });
        if (user == null) {
            return res.status(400).send(`Usuario nao encontrado/cadastrado`);
        }
        try {
            console.log("Comparando senhas...")
            if (bcrypt.compareSync(req.body.senha, user.senha)) {
                res.send('SUCESSAGEM 100%!');
            } else {
                res.send('DEU XABU DE AUTENTICAÇÃO');
            }
        } catch {
            console.log("DEU XABU!")
            res.status(500).send();
        } 
    },

    async destroy(req, res) {
        const user = await User.findByPk(req.params.id);
        await user.destroy();
        return res.send();
    }
};