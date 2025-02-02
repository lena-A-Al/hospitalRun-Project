import { Card, Col, Row, Space, Spin, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { appPathNames } from '../common/utils/NavUtil';
import { AppFooter } from '../core/components/footer/Footer';
import { gql, useQuery } from '@apollo/client';

export const Home = () => {
  const GET_CURRENT_DATE = gql`
    query {
      currentDate
    }
  `;

  const GET_WEATHER_IN_NYC = gql`
    query {
      weatherInNYC
    }
  `;

  const {
    data: currentDateRes,
    loading: currentDateLoading,
    error: currentDateError,
  } = useQuery(GET_CURRENT_DATE);

  console.log('currentDateRes', currentDateRes);
  const {
    data: getWeatherInNYCRes,
    loading: getWeatherLoading,
    error,
  } = useQuery(GET_WEATHER_IN_NYC);

  const tiles = [
    // {
    //   title: 'Patient Information',
    //   des: 'View and update personal details.',
    //   disabled: false,
    //   url: `${appPathNames.patientInformation}`,
    // },
    // {
    //   title: 'Primary Care Doctor',
    //   des: 'Contact info for your main doctor',
    //   disabled: false,
    //   url: `${appPathNames.primaryCareDoctor}`,
    // },
    // {
    //   title: 'Medical Information',
    //   des: 'Summary of medical history',
    //   disabled: false,
    //   url: `${appPathNames.medicalInformation}`,
    // },
    {
      title: 'Medications',
      des: 'View a list of the most common medications along with their uses and essential details',
      disabled: false,
      url: `${appPathNames.medications}`,
    },
    // {
    //   title: 'Appointments',
    //   des: 'View, schedule, or manage appointments',
    //   disabled: false,
    //   url: `${appPathNames.appointments}`,
    // },
    {
      title: 'Privacy',
      des: 'Learn about how your data is securely stored and protected to ensure your privacy.',
      disabled: false,
      url: `${appPathNames.privacy}`,
    },
    {
      title: 'Healing Image',
      des: 'Discover a random therapeutic image accompanied by a healthy tip to promote well-being.',
      disabled: false,
      url: `${appPathNames.healingImage}`,
    },
  ];

  console.log('getWeatherInNYCRes', getWeatherInNYCRes);

  return (
    <div className="page-container">
      {/* Main Content */}
      <div className="content-wrap">
        <Row gutter={[0, 30]}>
          <Row style={{ padding: '20px' }}>
            <Row style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Col>
                <Typography.Text
                  strong
                  style={{ fontSize: '20px', backgroundColor: 'lightcoral' }}
                >
                  Current Date:
                </Typography.Text>
              </Col>
              {currentDateLoading ? (
                <Space size="middle">
                  <Spin size="large" />
                </Space>
              ) : (
                <Col span={16}>
                  <Typography.Text
                    strong
                    style={{ color: 'darkgoldenrod', fontSize: '20px' }}
                  >
                    {currentDateRes && currentDateRes.currentDate}
                  </Typography.Text>
                </Col>
              )}
            </Row>
            <Row>
              <Col>
                <Typography.Text
                  strong
                  style={{ fontSize: '20px', backgroundColor: 'lightcoral' }}
                >
                  Current Weather in New York:
                </Typography.Text>
              </Col>
              {getWeatherLoading ? (
                <Col span={16}>
                  <Typography.Text
                    strong
                    style={{ color: 'darkblue', fontSize: '20px' }}
                  >
                    {getWeatherInNYCRes && getWeatherInNYCRes.weatherInNYC}
                  </Typography.Text>
                </Col>
              ) : (
                <Col span={16}>
                  <Typography.Text
                    strong
                    style={{ color: 'darkblue', fontSize: '20px' }}
                  >
                    {getWeatherInNYCRes && getWeatherInNYCRes.weatherInNYC}
                  </Typography.Text>
                </Col>
              )}
            </Row>
          </Row>
          <Col style={{ width: '100%', textAlign: 'center' }}>
            <Typography.Title level={1} italic>
              Hospital Run
            </Typography.Title>
            <Typography.Paragraph style={{ fontSize: 22 }}>
              A patient portal is a secure online platform that allows patients
              to review their personal information, medical history, and the
              name of their primary care doctor. It provides easy access to
              essential health details, helping patients stay informed and
              organized.
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
      </div>
      {/* Footer */}
      <AppFooter />
    </div>
  );
};
