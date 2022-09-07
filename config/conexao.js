// conexão com o banco de dados

const mongoose = require('mongoose');
const uri = "mongodb://localhost:27017/dadosapi";

// url banco de dados online
const url_prod ="mongodb+srv://Wallysson:Valdemir0123456@cluster0.bmdvm.mongodb.net/dadosapi"

mongoose.connect(url_prod, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose;

 