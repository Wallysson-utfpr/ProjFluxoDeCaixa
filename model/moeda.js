//
var conexao = require('../config/conexao');

var MoedaSchema = conexao.Schema({
    nome: { 
        type: String,
        max: 50,
        required: [true, 'Nome é obrigatorio']
    },
    alta: { 
        type: String,
        default: "" 
     },
    baixa: { 
        type: String,
        default: "" 
     },
    foto: { 
        type: String,
        default: ''
     }

})


module.exports = conexao.model("Moeda", MoedaSchema);