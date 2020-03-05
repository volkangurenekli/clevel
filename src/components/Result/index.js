import React from "react";
import { Result, Button } from "antd";

function XResult(props) {
  return (
    <Result
      status={props.status}
      title={props.title}
      subTitle={props.subTitle}
      extra={
        <Button onClick={props.onClick} type="primary" key="button">
          Home Page
        </Button>
      }
    />
  );
}

export default XResult;
