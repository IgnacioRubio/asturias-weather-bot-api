const router = require('express').Router();
const ctr = require('./municipalities.controller');

// GETS ALL RECORDS
router.get('/', ctr.getAll);

// GET ONE RECORD BY ID
router.get('/:id', ctr.getById);

// CREATE A NEW RECORD
router.post('/', ctr.create);

// UPDATE A RECORD
router.patch('/:id', ctr.update);

// DELETE ALL RECORDS
router.delete('/', ctr.deleteAll);

// DELETE ONE RECORD
router.delete('/:id', ctr.deleteById);


// EXPORTS MODULE
module.exports = router;