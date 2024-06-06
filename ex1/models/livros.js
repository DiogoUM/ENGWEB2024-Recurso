const mongoose = require('mongoose');

const livrosSchema = new mongoose.Schema({
    _id: {type: String, required: true},
    author: {type: String, required: true},
    awards: {type: Array, required: true},
    bbeScore: {type: String, required: true},
    bbeVotes: {type: String, required: true},
    bookFormat: {type: String},
    characters: {type: Array, required: true},
    coverImg: {type: String, required: true},
    description: {type: String, required: true},
    edition: {type: Number, required: true},
    firstPublishDate: {type: String, required: true},
    genres: {type: Array, required: true},
    isbn: {type: String, required: true},
    language: {type: String, required: true},
    likedPercent: {type: String, required: true},
    numRatings: {type: String, required: true},
    pages: {type: String, required: true},
    price: {type: String, required: true},
    publishDate: {type: String, required: true},
    publisher: {type: String, required: true},
    rating: {type: String, required: true},
    ratingsByStars: {type: Array, required: true},
    series: {type: String, required: true},
    setting: {type: Array, required: true},
    title: {type: String, required: true},
}, {collection: 'livros', versionKey: false});

module.exports = mongoose.model('livros', livrosSchema);