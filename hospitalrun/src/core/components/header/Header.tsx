import { Col, Menu, Row } from 'antd';
import hospitalRun from '../../../assets/images/hospital-run2.png';
import { appPathNames } from '../../../common/utils/NavUtil';
import { Link, useLocation } from 'react-router-dom';

interface AppHeaderMenuItem {
  key: string;
  label: string;
  order: number;
}
export const AppHeader = () => {
  //Hooks
  const location = useLocation();
  // constants
  const menuItems: AppHeaderMenuItem[] = [
    { key: appPathNames.home, label: 'Home', order: 0 },
    {
      key: appPathNames.patientInformation,
      label: 'Patient Information',
      order: 1,
    },
    {
      key: appPathNames.primaryCareDoctor,
      label: 'Primary Care Doctor',
      order: 2,
    },
    {
      key: appPathNames.medicalInformation,
      label: 'Medical Information',
      order: 3,
    },
    {
      key: appPathNames.medications,
      label: 'Medications',
      order: 4,
    },
    {
      key: appPathNames.appointments,
      label: 'Appointments',
      order: 5,
    },
    {
      key: appPathNames.privacy,
      label: 'Privacy',
      order: 5,
    },
  ];
  return (
    <>
      <Row>
        {/* App Logo/Name */}
        <Col
          span={2}
          style={{
            // padding:"10px 30px",
            width: '55%',
          }}
        >
          <img
            src={hospitalRun}
            alt="logo"
            style={{
              width: '50px',
              borderRadius: '50%',
              margin: '0 5px 0',
              justifyContent: 'center',
            }}
          />
        </Col>
        {/* Menu Items */}
        <Col span={22}>
          <Menu
            selectedKeys={[location.pathname]}
            mode="vertical"
            style={{
              fontSize: '16px',
              display: 'flex',
              justifyContent: 'space-between',
            }}
            items={menuItems.map((i: AppHeaderMenuItem) => ({
              key: i.key,
              label: (
                <Link to={i.key} key={i.label}>
                  {i.label}
                </Link>
              ),
            }))}
          />
        </Col>
      </Row>
    </>
  );
};
