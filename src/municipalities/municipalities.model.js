const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const municipalitiesSchema = new Schema({
  code: { type: String, unique: true, required: true, dropDups: true }, 
  name: { type: String, required: true },
  capital: { type: String },
  created: { type: Date, default: Date.now }
});


module.exports = mongoose.model('Municipalities', municipalitiesSchema);