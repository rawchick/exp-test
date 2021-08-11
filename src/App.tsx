import './App.css'
import 'antd/dist/antd.css'
import { Col, Layout, Row, Avatar } from 'antd'
import { Router } from './Route'
import { BellOutlined, LogoutOutlined } from '@ant-design/icons'

function App() {
  const { Header, Footer } = Layout
  return (
    <Layout className="App">
      <Header style={{ backgroundColor: 'turquoise' }}>
        <Row>
          <Col style={{ textAlign: 'left', display: 'inline' }} span={12}>
            <Avatar src='https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png'></Avatar>
          </Col>
          <Col style={{ textAlign: 'right' }} span={12}>
            <BellOutlined style={{ padding: 5 }} />
            <LogoutOutlined style={{ padding: 5 }} />
          </Col>
        </Row>
      </Header>
      <Layout>
        <Router />
      </Layout>
      <Footer style={{ backgroundColor: 'tomato' }}>
        {`Footer`}
      </Footer>
    </Layout>
  );
}

export default App;
