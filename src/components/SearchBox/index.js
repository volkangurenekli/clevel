import React from "react";
import { Input } from "antd";
const { Search } = Input;

function SearchBox(props) {
  return (
    <Search
      placeholder="Search TV Shows"
      enterButton="Search"
      size="large"
      onSearch={props.onSearch}
      style={{ padding: "0px 100px 0px 100px" }}
    />
  );
}

export default SearchBox;
