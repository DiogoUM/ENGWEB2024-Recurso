var express = require('express');
const axios = require('axios');
var router = express.Router();

const api = 'http://localhost:17000/';
/* GET home page. */
router.get('/', function (req, res, next) {
  // use axios and get the data from the API before rendering the page
  axios.get(api + 'books')
      .then(response => {
        res.render('index', {title: 'Livros', livros: response.data});
      })
      .catch(error => {
        res.render('error', {message: error.message, error: error});
      });
});

router.get('/:id', function (req, res, next) {
  axios.get(api + 'books/' + req.params.id)
      .then(response => {
        res.render('livro', {title: 'Livro', livro: response.data});
      })
      .catch(error => {
        res.render('error', {message: error.message, error: error});
      });
});


module.exports = router;