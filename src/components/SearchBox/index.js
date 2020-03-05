import React from "react";
import { Input } from "antd";
const { Search } = Input;

function XSearchBox(props) {
  return (
    <Search
      placeholder="Search TV Shows"
      enterButton="Search"
      size="large"
      onSearch={props.onSearch}
    />
  );
}

export default XSearchBox;
