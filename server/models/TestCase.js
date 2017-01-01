const mongoose = require('mongoose')
const Schema = mongoose.Schema

const testCaseSchema = new Schema({
  name: String,
  description: String,
  project: { type: Number, ref: 'User' }
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })

module.exports = {
  model: mongoose.model('TestCase', testCaseSchema),
  schema: testCaseSchema
}