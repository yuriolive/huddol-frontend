import React, { Component } from 'react';
import { Card, Rate, Icon, Collapse } from 'antd';

const Panel = Collapse.Panel;

const CardRate = props => (<span><Icon type="star" theme="filled" /> {props.rating}</span>);

export default props => (
<Card hoverable title={props.name} extra={<CardRate rating={props.rating}/>}>
  <p>{props.category} • {'$'.repeat(props.price)}</p>
  <p>{props.deliveryTime}min</p>
  <Collapse defaultActiveKey={['1', '2', '3']}>
    <Panel header="This is panel header 1" key="1">
      123
    </Panel>
    <Panel header="This is panel header 2" key="2">
      123
    </Panel>
    <Panel header="Drinks" key="3">
      123
    </Panel>
  </Collapse>
</Card>);