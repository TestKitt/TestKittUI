const mongoose = require('mongoose')
const Schema = mongoose.Schema

const testSchema = new Schema({
  name: String,
  description: String,
  _project: { type: Schema.Types.ObjectId, ref: 'Project' }
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })

module.exports = {
  model: mongoose.model('Test', testSchema),
  schema: testSchema
}