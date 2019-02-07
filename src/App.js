import React, { Component } from 'react';
import './App.css';
import Layout from "./components/Layout/Layout";
import {Route, Switch} from "react-router";
import Pages from "./containers/Pages/Pages";
import AddQuotes from "./containers/AddPages/AddPages";

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
            <Route path="/pages/admin"  component={AddQuotes}/>
            <Route path="/pages/:name" exact component={Pages}/>
        </Switch>
      </Layout>
    );
  }
}

export default App;
