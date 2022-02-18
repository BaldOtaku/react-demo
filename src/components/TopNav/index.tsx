import { Link } from 'react-router-dom'
import { Menu } from 'antd'
import { NavItem } from '@/routes'

const { SubMenu } = Menu

interface Props {
  data: NavItem[]
}

const TopNav: React.FC<Props> = ({ data }) => {
  function renderData (list: NavItem[]) {
    return list.map(item => {
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.path}>
            {renderData(item.children)}
          </SubMenu>
        )
      }
      return (
        <Menu.Item key={item.path}>
          <Link to={item.path!}>
            <span>{item.title}</span>
          </Link>
        </Menu.Item>
      )
    })
  }
  return (
    <Menu mode="horizontal">
      {renderData(data)}
    </Menu>
  )
}

export default TopNav
