import React, { Component } from 'react';
import { Card, Rate, Icon, Collapse } from 'antd';

const Panel = Collapse.Panel;

const CardRate = props => (<span><Icon type="star" theme="filled" /> {props.rating}</span>);

export default props => (
  <Card hoverable title={props.name} extra={<CardRate rating={props.rating.toFixed(1)}/>} onClick={() => props.selectRestaurant(props.id)}>
    <p>{props.category} • {'$'.repeat(props.price)}</p>
    <p>{props.process_time}min</p>
  </Card>
);