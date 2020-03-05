import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./screens/Home";
import Detail from "./screens/Detail";
import NotFound from "./screens/NotFound";
import Navi from "./components/Navi";
import XFooter from "./components/Footer";
import { Layout } from "antd";
import { Row, Col } from "antd";
const { Content } = Layout;
function App() {
  return (
    <div>
      <Navi />

      <Row>
        <Col span={3} />
        <Col span={18}>
          <Layout className="layout">
            <Content style={{ padding: "150px 100px 450px 100px" }}>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/detail" component={Detail} />
                <Route component={NotFound} />
              </Switch>
            </Content>
          </Layout>
        </Col>

        <Col span={3} />
      </Row>
      <XFooter />
    </div>
  );
}

export default App;
