import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as tvShowsActions from "../../redux/actions/tvShowsActions";
import SearchBox from "../../components/SearchBox";
import Card from "../../components/Card";
import { Container, Text } from "./style";
import { List } from "antd";
import _ from "lodash";
class Home extends Component {
  componentDidMount() {
    this.props.actions.getShows("Batman");
  }

  onClick(item) {
    this.props.actions.selectShow(item);
  }

  render() {
    {
      _.chunk(this.props.shows, 3);
    }
    return (
      <div>
        <Text>TV MAZE</Text>
        <SearchBox onSearch={value => this.props.actions.getShows(value)} />

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
          dataSource={this.props.shows}
          renderItem={item => (
            <Card
              key={item.show.url}
              image={item.show.image}
              name={item.show.name}
              onClick={() => this.onClick(item)}
            />
          )}
        />
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
