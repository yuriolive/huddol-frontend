import React, { Component } from 'react';
import { Card, Rate, Icon, Collapse } from 'antd';

export default props => (
  <Card hoverable title={props.name}>
    <p>{props.category} • {'$'.repeat(props.price)}</p>
    <p>{props.delivery_time}min</p>
  </Card>
);