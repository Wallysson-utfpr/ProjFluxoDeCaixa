
var conexao = require('../config/conexao');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

var LoginSchema = conexao.Schema({
    // validação do email
    email : {
        type: String,
        required: [true, 'E-mail é obrigatorio']
    },
    
    // validação da senha
    password : {
        type: String,
        required: [true, 'senha é obrigatoria'],
        max:  20,
        min:  5
    },
});

LoginSchema.methods = {
   
    compareHash(hash) {
        return bcrypt.compare(hash, this.password);
    },
    
    generateToken() {
        return jwt.sign({ _id: this._id }, "secret", {
          expiresIn: 864000
        });
    }
};

module.exports = conexao.model("Login", LoginSchema);
