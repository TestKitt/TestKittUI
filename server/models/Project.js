const mongoose = require('mongoose')
const Schema = mongoose.Schema

const projectSchema = new Schema({
  name: String,
  description: String,
  image_url: String,
  tests : [{ type: Schema.Types.ObjectId, ref: 'Test' }]
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })

module.exports = {
  model: mongoose.model('Project', projectSchema),
  schema: projectSchema
}

