import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deselectRestaurant as deselect, updateRestaurantMenu as updateMenu, submitOrder as submit } from '../../actions/index';
import Menu from '../presentational/Menu.jsx';

const RestaurantMenu = (props) => (<Menu {...props} title="Place Order" />);

const mapStateToProps = state => ({
  selected: state.restaurants.selected,
  menu: state.restaurants.menu,
  isSubmitting: state.orders.isSubmitting
});

const matchDispatchToProps = dispatch => bindActionCreators({ updateMenu, deselect, submit }, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(RestaurantMenu);