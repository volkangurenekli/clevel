import React, { Component } from "react";
import { connect } from "react-redux";
import Summary from "../../components/Summary";
import Result from "../../components/Result";
class Detail extends Component {
  render() {
    return (
      <div>{this.props.show.show ? this.renderShow() : this.renderEmpty()}</div>
    );
  }

  renderEmpty() {
    return (
      <Result
        status="warning"
        title="There are some problems with your operation"
        subTitle="You must choose a TV show "
        onClick={() => this.props.history.push("/")}
      />
    );
  }

  renderShow() {
    return (
      <Summary
        url={this.props.show.show.url}
        name={this.props.show.show.name}
        type={this.props.show.show.type}
        language={this.props.show.show.language}
        officialSite={this.props.show.show.officialSite}
        image={this.props.show.show.image}
        summary={this.props.show.show.summary}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    show: state.selectShowReducer
  };
}

export default connect(mapStateToProps)(Detail);
