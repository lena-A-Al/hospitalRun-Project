import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Col, Form, Input, Row, Typography } from 'antd';
import hospitalRun from '../../assets/images/hospital-run2.png';

export const Login = () => {
  return (
    <div
      style={{
        display: 'flex',
        margin: '100px',
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <Row>
        <Col span={24}>
          <img
            src={hospitalRun}
            alt="hospital-run-logo"
            className="logo-image"
          />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Form
            name="normal_login"
            className="login-form"
            // initialValues={{ remember: true }}
          >
            <Form.Item
              name="username"
              rules={[
                { required: true, message: 'Please input your Username!' },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: 'Please input your Password!' },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <a className="login-form-forgot" href="">
                Forgot password
              </a>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
              Or <a href="">register now!</a>
            </Form.Item>
          </Form>
        </Col>
      </Row>
      <Row style={{ paddingLeft: '40px' }}>
        <Col span={24}>
          <Typography.Text strong>
            Welcome to the Hospital Run Patient Portal! Access your personal
            health information, review your medical history, manage
            appointments, and stay connected with your healthcare provider, all
            in one secure place. Your health, your way.
          </Typography.Text>
        </Col>
      </Row>
    </div>
  );
};
