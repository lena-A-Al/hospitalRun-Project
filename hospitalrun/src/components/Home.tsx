import { Card, Col, Row, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { appPathNames } from '../common/utils/NavUtil';

export const Home = () => {
  const tiles = [
    {
      title: 'Patient Information',
      des: 'View and update personal details.',
      disabled: false,
      url: `${appPathNames.patientInformation}`,
    },
    {
      title: 'Primary Care Doctor',
      des: 'Contact info for your main doctor',
      disabled: false,
      url: `${appPathNames.primaryCareDoctor}`,
    },
    {
      title: 'Medical Information',
      des: 'Summary of medical history',
      disabled: false,
      url: `${appPathNames.medicalInformation}`,
    },
    {
      title: 'Medications',
      des: 'List of current and past prescriptions',
      disabled: false,
      url: `${appPathNames.medicalInformation}`,
    },
    {
      title: 'Appointments',
      des: 'View, schedule, or manage appointments',
      disabled: false,
      url: `${appPathNames.appointments}`,
    },
  ];
  return (
    <Row gutter={[0, 30]}>
      <Col style={{ width: '100%', textAlign: 'center' }}>
        <Typography.Title level={1} italic>
          Hospital Run
        </Typography.Title>
        <Typography.Paragraph style={{ fontSize: 22 }}>
          A patient portal is a secure online platform that allows patients to
          review their personal information, medical history, and the name of
          their primary care doctor. It provides easy access to essential health
          details, helping patients stay informed and organized.
        </Typography.Paragraph>
      </Col>

      <Col span={24}>
        <Row justify={'center'} align="middle">
          {tiles.map((app, i) => {
            return (
              <Link to={app.url} key={app.title}>
                <Card
                  hoverable={true}
                  style={{
                    width: 450,
                    //   minHeight: 235,
                    textAlign: 'center',
                    margin: 4,
                  }}
                >
                  <Card.Meta
                    title={app.title}
                    description={app.des}
                    style={{ fontSize: 16 }}
                  />
                </Card>
              </Link>
            );
          })}
        </Row>
      </Col>
    </Row>
  );
};
