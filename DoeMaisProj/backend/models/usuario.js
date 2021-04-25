const mongoose = require ('mongoose');

const usuarioSchema = mongoose.Schema ({
nome: {type: String, required: true},
cpf: {type: String, required: true, default: '00000000000'},
idade: {type: String, required: true},
endereco: {type: String, required: true},
celular: {type: String, required: true, default: '000000000'},
tipoSanguineo:{type: String, required: true}

});

module.exports = mongoose.model('Usuario', usuarioSchema);