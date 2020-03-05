import React from "react";
import { List } from "antd";

function XList(props) {
  return (
    <List
      pagination={{
        defaultPageSize: 4,
        position: "both"
      }}
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 4,
        lg: 4,
        xl: 6,
        xxl: 3
      }}
      dataSource={props.dataSource}
      renderItem={props.renderItem}
    />
  );
}

export default XList;
