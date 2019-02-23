import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Order from './Order.jsx';
import OrderMenu from '../container/OrderMenu.jsx';
import { getOrders, selectOrder, deleteOrder } from '../../actions/index';
import Page from './Page.jsx';

const { Content, Footer } = Layout;

class HomePage extends Component {
  componentDidMount() {
    this.props.getOrders();
  }

  render() {
    return (
      <Page menu={<OrderMenu />}>
        <Row gutter={16}>
          { 
            Array.isArray(this.props.orders) ? this.props.orders.map(r => (
              <Col xs={24} sm={24} md={12} lg={6} xl={6} key={r.id} style={{ marginBottom: 24 }}>
                <Order {...r} selectOrder={this.props.selectOrder} />
              </Col>)
            ) : ''
          }
        </Row>
      </Page>
    );
  }
}

const mapStateToProps = state => ({
  orders: state.orders.values
});

const matchDispatchToProps = dispatch => bindActionCreators({ getOrders, selectOrder, deleteOrder }, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(HomePage);