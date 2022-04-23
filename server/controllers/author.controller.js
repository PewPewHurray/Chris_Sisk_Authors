const Author = require("../models/author.model");

const createAuthor = (req, res) => {
    Author.create(req.body)
        .then(newAuthor => res.json(newAuthor))
        .catch(err => res.status(400).json(err))
}

const findAllAuthors = (req, res) => {
    Author.find()
        .then(allAuthors => res.json(allAuthors))
        .catch(err => console.log(err));
}

const findOneAuthor = (req, res) => {
    Author.findById({_id: req.params.id})
        .then(oneAuthor => res.json(oneAuthor))
        .catch(err => console.log(err))
}

const findAndUpdateAuthor = (req, res) => {
    Author.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
        .then(updatedAuthor => res.json(updatedAuthor))
        .catch(err => res.status(400).json(err))
}

const deleteOneAuthor = (req, res) => {
    Author.deleteOne({_id: req.params.id})
        .then(deleteConfirm => res.json(deleteConfirm))
        .catch(err => console.log(err))
}

module.exports = {
    createAuthor,
    findAllAuthors,
    findOneAuthor,
    findAndUpdateAuthor,
    deleteOneAuthor
}