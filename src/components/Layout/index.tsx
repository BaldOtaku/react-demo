import React from 'react'
import { renderRoutes } from 'react-router-config'
import { Layout, Menu } from 'antd'
import CSS from 'csstype'
import './index.less'

const { Header, Footer, Content } = Layout;

const headerStyles: CSS.Properties = {
  display: 'flex',
  height: '50px',
  lineHeight: '50px',
  backgroundColor: '#fff'
}

const contentStyles: CSS.Properties = {
  minHeight: 'calc(100vh - 50px - 70px)'
}

const footerStyles: CSS.Properties = {
  textAlign: 'center',
  color: '#00000073',
  fontSize: '12px'
}

interface IProps {
  route?: any
}

const BasicLayout: React.FC<IProps> = (props) => {
  return (
    <>
      <Layout>
        <Header style={headerStyles}>
          <div className="logo">Hello React</div>
          <Menu mode="horizontal">
            <Menu.Item key="1">Navigation One</Menu.Item>
            <Menu.Item key="2">Navigation Two</Menu.Item>
            <Menu.Item key="3">Navigation Three</Menu.Item>
          </Menu>
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
