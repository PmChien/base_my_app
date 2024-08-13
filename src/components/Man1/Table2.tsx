import React, { useState } from "react";
import { Button, Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import "./style.css";
import {
  SortAscendingOutlined,
  SortDescendingOutlined,
} from "@ant-design/icons";
import { data } from "./dataTest";
interface DataType {
  key: React.Key;
  name: string;
  chinese: number;
  math: number;
  english: number;
}
const Table2 = () => {
  const pagination = {
    page: 1,
    size: 10,
  };
  const columns: TableColumnsType<DataType> = [
    // {
    //   title: "STT",
    //   key: "index",
    //   // width: 60,
    //   align: "center",
    //   render: (value, item, index) =>
    //     (pagination.page - 1) * pagination.size + index + 1, // Sửa lại render
    // },
    {
      title: "Name",
      // title: () => (
      //   // <span>
      //   //   Name
      //   //   <SortAscendingOutlined style={{ marginLeft: 38 }} />
      //   // </span>
      //   <div style={{ display: "flex" }}>
      //     {/* Index */}
      //     Tên
      //     {/* <div style={{ marginLeft: "30px" }}>
      //       <SortAscendingOutlined />
      //     </div> */}
      //     {/* <Button
      //       // type="primary"
      //       icon={<SortAscendingOutlined />}
      //       size="small"
      //       style={{ marginLeft: 38 }}
      //       onClick={() => {
      //         console.log(12312);
      //       }}
      //     /> */}
      //   </div>
      // ),
      dataIndex: "name",
      key: "name",
      // width: "100%",
      render: (text: string, record: any, index: number) => <div>{text}</div>,
      // width: "fit-content",
    },
    {
      title: "Chinese Score",
      dataIndex: "chinese",
      width: "fit-content",
    },
    {
      title: "Math Score",
      dataIndex: "math",
    },
    {
      title: "English Score",
      dataIndex: "english",
    },
    {
      title: "English Score",
      dataIndex: "english",
    },
    {
      title: "English Score",
      dataIndex: "english",
    },
    {
      title: "English Score",
      dataIndex: "english",
    },
    {
      title: "English Score",
      dataIndex: "english",
    },
  ];

  const [selectedRowKey, setSelectedRowKey] = useState(null);

  const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <>
      <h2 className="thongtinHs" style={{ display: "flex" }}>
        Thông tin hồ sơ
      </h2>{" "}
      {/* Tiêu đề của bảng */}
      <Table
        columns={columns}
        dataSource={data}
        onChange={onChange}
        bordered={true}
        scroll={{ x: "max-content", y: 300 }}
        // onScroll={{x:"max-content"}}
        pagination={{
          defaultCurrent: 1,
          defaultPageSize: 30,
          total: 100,
          showTotal: (total, range) => {
            console.log(total, "total");
            console.log(range, "range");
            return (
              <div>
                <span style={{ left: "40%", position: "absolute" }}>
                  Hiển thị {range[0]}-{range[1]} trong {total}
                </span>
              </div>
            );
          },
          locale: { items_per_page: "/trang" },
          pageSizeOptions: [10, 20, 30, 50, 100, 200, 300],
          onChange(page, pageSize) {
            console.log(page, "page hiện tại");
            console.log(pageSize, "size hiện tại");
          },
        }}
        rowClassName={(record: any) =>
          record.key === selectedRowKey ? "selected-row" : ""
        }
        onRow={(record: any) => ({
          onClick: () => {
            setSelectedRowKey(record?.key);
            console.log(123);
          },
        })}
        rowHoverable={false}
        onHeaderRow={() => ({
          onClick: (e) => console.log(e, "e"),
        })}
      />
    </>
  );
};

export default Table2;
