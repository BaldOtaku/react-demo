import React from 'react'
import { Link } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Layout } from 'antd'
import TopNav from '../TopNav'
import { navTree } from '@/routes'
import './index.less'

const { Header, Footer, Content } = Layout

const headerStyles: React.CSSProperties = {
  display: 'flex',
  backgroundColor: '#fff'
}

const contentStyles: React.CSSProperties = {
  minHeight: 'calc(100vh - 64px - 70px)',
  padding: '30px 50px'
}

const footerStyles: React.CSSProperties = {
  textAlign: 'center',
  color: '#999',
  fontSize: '12px',
  height: '70px'
}

interface Props {
  route?: any
}

const BasicLayout: React.FC<Props> = (props) => {
  return (
    <>
      <Layout>
        <Header style={headerStyles}>
          <Link to="/" className="logo">摸鱼</Link>
          <TopNav data={navTree} />
        </Header>
        <Content style={contentStyles}>
          {renderRoutes(props.route.routes)}
        </Content>
        <Footer style={footerStyles}>&copy; 今天的风儿甚是喧</Footer>
      </Layout>
    </>
  )
}

export default BasicLayout
