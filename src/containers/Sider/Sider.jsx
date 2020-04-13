import React from "react";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined
} from "@ant-design/icons";
import classes from "./sider.module.scss";

const { Sider: AntSider } = Layout;

export default function Sider() {
  return (
    <AntSider className={classes.sider}>
      <div className={classes.logo}>
        CF LOGO
      </div>
      <Menu className={classes.sideMenu} theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">
          <UserOutlined/>
          <span>nav 1</span>
        </Menu.Item>
        <Menu.Item key="2">
          <VideoCameraOutlined/>
          <span>nav 2</span>
        </Menu.Item>
        <Menu.Item key="3">
          <UploadOutlined/>
          <span>nav 3</span>
        </Menu.Item>
      </Menu>
    </AntSider>
  );
}