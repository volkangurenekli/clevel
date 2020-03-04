import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as tvShowsActions from "../../redux/actions/tvShowsActions";
import SearchBox from "../../components/SearchBox";
import Card from "../../components/Card";
import { Container } from "./style";
import { Link } from "react-router-dom";

class Home extends Component {
  onClick(item) {
    this.props.actions.selectShow(item);
    console.log(this.props.shows);
  }

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
              onClick={() => this.onClick(item)}
            />
          ))}
        </Container>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    shows: state.tvShowsReducer,
    show: state.selectShowReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getShows: bindActionCreators(tvShowsActions.getShows, dispatch),
      selectShow: bindActionCreators(tvShowsActions.selectShow, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
