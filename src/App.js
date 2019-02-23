// src/App.js
import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { Route, Switch } from 'react-router'; // react-router v4
import { connect } from 'react-redux';
import HomePage from './components/presentational/HomePage.jsx';
import OrdersPage from './components/presentational/OrdersPage.jsx';
import Header from './components/presentational/Header.jsx';

class App extends Component {
  render() {
    return (
      <Layout>
        <Header current={this.props.router.location.pathname}/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/orders" component={OrdersPage} />
          <Route render={() => (<div>404</div>)} />
        </Switch>
      </Layout>
    );
  }
}


const mapStateToProps = state => ({
  router: state.router
});


export default connect(mapStateToProps)(App);