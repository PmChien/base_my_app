import { TeamOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu, theme } from "antd";
import React, { ReactNode, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}
const danhSachChucNang = JSON.parse(
  localStorage.getItem("danhSachChucNang") || "[]"
);
const danhSachChucNang1 = [
  {
    idChucNang: "XU-LY-KHAI-THAC",
    title: "Xử lý khai thác",
    key: "61",
    url: null,
    phanHe: "KHAITHAC_SOHOA",
    children: [
      {
        idChucNang: "TRA-CUU-KHAI-THAC-4",
        title: "Quản lý hồ sơ CMND 9 số",
        key: "162",
        url: "/quan-ly/hs-cmnd-9-so",
        phanHe: "KHAITHAC_SOHOA",
        children: [],
      },
      {
        idChucNang: "XU-LY-KHAI-THAC-9",
        title: "Phê duyệt hồ sơ CMND 9 số",
        key: "206",
        url: "/cap-nhat-thong-tin-ho-so-cmnd-9-so/phe-duyet",
        phanHe: "KHAITHAC_SOHOA",
        children: [],
      },
      {
        idChucNang: "LAP-DE-XUAT-DUYET",
        title: "Lập đề xuất duyệt hồ sơ CMND 9 số",
        key: "181",
        url: "/cap-nhat-thong-tin-ho-so-cmnd-9-so/lap-phieu-de-xuat-duyet",
        phanHe: "KHAITHAC_SOHOA",
        children: [],
      },
      {
        idChucNang: "XU-LY-XAC-MINH-NGHI-TRUNG-NHAN-THAN",
        title: "Xử lý xác minh nghi trùng thông tin công dân",
        key: "421",
        url: "/quan-ly/xu-ly-xac-minh-nghi-trung-nhan-than",
        phanHe: "KHAITHAC_SOHOA",
        children: [],
      },
      {
        idChucNang: "XU-LY-XAC-MINH-NGHI-TRUNG-DOI-TUONG",
        title: "Xử lý xác minh nghi trùng đối tượng",
        key: "165",
        url: "/quan-ly/xu-ly-xac-minh-nghi-trung-doi-tuong",
        phanHe: "KHAITHAC_SOHOA",
        children: [],
      },
      {
        idChucNang: "PHE-DUYET-NGHI-TRUNG-NHAN-THAN",
        title: "Phê duyệt kết quả xác minh thông tin công dân nghi trùng",
        key: "422",
        url: "/quan-ly/phe-duyet-nghi-trung-nhan-than",
        phanHe: "KHAITHAC_SOHOA",
        children: [],
      },
      {
        idChucNang: "PHE-DUYET-NGHI-TRUNG-DOI-TUONG",
        title: "Phê duyệt kết quả xác minh thông tin đối tượng nghi trùng",
        key: "423",
        url: "/quan-ly/phe-duyet-nghi-trung-doi-tuong",
        phanHe: "KHAITHAC_SOHOA",
        children: [],
      },
    ],
  },
  {
    idChucNang: "QUAN-LY-KHAI-THAC",
    title: "Quản lý cán bộ và phân quyền",
    key: "63",
    url: null,
    phanHe: "KHAITHAC_SOHOA",
    children: [
      {
        idChucNang: "KHAI-THAC-KHAI-BAO-CAN-BO",
        title: "Khai báo cán bộ",
        key: "62",
        url: "/phan-quyen/khai-bao-can-bo-dp",
        phanHe: "KHAITHAC_SOHOA",
        children: [],
      },
      {
        idChucNang: "QUAN-LY-KHAI-THAC-5",
        title: "Ký số ảnh tờ khai",
        key: "581",
        url: "/quan-ly/ky-so-anh",
        phanHe: "KHAITHAC_SOHOA",
        children: [],
      },
      {
        idChucNang: "PHE-DUYET-PHAN-QUYEN-CAN-BO",
        title: "Phê duyệt phân quyền dữ liệu",
        key: "86",
        url: "/phan-quyen/phe-duyet-can-bo-dp",
        phanHe: "KHAITHAC_SOHOA",
        children: [],
      },
      {
        idChucNang: "QUAN-LY-KHAI-THAC-6",
        title: "Ký số dữ liệu",
        key: "462",
        url: "/quan-ly/ky-so-du-lieu",
        phanHe: "KHAITHAC_SOHOA",
        children: [],
      },
      {
        idChucNang: "XU-LY-KHAI-THAC-8",
        title: "Quản lý yêu cầu khai thác hồ sơ CMND 9 số tại đơn vị khác",
        key: "209",
        url: "/quan-ly/yeu-cau-khai-thac-ho-so-cmnd-9-so-tai-don-vi-khac",
        phanHe: "KHAITHAC_SOHOA",
        children: [],
      },
      {
        idChucNang: "XU-LY-KHAI-THAC-7",
        title:
          "Phê duyệt yêu cầu khai thác thông tin của hồ sơ CMND 9 số tại địa phương",
        key: "204",
        url: "/quan-ly/phe-duyet-yeu-cau-khai-thac-ho-so-cmnd-9-so-tai-don-vi-khac",
        phanHe: "KHAITHAC_SOHOA",
        children: [],
      },
      {
        idChucNang: "XU-LY-KHAI-THAC-4",
        title:
          "Quản lý yêu cầu khai thác thông tin công dân hợp nhất với hồ sơ CMND 9 số",
        key: "201",
        url: "/quan-ly/yeu-cau-khai-thac-thong-tin-cong-dan-hop-nhat",
        phanHe: "KHAITHAC_SOHOA",
        children: [],
      },
      {
        idChucNang: "XU-LY-KHAI-THAC-5",
        title: "Phê duyệt yêu cầu khai thác thông tin công dân tại địa phương",
        key: "202",
        url: "/quan-ly/phe-duyet-yeu-cau-khai-thac-thong-tin-cong-dan-hop-nhat",
        phanHe: "KHAITHAC_SOHOA",
        children: [],
      },
      {
        idChucNang: "XU-LY-KHAI-THAC-19",
        title:
          "Quản lý yêu cầu khai thác thông tin đối tượng đã hợp nhất với hồ sơ CMND 9 số",
        key: "262",
        url: "/quan-ly/yeu-cau-khai-thac-thong-tin-doi-tuong-hop-nhat",
        phanHe: "KHAITHAC_SOHOA",
        children: [],
      },
      {
        idChucNang: "XU-LY-KHAI-THAC-11",
        title: "Phê duyệt yêu cầu khai thác thông tin đối tượng tại địa phương",
        key: "263",
        url: "/quan-ly/phe-duyet-yeu-cau-khai-thac-thong-tin-doi-tuong-hop-nhat",
        phanHe: "KHAITHAC_SOHOA",
        children: [],
      },
    ],
  },
  {
    idChucNang: "TRA-CUU-KHAI-THAC",
    title: "Tra cứu",
    key: "84",
    url: null,
    phanHe: "KHAITHAC_SOHOA",
    children: [
      {
        idChucNang: "TRA-CUU-KHAI-THAC-3",
        title: "Tra cứu hồ sơ CMND 9 số",
        key: "161",
        url: "/tra-cuu/hs-cmnd-9-so",
        phanHe: "KHAITHAC_SOHOA",
        children: [],
      },
      {
        idChucNang: "XU-LY-KHAI-THAC-10",
        title:
          "Theo dõi các yêu cầu khai thác dữ liệu thu nhận ở đơn vị khác tại địa phương",
        key: "210",
        url: "/thong-ke/theo-doi-yeu-cau-khai-thac-du-lieu",
        phanHe: "KHAITHAC_SOHOA",
        children: [],
      },
      {
        idChucNang: "TRA-CUU-KHAI-THAC-2",
        title: "Tra cứu hồ sơ sau hợp nhất với thông tin công dân",
        key: "123",
        url: "/tra-cuu/hs-hop-nhat-voi-tt-cd",
        phanHe: "KHAITHAC_SOHOA",
        children: [],
      },
      {
        idChucNang: "TRA-CUU-KHAI-THAC-1",
        title: "Tra cứu hồ sơ sau hợp nhất với thông tin đối tượng",
        key: "122",
        url: "/tra-cuu/hs-hop-nhat-voi-tt-dt",
        phanHe: "KHAITHAC_SOHOA",
        children: [],
      },
      {
        idChucNang: "BAO-CAO-KHAI-THAC-6",
        title: "Theo dõi yêu cầu phân quyền khai thác dữ liệu",
        key: "272",
        url: "/thong-ke/theo-doi-yeu-cau-phan-quyen-khai-thac-du-lieu",
        phanHe: "KHAITHAC_SOHOA",
        children: [],
      },
      {
        idChucNang: "MO-KHOA-BGHI-1",
        title: "Xử lý mở khóa bản ghi",
        key: "582",
        url: "/quan-ly/xu-ly-mo-khoa-ban-ghi-bi-khoa-boi-nguoi-khac",
        phanHe: "KHAITHAC_SOHOA",
        children: [],
      },
    ],
  },
  {
    idChucNang: "BAO-CAO-KHAI-THAC",
    title: "Báo cáo, thống kê",
    key: "85",
    url: null,
    phanHe: "KHAITHAC_SOHOA",
    children: [
      {
        idChucNang: "BAO-CAO-KHAI-THAC-1",
        title: "Thống kê số lượng hồ sơ CMND 9 số hợp nhất theo đơn vị",
        key: "270",
        url: "/thong-ke/hs-cmnd-9-so-hop-nhat-theo-don-vi",
        phanHe: "KHAITHAC_SOHOA",
        children: [],
      },
      {
        idChucNang: "BAO-CAO-KHAI-THAC-2",
        title: "Thống kê yêu cầu phân quyền khai thác dữ liệu",
        key: "271",
        url: "/thong-ke/thong-ke-yeu-cau-phan-quyen-khai-thac-du-lieu",
        phanHe: "KHAITHAC_SOHOA",
        children: [],
      },
      {
        idChucNang: "BAO-CAO-KHAI-THAC-3",
        title: "Thống kê số lượng yêu cầu khai thác dữ liệu theo đơn vị",
        key: "211",
        url: "/thong-ke/so-luong-yeu-cau-khai-thac-du-lieu",
        phanHe: "KHAITHAC_SOHOA",
        children: [],
      },
      {
        idChucNang: "BAO-CAO-KHAI-THAC-5",
        title:
          "Danh sách yêu cầu khai thác dữ liệu theo kết quả phê duyệt tại TW",
        key: "223",
        url: "/thong-ke/danh-sach-yeu-cau-khai-thac-du-lieu-tai-tw",
        phanHe: "KHAITHAC_SOHOA",
        children: [],
      },
    ],
  },
];

const items = danhSachChucNang1.map((item: any) =>
  getItem(
    item.title,
    item.url || item.key,
    <TeamOutlined />,
    item.children.map((child: any) =>
      getItem(child.title, child.url || child.key)
    )
  )
);

interface DefaultLayoutProps {
  children?: ReactNode; // Định nghĩa prop children
}
const DefaultLayout: React.FC<DefaultLayoutProps> = () => {
  const [collapsed, setCollapsed] = useState(true);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate();
  const handleClick = (e: any) => {
    // Sử dụng e.key để lấy key của mục menu đã được click
    if (e.key) {
      //   console.log(e, "e");

      navigate(e.key); // Điều hướng đến URL tương ứng
    }
  };
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ padding: 0, background: colorBgContainer }}>
        Đây là header
      </Header>
      <Layout>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          theme="light"
        >
          <Menu
            theme="light"
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={items}
            onClick={handleClick}
          />
        </Sider>

        <Content style={{ margin: "0 16px" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              margin: "16px 0",
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DefaultLayout;