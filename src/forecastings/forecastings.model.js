const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const forecastingsSchema = new Schema({
  municipalityName: { type:  String, uppercase: true, required: true },
  municipalityCode: { type: String, required: true },
  precipitations: { type: [{}],  required: true},
  temperatures: { type: [{}],  required: true},
  stateSkies: { type: [{}],  required: true},
  winds: { type: [{}],  required: true},
  humidities: { type: [{}],  required: true},
  created: { type: Date, default: Date.now }
});


module.exports = mongoose.model('Forecastings', forecastingsSchema);