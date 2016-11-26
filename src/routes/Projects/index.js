import { injectReducer } from '../../store/reducers'
import { fetchProjects } from './modules/projects'

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
      /*  Add the reducer to the store on key 'projects'  */
      const reducer = require('./modules/projects').default
      injectReducer(store, { key: 'projects', reducer })

      callback(null, {
        component: require('./containers/ProjectsViewContainer').default
      })
    }, 'projects')
  },

  onEnter (nextState, replace) {
    store.dispatch(fetchProjects())
  }
})