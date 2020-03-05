import React, { Component } from "react";
import Result from "../../components/Result";
export default class NotFound extends Component {
  render() {
    return (
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        onClick={() => this.props.history.push("/")}
      />
    );
  }
}
