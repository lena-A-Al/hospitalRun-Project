import { Col, ConfigProvider, Layout, Row, Typography } from 'antd';
import { Login } from '../components/Login';
import { AppHeader } from './components/header/Header';
import { AppFooter } from './components/footer/Footer';
import { Home } from '../components/Home';
import { Outlet } from 'react-router-dom';

export const Main = () => {
  return (
    <ConfigProvider componentSize={'large'}>
      <Layout style={{ height: '100%' }}>
        {/* App Header */}
        <Layout.Header style={{ backgroundColor: 'white' }}>
          <AppHeader />
        </Layout.Header>
        {/* App Content */}
        <Layout.Content>
          <Row>
            <Col>
              <Outlet /> {/* Render the nested route components here */}
            </Col>
          </Row>
        </Layout.Content>
        {/* App Footer */}
        <Layout.Footer className="app-footer">
          <AppFooter />
        </Layout.Footer>
      </Layout>
    </ConfigProvider>
  );
};
