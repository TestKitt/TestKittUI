// We only need to import the modules necessary for initial render
import CoreLayout from 'layouts/CoreLayout/CoreLayout'
import ProjectsRoute from './Projects'
import SettingsRoute from './Settings'
import NotFound from 'components/NotFound'

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export const createRoutes = (store) => ({
  path        : '/',
  component   : CoreLayout,
  indexRoute  : { onEnter: (nextState, replace) => replace('projects') },
  childRoutes : [
    ProjectsRoute(store),
    SettingsRoute(store),
    {
      path: '*',
      component: NotFound
    }
  ]
})

export default createRoutes
