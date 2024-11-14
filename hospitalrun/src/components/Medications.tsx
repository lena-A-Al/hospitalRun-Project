import { gql, useLazyQuery } from '@apollo/client';
import { Col, Input, Row, Select, Spin, Table, Typography } from 'antd';
import { useEffect, useState } from 'react';

const { Option } = Select;
export const Medications = () => {
  //local state
  const [medications, setMedications] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedMedication, setSelectedMedicatoion] = useState<
    string | undefined
  >(undefined);
  // Graphql Query
  // GraphQL Query
  const GET_MEDICATIONS_INFO = gql`
    query GetMedications($searchTerm: String) {
      medication(searchTerm: $searchTerm) {
        id
        genericName
        brandName
        indication
      }
    }
  `;

  const [
    get_medications,
    {
      data: getMedicationsRes,
      loading: getMedicationsLoading,
      error: getMedicationsError,
    },
  ] = useLazyQuery(GET_MEDICATIONS_INFO);

  // Fetch medications on component mount
  useEffect(() => {
    get_medications(); // Fetch all medications initially
  }, []);

  // Update medications when query result changes
  useEffect(() => {
    if (getMedicationsRes) {
      setMedications(
        getMedicationsRes.medication.map((med: any, index: number) => ({
          ...med,
          key: med.id || index,
        })),
      );
    }
  }, [getMedicationsRes]);

  const handleSearch = (value: string) => {
    get_medications({ variables: { searchTerm: value || null } });
  };

  const handleSelectChange = (value: string) => {
    setSelectedMedicatoion(value);
  };

  const renderMedicationsTable = () => {
    const columns: any[] = [
      {
        title: 'Generic Name',
        dataIndex: 'genericName',
        key: 'genericName',
        width: 700,
        sorter: false,
        render: (text: string) => (
          <Typography.Paragraph>{text}</Typography.Paragraph>
        ),
      },
      {
        title: 'Brand Name',
        dataIndex: 'brandName',
        width: 700,
        sorter: false,
        render: (text: string) => (
          <Typography.Paragraph>{text}</Typography.Paragraph>
        ),
      },
      {
        title: 'Indication',
        dataIndex: 'indication',
        key: 'indication',
        width: 700,
        sorter: false,
        render: (text: string) => (
          <Typography.Paragraph>{text}</Typography.Paragraph>
        ),
      },
    ];

    return (
      <>
        <Table
          size="large"
          columns={columns}
          dataSource={medications}
          loading={getMedicationsLoading}
          scroll={{ scrollToFirstRowOnChange: true }}
        />
      </>
    );
  };

  if (getMedicationsError) {
    return (
      <Typography.Text type="danger">
        Error loading medications: {getMedicationsError.message}
      </Typography.Text>
    );
  }

  return (
    <>
      <Row>
        <Col span={12} style={{ padding: '30px 10px' }}>
          {/* Search Functionality */}
          <Input.Search
            placeholder="Search any medication by generic name, brand name and indication"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm as the user types
            onSearch={handleSearch}
            allowClear
            size="large"
            enterButton="Search"
          />
        </Col>

        {/* Select a Medication From a List */}
        <Col style={{ padding: '30px 10px' }}>
          <Typography.Text strong style={{ paddingRight: '10px' }}>
            Select a Medication
          </Typography.Text>
          <Select
            placeholder="Search a Medication"
            onChange={handleSelectChange}
          >
            {medications.map((med: any) => (
              <Option key={med.id} value={med.brandName}>
                {med.brandName}
              </Option>
            ))}
          </Select>
        </Col>

        {/* Render Medications Table */}
        <Col>
          <Row style={{ width: '100%' }}>
            {getMedicationsLoading ? (
              <Spin>Loading Data</Spin>
            ) : (
              <Col span={24}>{renderMedicationsTable()}</Col>
            )}
          </Row>
        </Col>
      </Row>
    </>
  );
};
