const express = require('express');
const livros = require('../controllers/livros.js');

const router = express.Router();

router.get('/', (req, res) => {
    if ('character' in req.query) {
        livros.findByCharacter(req.query.character)
            .then(data => res.jsonp(data))
            .catch(error => res.status(500).jsonp(error));
    } else if ('genre' in req.query) {
        livros.findByGenre(req.query.genre)
            .then(data => res.jsonp(data))
            .catch(error => res.status(500).jsonp(error));
    } else {
        livros.list()
            .then(data => res.jsonp(data))
            .catch(error => res.status(500).jsonp(error));
    }
});

router.post('/', (req, res) => {
    livros.create(req.body)
        .then(() => res.sendStatus(201))
        .catch(error => res.status(500).jsonp(error));
});

//
router.get('/characters', (req, res) => {
    livros.getCharactes()
        .then(data => res.jsonp(data))
        .catch(error => res.status(500).jsonp(error));
});

router.get('/genres', (req, res) => {
    livros.getGenres()
        .then(data => res.jsonp(data))
        .catch(error => res.status(500).jsonp(error));
});

router.get('/:id', (req, res) => {
    livros.findById(req.params.id)
        .then(data => res.jsonp(data[0] || {}))
        .catch(error => res.status(500).jsonp(error));
});

router.put('/:id', (req, res) => {
    livros.update(req.params.id, req.body)
        .then(livro => res.status(204).jsonp(livro))
        .catch(error => res.status(500).jsonp(error));
});

router.delete('/:id', (req, res) => {
    livros.remove(req.params.id)
        .then( livro => res.status(204).jsonp(livro))
        .catch(error => res.status(500).jsonp(error));
});

module.exports = router;