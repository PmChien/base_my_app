import React, { useState } from "react";
import { Space, Table, Tag } from "antd";
import type { TableProps } from "antd";

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

const TableComponents: React.FC = () => {
  const [selectedRowKey, setSelectedRowKey] = useState(null);
  return (
    <Table
      columns={columns}
      dataSource={data}
      scroll={{ x: 1500, y: 300 }}
      pagination={{
        defaultCurrent: 1,
        defaultPageSize: 30,
        total: 100,
        showTotal: (total) => `Total ${total} items`,
        pageSizeOptions: [10, 20, 30, 50, 100, 200, 300],
        onChange(page, pageSize) {
          console.log(page, "page hiện tại");
          console.log(pageSize, "size hiện tại");
        },
      }}
      bordered={true}
      rowSelection={{
        onChange: (selectedRowKeys: any, selectedRows: any) => {
          console.log(selectedRowKeys, "selectedRowKeys");
          console.log(selectedRows, "selectedRows");
        },
      }}
      rowClassName={(record: any) =>
        record.key === selectedRowKey ? "selected-row" : ""
      }
      onRow={(record: any) => ({
        onClick: () => setSelectedRowKey(record?.key),
      })}
    />
  );
};

export default TableComponents;
