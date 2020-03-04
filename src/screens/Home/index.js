import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as tvShowsActions from "../../redux/actions/tvShowsActions";
import SearchBox from "../../components/SearchBox";
import Card from "../../components/Card";
import { Container } from "./style";
class Home extends Component {
  onClick = () => {
    console.log("click");
  };

  render() {
    return (
      <div>
        <SearchBox onSearch={value => this.props.actions.getShows(value)} />
        <Container>
          {this.props.shows.map(item => (
            <Card
              key={item.show.url}
              image={item.show.image}
              name={item.show.name}
              onClick={this.onClick}
            />
          ))}
        </Container>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    shows: state.tvShowsReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getShows: bindActionCreators(tvShowsActions.getShows, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
