import React, { useEffect } from "react";
import { Layout as AntLayout } from "antd";
import { useDispatch } from "react-redux";
import appActions from "../../redux/app/actions";
import useWindowSize from "../../hooks/useWindowSize";
import Header from "../Header/Header";
import Sider from "../Sider/Sider";
import classes from "./layout.module.scss";

const { Content, Footer } = AntLayout;

const { toggleOnWindowSizeChange } = appActions;

export default function Layout() {
  const [{ width }] = useWindowSize();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toggleOnWindowSizeChange({ width }));
  }, [width]);

  return (
    <AntLayout className={classes.layout}>
      <Header />
      <AntLayout>
        <Sider />
        <AntLayout>
          <Content className={classes.mainContent}>
            <h1>Home page</h1>
          </Content>
          <Footer className={classes.footer} />
        </AntLayout>
      </AntLayout>
    </AntLayout>
  );
}
