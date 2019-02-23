import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';

const { Content, Footer } = Layout;

export default (props) => (
  <div>
    <Layout style={{ padding: '24px 24px 24px' }}>
      <Content style={{ background: '#fff', padding: 24 }}>
        {props.children}
      </Content>
      <Footer style={{ textAlign: 'center' }}>
       <h3>Huddol Delivery</h3>
       Created by Yuri Olive
      </Footer>
    </Layout>
    {props.menu}
  </div>
);