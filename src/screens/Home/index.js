import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as tvShowsActions from "../../redux/actions/tvShowsActions";
import SearchBox from "../../components/SearchBox";
import Card from "../../components/Card";
import { Container, Text } from "./style";

class Home extends Component {
  componentDidMount() {
    this.props.actions.getShows("Batman");
  }

  onClick(item) {
    this.props.actions.selectShow(item);
  }

  render() {
    return (
      <div>
        <Text>TV MAZE</Text>
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
