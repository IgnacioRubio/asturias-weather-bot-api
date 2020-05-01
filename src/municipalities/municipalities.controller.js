// GETS ALL RECORDS
exports.getAll = (req, res, next) => {
  res.status(200).send('GET ALL MUNICIPIOS');
}

// GET ONE RECORD BY ID
exports.getById = (req, res, next) => {
  res.status(200).send('GET MUNICIPIO BY CODE')
}

// CREATE A NEW RECORD
exports.create = (req, res, next) => {
  res.status(201).json(req.body.salute);
}

// UPDATE A RECORD
exports.update = (req, res, next) => {
  res.status(200).send('PATCH A MUNICIPIO');
}

// DELETE ALL RECORDS
exports.deleteAll = (req, res, next) => {
  res.status(204).send('DELETE ALL MUNICIPIOS');
}

// DELETE ONE RECORD
exports.deleteById = (req, res, next) => {
  res.status(204).send('DELETE MUNICIPIO BY CODE');
}