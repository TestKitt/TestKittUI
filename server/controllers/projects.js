const Project = require('../models/Project').model

exports.getAll = (req, res) => {
  Project
    .find({}, 'name description image_url updated_at comments')
    .sort({ 'updated_at': -1 })
    .exec()
    .then((result, err) => res.send({ data: result }))
}

exports.findById = (req, res) => {
  Project
    .findById(req.params.id, 'name description image_url updated_at comments')
    .exec()
    .then((result, err) => res.send(result))
}

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
  })
}

exports.update = (req, res) => {
  Project.findById(req.params.id, (err, project) => {
    if (err) return handleError(err);

    ['name', 'description', 'image_url'].forEach((key) => {
      if (req.body[key]){
        project[key] = req.body[key]
      }
    })

    project.save().then((data) => {
      res.json(data)
    }).catch((err) => {
      console.log(err)
      res.status(400).send('There was an error saving the project')
    })
  });
}

exports.delete = (req, res) => {
  Project.findById(req.params.id).remove().then(() => {
    res.send('success', 204)
  })
}
