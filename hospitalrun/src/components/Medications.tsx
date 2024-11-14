import { gql, useLazyQuery } from '@apollo/client';
import { Col, Row, Spin, Table, Typography } from 'antd';
import { useEffect, useState } from 'react';

export const Medications = () => {
  //local state
  const [medications, setMedications] = useState<any>(undefined);
  // Graphql Query
  const GET_Medications_INFO = gql`
    query {
      medication {
        id
        genericName
        brandName
        indication
      }
    }
  `;

  console.log('medications', medications);
  const [
    get_medication_lazy_query,
    {
      data: getMedicationsRes,
      loading: getMedicationsLoading,
      error: getMedicationsError,
    },
  ] = useLazyQuery(GET_Medications_INFO);

  useEffect(() => {
    get_medication_lazy_query();
  }, []);

  useEffect(() => {
    if (getMedicationsRes) {
      setMedications(getMedicationsRes.medication);
    }
  }, [getMedicationsRes]);

  console.log('getMedicationsRes', getMedicationsRes);

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
  return (
    <>
      <Row style={{ width: '100%' }}>
        {getMedicationsLoading ? (
          <Spin>Loading Data</Spin>
        ) : (
          <Col span={24}>{renderMedicationsTable()}</Col>
        )}
      </Row>
    </>
  );
};
