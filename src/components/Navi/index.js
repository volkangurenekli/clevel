import React, { Component } from "react";
import { Layout, Menu } from "antd";
import Background from "./logo.png";

const { Header } = Layout;
export default class Navi extends Component {
  render() {
    return (
      <Header>
        <img
          src={Background}
          style={{
            width: "120px",
            height: "31px",

            margin: "16px 24px 16px 0",
            float: "left"
          }}
        />
        <Menu mode="horizontal" theme="dark" style={{ lineHeight: "64px" }} />
      </Header>
    );
  }
}
