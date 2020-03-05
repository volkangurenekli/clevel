import React, { Component } from "react";
import XResult from "../../components/Result";
export default class NotFound extends Component {
  render() {
    return (
      <XResult
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        onClick={() => this.props.history.push("/")}
      />
    );
  }
}
