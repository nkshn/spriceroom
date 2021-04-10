const { Schema, model } = require('mongoose');

const schema = new Schema({
  name: { type: String, require: true, unique: true}, // ex: колумбія
  fullName: { type: String }, // ex: Colombia Supremo Medelin Scr
  desc: { type: String, require: true },
  price: { type: Number, require: true },
  images: { type: Array, require: true }, // small img: "http://via.placeholder.com/200x150", large: "http://via.placeholder.com/450x350"

  countAtStorage: { type: Number, require: true }, // desc: кількість на складі
  roastLevel: { type: Number, require: true }, // desc: ступінь обсмажки (0 - 100)
  process: { type: String, require: true }, /// desc: обробка зерна (мите і т.д.)
  taste: { type: String, require: true }, // desc: смак (яскрава кислотність, яскрава гіркота, збалансований смак з середньою кислотністю і т.д.)
  aroma: { type: Array, require: true }, // desc: аромат (шоколад, перець, зелене яблуко, мигдаль і т.д.)
});

module.exports = model('Coffee', schema);