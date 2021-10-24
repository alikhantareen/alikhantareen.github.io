import React from "react";
import "./index.css";
import MainScreen from "./components/MainScreen";
import Aboutpage from "./components/AboutPage";
import BlogPage from "./components/BlogPage";
// import Create from "./components/create";
import { Switch, Route } from "react-router";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={MainScreen}/>
        <Route path="/about" component={Aboutpage}/>
        <Route path="/blogpage" component={BlogPage}/>
        {/* <Route path="/create" component={Create}/> */}
      </Switch>
    </div>
  );
};

export default App;
