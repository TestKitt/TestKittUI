const Project = require('../models/Project').model
const Test = require('../models/Test').model

exports.getAllForProject = (req, res) => {
  Test
    .find({ _project: req.params.projectId }, 'name description steps data updated_at created_at')
    .sort({ 'created_at': 1 })
    .exec()
    .then((result, err) => res.send({ data: result }))
}

exports.findForProjectById = (req, res) => {
  Test
    .findById(req.params.id, 'name description updated_at')
    .exec()
    .then((result, err) => res.send(result))
}

exports.create = (req, res) => {
  // Validate the request
  req.checkBody('name', 'Invalid name').notEmpty()
  req.checkBody('description', 'Invalid description').notEmpty()

  req.getValidationResult().then((result) => {
    if (!result.isEmpty()) {
      let errors = result.mapped()
      Object.keys(errors).forEach((key) => {
        errors[key] = errors[key].msg
      })
      res.status(400).json(errors)
    } else {
      Project.findById(req.params.projectId, 'name description image_url updated_at').then((project) => {
        if (project) {
          let test = new Test({
            name: req.body.name,
            description: req.body.description,
            _project: project._id
          })

          // Save the object
          test.save().then((data) => {
            project.tests = project.tests ?
              project.tests.concat(test) :
              [test]
            project.save()
            res.json(data)
          }).catch((err) => {
            console.log(err)
            res.status(400).send('There was an error saving the test')
          })
        } else {
          res.status(400).send('That project does not exist')
        }
      })
    }
  })
}

exports.update = (req, res) => {
  Test.findById(req.params.id).then((project) => {
    ['name', 'description'].forEach((key) => {
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
  })
}

exports.delete = (req, res) => {
  Test.findById(req.params.id).remove().then(() => {
    res.status(204).send('success')
  })
}
