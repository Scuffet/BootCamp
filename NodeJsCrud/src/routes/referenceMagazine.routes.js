const express = require('express')
const router = express.Router()
const referenceMagazineController = require('../controllers/referenceMagazine.controller');

// Retrieve all magazines
router.get('/', referenceMagazineController.findAll);

// Create a new magazine
router.post('/', referenceMagazineController.create);

// Retrieve a single magazine with id
router.get('/:id', referenceMagazineController.findById);

// Update a magazine with id
router.put('/:id', referenceMagazineController.update);

// Delete a magazine with id
router.delete('/:id', referenceMagazineController.delete);

module.exports = router