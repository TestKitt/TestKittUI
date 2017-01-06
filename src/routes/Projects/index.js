import { injectReducer } from '../../store/reducers'
import { fetchProjects } from './modules/projects'
import { fetchTests } from './modules/tests'

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

  getComponent (location, cb) {
    require.ensure([], function (require) {
      /*  Add the reducer to the store on key 'projects'  */
      const reducer = require('./modules/projects').default
      injectReducer(store, { key: 'projects', reducer })

      cb(null, require('./containers/ProjectsLayout').default)
    }, 'projects')
  },

  getIndexRoute (partialNextState, callback) {
    require.ensure([], function (require) {
      callback(null, {
        component: require('./containers/ProjectsViewContainer').default
      })
    })
  },

  getChildRoutes (partialNextState, callback) {
    // TODO: Refactor into fractal route
    require.ensure(['./containers/ProjectsViewContainer'], function (require) {
      const reducer = require('./modules/tests').default
      injectReducer(store, { key: 'tests', reducer })

      callback(null, [
        {
          path: ':id',
          component: require('./containers/ProjectOverviewContainer').default,
          onEnter (nextState, replace) {
            store.dispatch(fetchTests(nextState.params.id))
          }
        }
      ])
    })
  },

  onEnter (nextState, replace) {
    store.dispatch(fetchProjects())
  }
})
