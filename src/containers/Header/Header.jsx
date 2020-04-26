import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Layout } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import appActions from "../../redux/app/actions";
import classes from "./header.module.scss";

const { Header: AntHeader } = Layout;

const { toggleCollapse } = appActions;

export default function Header() {
  const dispatch = useDispatch();
  const toggleHandler = () => dispatch(toggleCollapse());
  const { collapsed } = useSelector((state) => state.AppReducer);

  return (
    <AntHeader
      className={`${classes.headerWrapper} ${collapsed && classes.collapsed}`}
    >
      <div className={classes.btn}>
        {React.createElement(
          collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
          {
            onClick: toggleHandler,
          }
        )}
      </div>
    </AntHeader>
  );
}
