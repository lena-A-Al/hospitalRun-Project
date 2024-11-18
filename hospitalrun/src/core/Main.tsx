import { Col, ConfigProvider, Layout, Row } from 'antd';
import { AppHeader } from './components/header/Header';

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
      </Layout>
    </ConfigProvider>
  );
};
