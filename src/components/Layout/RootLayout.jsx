import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Breadcrumb, Image, Layout, Menu } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout.js";

import background from "../../assets/images/dashboard-background.jpg";
import HeaderLayout from "./HeaderLayout.jsx";
import FooterLayout from "./FooterLayout.jsx";

function RootLayout(props) {
  const [selectedKeys, setSelectedKeys] = useState([]);
  const menu = { selectedKeys, setSelectedKeys };

  return (
    <Layout
      className="layout"
      style={{ backgroundImage: `url(${background})` }}
    >
      <HeaderLayout {...menu} />
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        {/*<Breadcrumb*/}
        {/*  style={{*/}
        {/*    margin: "16px 0",*/}
        {/*  }}*/}
        {/*>*/}
        {/*  <Breadcrumb.Item>Home</Breadcrumb.Item>*/}
        {/*  <Breadcrumb.Item>List</Breadcrumb.Item>*/}
        {/*  <Breadcrumb.Item>App</Breadcrumb.Item>*/}
        {/*</Breadcrumb>*/}
        <div className="site-layout-content">
          <Outlet context={menu} />
        </div>
      </Content>
      <FooterLayout />
    </Layout>
  );
}

export default RootLayout;
