const express = require('express')
const router = express.Router()
const magazineController = require('../controllers/magazine.controller');

// Retrieve all magazines
router.get('/', magazineController.findAll);

// Create a new magazine
router.post('/', magazineController.create);

// Retrieve a single magazine with id
router.get('/:id', magazineController.findById);

// Update a magazine with id
router.put('/:id', magazineController.update);

// Delete a magazine with id
router.delete('/:id', magazineController.delete);

module.exports = router