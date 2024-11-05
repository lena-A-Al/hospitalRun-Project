import { Col, Row, Typography } from 'antd';

export const Privacy = () => {
  return (
    <Row style={{ margin: '40px', color: 'darkblue' }}>
      <Col>
        <Typography.Text strong style={{ color: 'darkblue' }}>
          At Hospital Run, your privacy is our priority. Your data is stored
          securely and is only accessible by you and authorized healthcare
          professionals. We comply with all applicable privacy laws and
          regulations to ensure your information remains confidential. For more
          details, please refer to our full Privacy Policy.
        </Typography.Text>
      </Col>
    </Row>
  );
};
