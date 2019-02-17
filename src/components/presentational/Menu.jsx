import React, { Component } from 'react';
import { Drawer, Button, InputNumber, Form, Table } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deselectRestaurant, updateRestaurantMenu, submitOrder } from '../../actions/index';

class Menu extends Component {
  render() {
    const columns = [{
      title: 'Product',
      dataIndex: 'product',
      key: 'product',
    }, {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: p => (`$ ${p.toFixed(2)}`)
    }, {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
      render: (q, r) => (<InputNumber min={0} value={q} disabled={this.props.isSubmitting === true} onChange={val => this.props.updateRestaurantMenu(val, r.key)} />)
    }];
  
    return (
      <Drawer
        title="Place order"
        placement="right"
        width={600}
        closable={true}
        onClose={() => this.props.deselectRestaurant()}
        visible={this.props.selected !== false && typeof(this.props.selected) !== 'undefined'}
      >
        <Table columns={columns} dataSource={this.props.menu} pagination={false} />
        <h3 style={{ marginTop: 30 }}>Total: $ {(Array.isArray(this.props.menu) ? this.props.menu.map(m => m.quantity * m.price).reduce((acc, curr) => (acc + curr)) : 0).toFixed(2)}</h3>
        <div
          style={{
            position: 'absolute',
            left: 0,
            bottom: 0,
            width: '100%',
            borderTop: '1px solid #e9e9e9',
            padding: '10px 16px',
            background: '#fff',
            textAlign: 'right',
          }}
        >
          <Button onClick={() => this.props.deselectRestaurant()} style={{ marginRight: 8 }}>
            Cancel
          </Button>
          <Button loading={this.props.isSubmitting === true} onClick={() => this.props.submitOrder(this.props.selected, this.props.menu)} type="primary" >
            Submit
          </Button>
        </div>
      </Drawer>
    );
  }
}

const mapStateToProps = state => ({
  selected: state.restaurants.selected,
  menu: state.restaurants.menu,
  isSubmitting: state.orders.isSubmitting
});

const matchDispatchToProps = dispatch => bindActionCreators({ updateRestaurantMenu, deselectRestaurant, submitOrder }, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(Menu);