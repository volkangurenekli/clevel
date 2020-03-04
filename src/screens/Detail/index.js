import React, { Component } from "react";
import { connect } from "react-redux";
import Summary from "../../components/Summary";
class Detail extends Component {
  render() {
    return (
      <div>
        <Summary
          url={this.props.show.show.url}
          name={this.props.show.show.name}
          type={this.props.show.show.type}
          language={this.props.show.show.language}
          officialSite={this.props.show.show.officialSite}
          image={this.props.show.show.image}
          summary={this.props.show.show.summary}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    show: state.selectShowReducer
  };
}

export default connect(mapStateToProps)(Detail);
