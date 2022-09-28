require('./environment')
const jwt = require('jsonwebtoken');
const express = require('express');
const app = express();

var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var path = require('path');
var Moeda = require('./model/moeda');
var Login = require('./model/login');
var upload = require('./config/configMulter');
var cliente = require('./model/cliente')

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));



app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine", "ejs");
let images = [];
let databaseReg = [];

app.get('/', function (req, res) {

  if (req.cookies.token) {
    res.redirect('/add');
  } else {
    res.render('login.ejs')
  }
})

app.get('/logout', function (req, res) {
  res.clearCookie('token');
  res.render('login.ejs')
})


app.get('/cadastrar', function (req, res) {
  res.render('cad_user.ejs');
})


// versão da função para cadastro de usuário - verifica se o email já está cadastrado.
app.post('/cadastrar', async (req, res) => {

  try {
    const { iptEmail } = req.body;
    const data = await Login.findOne({ email: iptEmail })

    const newUser = {
      id: data._id,
      email: data.email
    }

    return res.redirect('/userExist')

  } catch (error) {
    if (error) {
      var login = new Login({
        email: req.body.iptEmail,
        password: req.body.iptSenha
      })

      login.save(function (err) {
        if (err) {
          console.log(err);
        } else {
          res.redirect('/');
        }
      })
    }
  }
})


// autenticação do usuário no servidor - comparando os dados informados
app.post('/authenticate', async (req, res) => {
  const { iptEmail, iptSenha } = req.body;
  const data = await Login.findOne({ email: iptEmail, password: iptSenha })
  if (data) {
    const token = jwt.sign({ id: data._id }, 'secret', { expiresIn: '1h' });
    res.cookie('token', token, { maxAge: 3600000, httpOnly: true });
    res.redirect('/add');
  } else {
    res.redirect('/wrong_passw');
  }
})



app.get('/add', function (req, res) {
  if (req.cookies.token) {
    res.render('tela_principal2.ejs', {

    });
  } else {
    res.redirect('/');

  }
})

app.get('/wrong_passw', function (req, res) {
  res.render('wrong_passw.ejs');
})


app.get('/consulta', function (req, res) {

  res.render('cons_moeda.ejs');
})


app.get('/userExist', function (req, res) {
  res.render('userExist.ejs');
})

app.get('/cadconta', function (req, res) {

  res.render('cad_conta.ejs');
})

app.post('/add', function (req, res) {
  var cliente = new Cliente({
    nome: req.body.txtNome,
    dataNasc: req.body.txtDataNasc,
    cpf: req.body.txtCpf,
    endereco: req.body.txtEndereco,
  })

  cliente.save(function (err) {
    if (err) {
      console.log(err);
    } else {
      res.redirect('/add');
    }
  })

  money.save(function (err) {
    if (err) {
      console.log(err);
    } else {
      images.push(req.file.filename);
      res.redirect('/add');
    }
  })

})

let port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Conexão inicializada.");
})