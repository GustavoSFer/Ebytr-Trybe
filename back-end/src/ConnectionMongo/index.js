// import { connect } from 'mongoose';
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ebytr-trybe');

const schema = new mongoose.Schema({
  task: String,
  status: String,
  date: Date,
});

const model = mongoose.model('List', schema);

module.exports = model;