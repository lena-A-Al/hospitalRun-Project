import { gql, useLazyQuery, useQuery } from '@apollo/client';
import { Col, Row, Typography } from 'antd';

export const Privacy = () => {
  return (
    <Row
      style={{
        display: 'flex', // Enable flexbox
        flexDirection: 'row', // Arrange items in a column
        justifyContent: 'center', // Center vertically
        alignItems: 'center', // Center horizontally
        textAlign: 'center', // Align text in the center
      }}
    >
      <Col span={24} style={{ padding: '30px 0' }}>
        <Typography.Text strong style={{ fontSize: '18px' }}>
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
function useState(): [any, any] {
  throw new Error('Function not implemented.');
}
