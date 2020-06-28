const router = require('express').Router();
const ctr = require('./forecastings.controller');


// GETS ALL RECORDS
router.get('/', ctr.getAll);

// GET ONE RECORD BY CODE
router.get('/:code', ctr.getByCode);

// CREATE A NEW RECORD
router.post('/', ctr.create);

// DELETE ALL RECORDS
router.delete('/', ctr.deleteAll);


// EXPORTS MODULE
module.exports = router;