import React from "react";
import { Layout as AntLayout } from "antd";
import Header from "../Header/Header";
import Sider from "../Sider/Sider";
import classes from "./layout.module.scss";

const { Content, Footer } = AntLayout;

export default function Layout() {
  return (
    <AntLayout className={classes.layout}>
      <Header/>
      <AntLayout>
        <Sider/>
        <AntLayout>
          <Content className={classes.mainContent}>
            <h1>Home page</h1>
          </Content>
          <Footer className={classes.footer}/>
        </AntLayout>
      </AntLayout>
    </AntLayout>
  );
}