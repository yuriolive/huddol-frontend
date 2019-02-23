import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deselectOrder as deselect, updateOrderMenu as updateMenu, updateOrder as submit, deleteOrder as deleteRequest } from '../../actions/index';
import Menu from '../presentational/Menu.jsx';

const OrderMenu = (props) => (<Menu {...props} title="Update Order" />);

const mapStateToProps = state => ({
  selected: state.orders.selected,
  menu: state.orders.menu,
  isSubmitting: state.orders.isSubmitting
});

const matchDispatchToProps = dispatch => bindActionCreators({ updateMenu, deselect, submit, deleteRequest }, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(OrderMenu);