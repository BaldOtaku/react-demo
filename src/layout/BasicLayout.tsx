import { renderRoutes } from 'react-router-config'
import Header from './Header';
import Footer from './Footer';

function BasicLayout (props: any) {
  return (
    <>
      <Header />
      { renderRoutes(props.route.routes) }
      <Footer />
    </>
  )
}

export default BasicLayout
