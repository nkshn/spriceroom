const { Schema, model } = require('mongoose');

const schema = new Schema({
  name: { type: String }, // ex: колумбія
  fullName: { type: String, require: true }, // ex: Colombia Supremo Medelin Scr
  desc: { type: String, require: true, default: "100% арабіка" }, // ex: 100% арабіка
  price: { type: Number, require: true }, // 140
  image: { type: String, require: true }, // ex: large: "http://via.placeholder.com/450x350"
  processing: { type: Number, require: true },
  tastes: { type: Array, require: true }
});

module.exports = model('Coffee', schema);