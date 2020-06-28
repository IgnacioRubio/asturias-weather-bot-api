const Forecasting = require('./forecastings.model');


// GETS ALL RECORDS
exports.getAll = (req, res, next) => {
  const fields = 'municipalityName municipalityCode precipitations temperatures stateSkies winds humidities created';

  Forecasting.find({}, fields, (err, docs) => {
    if (err) {
      return next(err);
    }

    res.status(200).json(docs);
  });
}

// GET ONE RECORD BY ID
exports.getByCode = (req, res, next) => {
  const code = req.params.code;

  const fields = 'municipalityName municipalityCode precipitations temperatures stateSkies winds humidities created';

  Forecasting.findOne({ municipalityCode: code }, fields, (err, doc) => {
    if (err) {
      return next(err);
    }

    res.status(200).json(doc);
  });
}

// CREATE A NEW RECORD
exports.create = (req, res, next) => {
  let forecastingData = {
    municipalityName: req.body.municipalityName,
    municipalityCode: req.body.municipalityCode,
    precipitations: req.body.precipitations,
    temperatures: req.body.temperatures,
    stateSkies: req.body.stateSkies,
    winds: req.body.winds,
    humidities: req.body.humidities,
    created: req.body.created
  };

  Forecasting.create(forecastingData, (err, doc) => {
    if (err) {
      return next(err);
    }

    forecastingData.id = doc._id;
    res.status(201).json(forecastingData);
  });
}

// DELETE ALL RECORDS
exports.deleteAll = (req, res, next) => {
  Forecasting.deleteMany({}, (err) => {
    if (err) {
      return next(err);
    }

    res.sendStatus(204);    
  });
}