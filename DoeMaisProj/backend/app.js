const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Usuario = require('./models/usuario');
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://api-access:NrghIln6w4R8Na40@cluster0.xo06r.mongodb.net/doemais-db?retryWrites=true&w=majority')
    .then(() => {
        console.log("Conexão OK")
    }).catch(() => {
        console.log("Conexão NOK")
    });

const usuarios = [
    {
        id: '1',
        nome: 'Jose',
        cpf: '12589466857',
        idade: '19',
        endereco: 'rua jaragua',
        celular: '154896857',
        tipoSanguineo: 'A+'
    }
]

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
    next();
});

app.post('/api/registro', (req, res, next) => {
    const usuario = new Usuario({
        nome: req.body.nome,
        cpf: req.body.cpf,
        idade: req.body.idade,
        endereco: req.body.endereco,
        celular: req.body.celular,
        tipoSanguineo: req.body.tipoSanguineo
    })
    usuario.save();
    console.log(usuario);
    res.status(201).json({ mensagem: 'Usuario registrado' })
})

app.get('/api/usuarios', (req, res, next) => {
    Usuario.find().then(documents => {
        console.log (documents)
        res.status(200).json({
            mensagem: "Tudo OK",
            usuarios: documents
        });
    })
});

app.use('/api/registo', (req, res, next) => {
    res.status(200).json({
        mensagem: "tudo OK",
        usuarios: usuarios
    })
});

module.exports = app;
