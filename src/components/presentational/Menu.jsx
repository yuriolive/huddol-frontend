import React, { Component } from 'react';
import { Drawer, Button, InputNumber, Form, Table } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deselectRestaurant } from '../../actions/index';


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
    render: q => (<InputNumber min={0} defaultValue={q} />)
  }];

const data = [{
  key: '1',
  product: 'Cheese slice',
  quantity: 2,
  price: 10
}, {
  key: '2',
  product: 'Bacon slice',
  quantity: 1,
  price: 15
}];

class Menu extends Component {
    
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  onChange = (e) => {
    this.setState({
      placement: e.target.value,
    });
  }
  
  render() {
    return (
      <Drawer
        title="Place order"
        placement="right"
        width={600}
        closable={true}
        onClose={() => this.props.deselectRestaurant()}
        visible={this.props.selected}
      >
        <Form>
        
        </Form>
        <Table columns={columns} dataSource={data} pagination={false} />
        <h4>Subtotal: $ 123.00</h4>
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
          <Button onClick={this.onClose} type="primary">
            Submit
          </Button>
        </div>
      </Drawer>
    );
  }
}

const mapStateToProps = state => ({
  selected: state.restaurants.selected
});

const matchDispatchToProps = dispatch => bindActionCreators({ deselectRestaurant }, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(Menu);