import React, { Component } from "react";

export default class XFooter extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "#3C948B",
          margin: "150px 0px 0px 0px"
        }}
      >
        <h3
          style={{
            zIndex: "0",
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            padding: "1rem",
            color: "#001529"
          }}
        >
          This website was made by Volkan Gürenekli using ReactJs
        </h3>
      </div>
    );
  }
}
