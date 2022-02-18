import {
  HashRouter as Router,
} from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { routes } from './routes'

function App (props: any) {
  return (
    <Router>
      {
        renderRoutes(routes)
      }
    </Router>
  )
}

export default App
