import { Col, Row, Typography } from 'antd';
import hospitalRun from '../../../assets/images/hospital-run2.png';

export const AppFooter = () => {
  return (
    <>
      <Row>
        <Row style={{ width: '80%', display: 'flex', height: '100%' }}>
          <Col style={{ flexGrow: 1 }} span={12}>
            <img
              src={hospitalRun}
              alt="logo"
              style={{ width: '10%', borderRadius: '50%', margin: '0 5px 0' }}
            />
          </Col>
          <Col span={12}>
            <ul style={{ listStyleType: 'none' }}>
              <li>
                <a
                  target="_blank"
                  style={{ textDecoration: 'none', color: '#0072c3' }}
                  href="https://www.ncbi.nlm.nih.gov/books/NBK538279/"
                >
                  Patients's rights
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  style={{ textDecoration: 'none', color: '#0072c3' }}
                  href="https://www.hhs.gov/hipaa/for-individuals/notice-privacy-practices/index.html"
                >
                  Notice of Privacy Practices
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row style={{ display: 'flex', alignItems: 'center' }}>
          <Col style={{ textAlign: 'center' }}>
            <Typography.Paragraph italic>
              Welcome to the Hospital Run Patient Portal! Access your personal
              health information, review your medical history, manage
              appointments, and stay connected with your healthcare provider,
              all in one secure place. Your health, your way.
            </Typography.Paragraph>
          </Col>
          <Col style={{ margin: '0 auto' }}>
            <Typography.Text>©{'2024'} Hospital Run Center</Typography.Text>
          </Col>
        </Row>
      </Row>
    </>
  );
};
