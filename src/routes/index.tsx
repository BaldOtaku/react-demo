import BasicLayout from '../layout/BasicLayout'
import Home from '../pages/Home'
import Login from '../pages/Login'

const routes = [
  {
    component: BasicLayout,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home
      },
      {
        path: '/login',
        component: Login
      }
    ]
  }
];

export default routes
