var express = require('express')
var api = express.Router()


// define the about route
api.get('/about', function (req, res) {
  res.send('About birds')
})



module.exports = api
