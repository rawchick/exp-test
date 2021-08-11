import { Layout, Menu } from 'antd'
import { Link } from 'react-router-dom'
import { UserOutlined, HomeOutlined, BarChartOutlined, WindowsOutlined } from '@ant-design/icons'

export const Nav = () => {
    return (
        <Layout.Sider style={{ height: '100vh', overflow: 'auto', left: 0 }}>
            <Menu theme='dark' defaultSelectedKeys={['1']}>
                <Link to='/'>
                    <Menu.Item key="1" icon={<HomeOutlined />}>
                        {`Dashboard`}
                    </Menu.Item>
                </Link>
                <Link to='/user'>
                    <Menu.Item key="2" icon={<UserOutlined />}>
                        {`User`}
                    </Menu.Item>
                </Link>
                <Link to='/todo'>
                    <Menu.Item key="3" icon={<WindowsOutlined />}>
                        {`Todo`}
                    </Menu.Item>
                </Link>
                <Link to='chart'>
                    <Menu.Item key="4" icon={<BarChartOutlined />}>
                        {'Chart'}
                    </Menu.Item>
                </Link>
            </Menu>
        </Layout.Sider>
    )
}