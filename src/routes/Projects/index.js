/* Sync route definition
export default (store) => ({
  path : 'projects',
  indexRoute :  { component: AllProjectsView },
  childRoutes: [
    { path: 'create', component: CreateProjectView }
  ]
})
*/

// Async route definition
export default (store) => ({
  path : 'projects',
  getChildRoutes (partialNextState, callback) {
    require.ensure([], function (require) {
      callback(null, [
        // { path: 'create', component: require('./containers/CreateProjectViewContainer').default },
        { path: ':id', component: require('./containers/ProjectOverviewContainer').default }
      ])
    })
  },

  getIndexRoute (partialNextState, callback) {
    require.ensure([], function (require) {
      callback(null, {
        component: require('./containers/ProjectsViewContainer').default
      })
    }, 'projects')
  }
})
