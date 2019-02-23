import React from 'react';
import { Link } from 'react-router-dom'; // react-router v4
import { Menu, Layout } from 'antd';

const { Header } = Layout;

export default (props) => (
    <Header className="header">
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={props.current === '/' ? ['1'] : ['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1"><Link to="/">Restaurants</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/orders">Orders</Link></Menu.Item>
      </Menu>
    </Header>    
);