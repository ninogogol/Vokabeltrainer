// Import the Router class from the Express library
const { Router } = require('express')

// Import the controller actions for handling CRUD operations
const { createAction, readAllAction, updateAction, deleteAction } = require('../controllers/vokabeltrainer')

const router = new Router()

router.post('/', createAction)// Define the POST route for creating a new word
router.get('/', readAllAction)// Define the GET route for reading all words
router.put('/update', updateAction)// Define the PUT route for updating an existing word
router.delete('/delete', deleteAction)// Define the DELETE route for deleting a word

// Export the router instance to be used in other parts of the application
module.exports = router