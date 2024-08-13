import { TeamOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu, theme } from "antd";
import React, { ReactNode, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { danhSachChucNang1 } from "./menuData";

const { Header, Content, Sider } = Layout;

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
  children?: ReactNode;
}

const DefaultLayout2: React.FC<DefaultLayoutProps> = () => {
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
            onClick={handleClick} // Sử dụng hàm handleClick ở đây
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

export default DefaultLayout2;
