import { gql, useLazyQuery, useQuery } from '@apollo/client';
import { Col, Row, Typography } from 'antd';
import { useEffect } from 'react';

export const HealingImage = () => {
  const GET_RANDOM_IMAGE = gql`
    query {
      randomNaturePicture
    }
  `;
  // const { data, loading, error }] = useQuery(GET_RANDOM_IMAGE);
  const [getRandomImages, { data, loading, error }] =
    useLazyQuery(GET_RANDOM_IMAGE);

  useEffect(() => {
    getRandomImages();
  }, [getRandomImages]);
  return (
    <>
      <Row
        style={{
          display: 'flex', // Enable flexbox
          flexDirection: 'row', // Arrange items in a column
          justifyContent: 'center', // Center vertically
          alignItems: 'center', // Center horizontally
          textAlign: 'center', // Align text in the center
        }}
      >
        <Col span={24} style={{ padding: '10px 0' }}>
          <Typography.Text strong style={{ fontSize: '20px' }}>
            A Window to Serenity: Healing Through Visual Beauty
          </Typography.Text>
        </Col>
        <Col span={24} style={{ padding: '10px 0' }}>
          <Typography.Paragraph style={{ fontSize: '18px' }}>
            Research shows that viewing soothing images, especially those of
            nature or calming scenes, can have a profound effect on the brain.
            It reduces stress, lowers blood pressure, and fosters relaxation,
            creating a sense of peace and well-being. These visuals not only
            provide a mental escape but also activate parts of the brain
            associated with positive emotions, helping to rejuvenate both mind
            and body. Take a moment to immerse yourself in these therapeutic
            visuals and let your worries drift away
          </Typography.Paragraph>
        </Col>
        <Col span={24} style={{ padding: '10px 0' }}>
          <img
            src={data && data.randomNaturePicture}
            alt="Random Nature"
            style={{ width: '800px' }}
          />
        </Col>
      </Row>
    </>
  );
};
