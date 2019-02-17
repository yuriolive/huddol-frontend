import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Order from './Order.jsx';
import { getOrders, selectRestaurant } from '../../actions/index';

const { Content, Footer } = Layout;

class OrdersPage extends Component {
/*  componentDidMount() {
    this.props.getOrders();
  }*/

  render() {
    return (
      <div>
        Not implemented
      </div>
    );
  }
}


export default OrdersPage;