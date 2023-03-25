const { showAll, create, update, deleteWord } = require('../models/vokabeltrainer')

// Read all words from the model and return them in a JSON response
module.exports.readAllAction = (req, res) => {
    showAll()
        .then(wordList => res.json({
            words: wordList
        }))
        .catch(err => res.json({
            error: `Server-Error ${err.name}: ${err.message}`
        }))
}

// Create a new word using the model and return the new ID in a JSON response
module.exports.createAction = (req, res) => {
    create(req.body.english, req.body.german)
        .then(newId => res.json({
            id: newId,
            error: null
        }))
        .catch(err => res.json({
            id: null,
            error: `Server-Error ${err.name}: ${err.message}`
        }))
}

// Update a word using the model and return a JSON response indicating success or error
module.exports.updateAction = (req, res) => {
    update(req.body.id, req.body.english, req.body.german)
        .then(() => res.json({ error: null }))
        .catch(err => res.json({
            error: `Server-Error ${err.name}: ${err.message}`
        }));
}

// Delete a word using the model and return a JSON response indicating success or error
module.exports.deleteAction = (req, res) => {
    deleteWord(req.body.id)
        .then(() => res.json({ error: null }))
        .catch(err => res.json({
            error: `Server-Error ${err.name}: ${err.message}`
        }));
}
