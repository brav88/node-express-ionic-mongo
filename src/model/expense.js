const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExpenseSchema = Schema({
  reason: String,
  amount: Number,  
});

module.exports = mongoose.model('expenses', ExpenseSchema);