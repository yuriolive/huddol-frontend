import React, { Component } from 'react';
import { Card, Button } from 'antd';

export default props => (
  <Card
    title={`Order on ${props.restaurant.name}`}
    extra={<Button type="danger" block onClick={() => props.deleteOrder(props.id)}>DELETE</Button>}>
    <p>Order ID: {props.id}</p>
  </Card>
);
