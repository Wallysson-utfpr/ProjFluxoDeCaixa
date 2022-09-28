var conexao = require('../config/conexao');

var ClienteSchema = conexao.Schema({
    nome: {
        type: String,
        max: 50,
        required: [true, 'Nome é obrigatorio']
    },

    dataNasc: {
        type: String,
        default: ""
    },

    cpf: {
        type: String,
        default: ""
    },

    endereco: {
        type: String,
        default: ""
    },
})


module.exports = conexao.model("Cliente", ClienteSchema);