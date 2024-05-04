import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import Sidenav from './Sidenav';
import logo from "../../assets/images/pngegg.png";
const { Header, Sider, Content } = Layout;

const Main = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout >
      <Sider width={310} breakpoint="lg"
        collapsedWidth="0" onBreakpoint={(broken) => {
          setCollapsed(true)
        }} trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical"  >
          <img src={logo} style={{ height: 40 }} />
          <span>Reporting System</span>
        </div>

        <Sidenav />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>

        <Content className="content-ant">{children}</Content>
      </Layout>
    </Layout>
  );
};

export default Main;