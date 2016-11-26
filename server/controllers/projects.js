const Project = require('../models/Project')
const util = require('util')

exports.getAll = (req, res) => {
  Project.find().exec().then((err, result) => res.send({data: err}))
};

exports.create = (req, res) => {
  // Validate the request
  req.checkBody('name', 'Invalid name').notEmpty()
  req.checkBody('description', 'Invalid description').notEmpty()
  req.checkBody('image_url', 'Invalid image url').notEmpty()

  req.getValidationResult().then((result) => {
    if (!result.isEmpty()) {
      let errors = result.mapped()
      Object.keys(errors).forEach((key) => {
        errors[key] = errors[key].msg
      })
      res.status(400).json(errors)
    } else {
      let project = new Project({
        name: req.body.name,
        description: req.body.description,
        image_url: req.body.image_url
      })

      // Save the object
      project.save().then((data) => {
        res.json(data)
      }).catch((err) => {
        console.log(err)
        res.status(400).send('There was an error saving the project')
      })
    }
  });
};

exports.update = (req, res) => {
  res.send(req.query)
};

exports.delete = (req, res) => {
  res.send(req.query)
};
