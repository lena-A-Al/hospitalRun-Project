import { Button, Col, Form, Input, Modal, notification, Row } from 'antd';
import { useEffect, useState } from 'react';

export const PatientInfo = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [form] = Form.useForm();

  // load initial data from localstorage if available
  useEffect(() => {
    const savedData = localStorage.getItem('useFormData');
    if (savedData) {
      form.setFieldsValue(JSON.parse(savedData));
    }
  }, [form]);

  //handle form submission
  const onFinish = (values: any) => {
    localStorage.setItem('useFormData', JSON.stringify(values));

    //notify the user upon submission
    notification.success({
      message: 'Data Saved!',
      description: 'Your Data has been saved successfully',
    });
  };

  // Handle form cancel/reset
  const showCancelModal = () => {
    setIsModalVisible(true);
  };

  const handleCancelConfirm = () => {
    form.resetFields(); // Reset form fields to initial values without saving to localStorage
    notification.info({
      message: 'Form Reset',
      description: 'The form has been reset and changes were not saved.',
    });
    setIsModalVisible(false);
  };

  const handleCancelClose = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <Form
        layout="vertical"
        form={form}
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignContent: 'center',
          padding: '40px',
        }}
        onFinish={onFinish}
        initialValues={{
          firstName: '',
          lastName: '',
          age: '',
          email: '',
          race: '',
          gender: '',
        }}
      >
        <Form.Item
          rules={[{ required: true, message: 'Please enter your first name' }]}
          label="First Name:"
          name="firstName"
        >
          <Input placeholder="Enter your first name" />
        </Form.Item>
        <Form.Item
          rules={[{ required: true, message: 'Please enter your last name' }]}
          label="Last Name:"
          name="lastName"
        >
          <Input placeholder="Enter your last name" />
        </Form.Item>
        <Form.Item
          rules={[{ required: true, message: 'Please enter your age' }]}
          label="Age:"
          name="age"
        >
          <Input placeholder="Enter your age" />
        </Form.Item>
        <Form.Item
          rules={[{ required: true, message: 'Please enter your email' }]}
          label="Email:"
          name="email"
        >
          <Input placeholder="Enter your email" />
        </Form.Item>
        <Form.Item
          rules={[{ required: true, message: 'Please enter your race' }]}
          label="Race:"
          name="race"
        >
          <Input placeholder="Enter your race" />
        </Form.Item>
        <Form.Item
          rules={[{ required: true, message: 'Please enter your gender' }]}
          label="Gender:"
          name="gender"
        >
          <Input placeholder="Enter your gender" />
        </Form.Item>
        <div style={{ margin: '30px' }}>
          <Form.Item>
            <Button type="primary" shape="round" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              danger
              shape="round"
              onClick={showCancelModal}
            >
              Cancel
            </Button>
          </Form.Item>
        </div>
      </Form>
      <Modal
        title="Confirm Cancel"
        visible={isModalVisible}
        onOk={handleCancelConfirm}
        onCancel={handleCancelClose}
        okText="Yes, reset form"
        cancelText="No, go back"
      >
        <p>
          Are you sure you want to reset the form? Any unsaved changes will be
          lost.
        </p>
      </Modal>
    </div>
  );
};
