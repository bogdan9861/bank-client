import React from "react";
import Header from "../header/Header";
import { Layout as AntdLayout } from "antd";

import "./Layout.scss";

type props = {
  children: React.ReactNode;
};

const Layout = ({ children }: props) => {
  return (
    <div className="main">
      <Header />
      <AntdLayout.Content style={{ height: "100%"}}>
        {children}
      </AntdLayout.Content>
    </div>
  );
};

export default Layout;
