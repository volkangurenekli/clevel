import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as tvShowsActions from "../../redux/actions/tvShowsActions";
import XSearchBox from "../../components/SearchBox";
import XCard from "../../components/Card";
import { XText } from "./style";
import XList from "../../components/List";
import { Layout } from "antd";
class Home extends Component {
  componentDidMount() {
    this.props.actions.getShows("Batman");
  }

  onClick(item) {
    this.props.actions.selectShow(item);
  }

  render() {
    return (
      <Layout>
        <XText>TV MAZE</XText>
        <XSearchBox onSearch={value => this.props.actions.getShows(value)} />
        <XList
          dataSource={this.props.shows}
          renderItem={item => (
            <XCard
              key={item.show.url}
              image={item.show.image}
              name={item.show.name}
              onClick={() => this.onClick(item)}
            />
          )}
        />
      </Layout>
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
