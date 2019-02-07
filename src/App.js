import React, { Component } from 'react';
import './App.css';
import Layout from "./components/Layout/Layout";
import {Route, Switch} from "react-router";

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
            <Route/>
        </Switch>
      </Layout>
    );
  }
}

export default App;
