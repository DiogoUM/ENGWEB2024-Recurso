const Livro = require("../models/livros.js");

module.exports = {
    list() {
        return Livro.find().exec();
    },

    findById(id) {
        return Livro.find({_id: id}).exec();
    },

    findByCharacter(ent) {
        return Livro.find({characters: ent}).exec();
    },

    findByGenre(tp) {
        return Livro.find({genres: tp}).exec();
    },

    getCharactes() {
        return Livro.distinct("characters").sort();
    },

    getGenres() {
        return Livro.distinct("genres").sort();
    },

    create(data) {
        const n = new Livro(data);
        return n.save();
    },

    update(id, data) {
        return Livro.findByIdAndUpdate({_id: id}, data, {new: true}).exec();
    },

    remove(id) {
        return Livro.findByIdAndDelete({_id: id}).exec();
    },
};