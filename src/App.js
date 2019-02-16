// src/App.js
import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router'; // react-router v4
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from './configureStore';
import HomePage from './components/presentational/HomePage.jsx';
import OrdersPage from './components/presentational/OrdersPage.jsx';

const { Header, Content, Sider } = Layout;

const store = configureStore(/* provide initial state if any */);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Layout>
            <Header className="header">
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                style={{ lineHeight: '64px' }}
              >
                <Menu.Item key="1">Restaurants</Menu.Item>
                <Menu.Item key="2">Orders</Menu.Item>
              </Menu>
            </Header>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/orders" component={OrdersPage} />
              <Route render={() => (<div>404</div>)} />
            </Switch>
          </Layout>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;