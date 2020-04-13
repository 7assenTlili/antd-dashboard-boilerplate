import React from "react";
import { Layout } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import classes from "./header.module.scss";

const { Header: AntHeader } = Layout;

export default function Header() {
  return (
    <AntHeader className={classes.headerWrapper}>
      <div className={classes.btn}>
        <MenuUnfoldOutlined/>
      </div>
    </AntHeader>
  );
}