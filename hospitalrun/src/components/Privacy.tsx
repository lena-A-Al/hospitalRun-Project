import { gql, useLazyQuery, useQuery } from '@apollo/client';
import { Col, Row, Typography } from 'antd';

export const Privacy = () => {
  const GET_RANDOM_IMAGE = gql`
    query {
      randomNaturePicture
    }
  `;
  const { data, loading, error } = useQuery(GET_RANDOM_IMAGE);

  return (
    <Row style={{ margin: '40px', color: 'darkblue' }}>
      <Col span={24}>
        <Typography.Text strong style={{ color: 'darkblue' }}>
          At Hospital Run, your privacy is our priority. Your data is stored
          securely and is only accessible by you and authorized healthcare
          professionals. We comply with all applicable privacy laws and
          regulations to ensure your information remains confidential. For more
          details, please refer to our full Privacy Policy.
        </Typography.Text>
      </Col>
      <Col span={24}>
        <h1>Random Nature Picture</h1>
        <img
          src={data && data.randomNaturePicture}
          alt="Random Nature"
          style={{ width: '800px', height: '600px' }}
        />
      </Col>
    </Row>
  );
};
function useState(): [any, any] {
  throw new Error('Function not implemented.');
}
