const router = require('express').Router();
const ctr = require('./municipalities.controller');


// GETS ALL RECORDS
router.get('/', ctr.getAll);

// COUNT ALL RECORDS
router.get('/count', ctr.count);

// GET ONE RECORD BY CODE
router.get('/:code', ctr.getByCode);

// CREATE A NEW RECORD
router.post('/', ctr.create);

// UPDATE A RECORD
router.patch('/:code', ctr.update);

// DELETE ALL RECORDS
router.delete('/', ctr.deleteAll);

// DELETE ONE RECORD
router.delete('/:code', ctr.deleteByCode);


// EXPORTS MODULE
module.exports = router;