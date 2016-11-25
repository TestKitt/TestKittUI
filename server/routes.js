const projectsController = require('./controllers/projects')
const testsController = require('./controllers/tests')

module.exports = (app) => {
  // Project API routes
  app.get('/api/projects', projectsController.getAll)
  app.post('/api/projects', projectsController.create)
  app.patch('/api/projects/:id', projectsController.update)
  app.delete('/api/projects/:id', projectsController.delete)

  // Tests API routes
  app.get('/api/projects/:projectId/tests', testsController.getAll)
  app.post('/api/projects/:projectId/tests', testsController.create)
  app.patch('/api/projects/:projectId/tests/:id', testsController.update)
  app.delete('/api/projects/:id/tests/:id', testsController.delete)
}
