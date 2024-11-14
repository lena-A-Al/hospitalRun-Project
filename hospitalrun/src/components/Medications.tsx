import { gql, useLazyQuery } from '@apollo/client';
import { Col, Input, Row, Spin, Table, Typography } from 'antd';
import { useEffect, useState } from 'react';

export const Medications = () => {
  //local state
  const [medications, setMedications] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
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

  // const handleInputChange = (event: any) => {
  //   setSearchTerm(event.target.value);
  // };

  const renderMedicationsTable = () => {
    const columns: any[] = [
      {
        title: 'Generic Name',
        dataIndex: 'genericName',
        key: 'genericName',
        width: 400,
        sorter: false,
        render: (text: string) => (
          <Typography.Paragraph>{text}</Typography.Paragraph>
        ),
      },
      {
        title: 'Brand Name',
        dataIndex: 'brandName',
        key: 'brandName',
        width: 400,
        sorter: false,
        render: (text: string) => (
          <Typography.Paragraph>{text}</Typography.Paragraph>
        ),
      },
      {
        title: 'Indication',
        dataIndex: 'indication',
        key: 'indication',
        width: 350,
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
