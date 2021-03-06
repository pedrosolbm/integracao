const User = require('../models/User');
const bcrypt = require('bcryptjs');
const saltRounds = 10;

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
    async userTasks(req, res) {
        const user = await User.findByPk(req.params.id, {
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
            senha: bcrypt.hashSync(req.body.senha, saltRounds, true),
            status: true
        });
        return res.json(user);
    },
    async login(req, res) {
        const user = await User.findOne({
                where: {
                    email: email = req.body.email
                }
            })
            .then(function (user) {
                if (!user) {
                    console.log('EMAIL NAO CADASTRADO!!!');
                    res.redirect('/');
                } else {
                    bcrypt.compare(req.body.senha, user.senha, function (err, result) {
                        if (result == true) {
                            console.log('AUTENTICADO COM SUCESSO, MEU CONSAGRADO!');
                            console.log()
                            res.redirect('/dashboard');
                            // console.log('/list/user_tasks/' + user.id);
                            // res.redirect('/list/user_tasks/' + user.id);
                        } else {
                            console.log('ERRRROOOOOOOOOOOOU!');
                            res.send(res.redirect('/'));
                        }
                    });
                }
            });
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