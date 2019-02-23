import React, { Component } from 'react';
import { Drawer, Button, InputNumber, Table } from 'antd';

class Menu extends Component {
  render() {
    const columns = [{
      title: 'Product',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: p => (`$ ${p.toFixed(2)}`)
    }, {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
      render: (q, r) => (<InputNumber min={0} value={q} disabled={this.props.isSubmitting === true || this.props.submitDisabled === true} onChange={val => this.props.updateMenu(val, r.id)} />)
    }];
  
    return (
      <Drawer
        title={this.props.title}
        placement="right"
        width={600}
        closable={this.props.isSubmitting ? false : true}
        onClose={() => {
          if(!this.props.isSubmitting) { this.props.deselect() }
        }}
        visible={this.props.selected !== false && typeof(this.props.selected) !== 'undefined'}
      >
        <Table columns={columns} dataSource={this.props.menu} pagination={false} rowKey="id" />
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
          
          { 'deleteRequest' in this.props ? <Button type="danger" onClick={() => this.props.deleteRequest(this.props.selected)} style={{ float: 'left' }}>Delete</Button> : '' }
          
          { this.props.submitDisabled === true ? '' : (
            <span>
              <Button onClick={() => this.props.deselect()} style={{ marginRight: 8 }} disabled={this.props.isSubmitting}>
                Cancel
              </Button>
              <Button
                loading={this.props.isSubmitting === true} 
                onClick={() => this.props.submit(this.props.selected, this.props.menu.filter(p => p.quantity > 0).map(p => ({ product_id: p.id, quantity: p.quantity })))}
                disabled={!Array.isArray(this.props.menu) || this.props.menu.map(m => m.quantity).reduce((acc, curr) => acc + curr) === 0}
                type="primary" >
                Submit
              </Button>
            </span>
          ) }
        </div>
      </Drawer>
    );
  }
}

export default Menu;