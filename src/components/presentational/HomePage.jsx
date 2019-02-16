import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';
import Restaurant from './Restaurant.jsx'

const { Content, Footer } = Layout;

const restaurants = [{
  id: 1,
  name: 'Huddols Burguers',
  category: 'Burguers', 
  price: 3,
  rating: 4.5,
  deliveryTime: 45
}, {
  id: 2,
  name: 'Huddols Pizzas',
  category: 'Pizza', 
  price: 2,
  rating: 4.8,
  deliveryTime: 20
}];

export default () => (
<Layout style={{ padding: '24px 24px 24px' }}>
  <Content style={{ background: '#fff', padding: 24 }}>
    <Row gutter={16}>
      { 
        restaurants.map(r => (
          <Col xs={24} sm={24} md={12} lg={6} xl={6} key={r.id} style={{ marginBottom: 24 }}>
            <Restaurant {...r}/>
          </Col>)
        )
      }
    </Row>
  </Content>
  <Footer style={{ textAlign: 'center' }}>
   <h3>Huddol Delivery</h3>
   Created by Yuri Olive
  </Footer>
</Layout>
);