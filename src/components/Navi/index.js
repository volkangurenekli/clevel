import React, { Component } from "react";
import { Layout, Menu } from "antd";
import Background from "./logo.png";

const { Header } = Layout;
export default class Navi extends Component {
  render() {
    return (
      <Header>
        <a href="/">
          <img
            src={Background}
            alt="logo"
            style={{
              width: "120px",
              height: "30px",
              margin: "16px 24px 16px 0",
              float: "left"
            }}
          />
        </a>

        <Menu mode="horizontal" theme="dark" style={{ lineHeight: "64px" }} />
      </Header>
    );
  }
}
