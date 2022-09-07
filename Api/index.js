const express = require('express')
const Router = express.Router()

Router.get('/getLogginApi', (req, res) => {
  const req = req.body
  console.log(req)
})