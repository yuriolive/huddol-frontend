import React, { Component } from 'react';
import { Card, Button } from 'antd';

export default props => (
  <Card
    hoverable
    title={`Order on ${props.restaurant.name}`}
    onClick={() => props.selectOrder(props.id)}>
    <p>Order ID: {props.id}</p>
  </Card>
);