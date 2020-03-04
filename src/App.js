import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./screens/Home";
import Detail from "./screens/Detail";
import NotFound from "./screens/NotFound";
import Navi from "./components/Navi";

function App() {
  return (
    <div>
      <Navi />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/detail" component={Detail} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
