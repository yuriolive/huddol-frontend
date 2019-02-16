import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Restaurant from './Restaurant.jsx';
import Menu from './Menu.jsx';
import { getRestaurants, selectRestaurant } from '../../actions/index';

const { Content, Footer } = Layout;

class HomePage extends Component {
  componentDidMount() {
    this.props.getRestaurants();
  }

  render() {
    return (
      <div>
        <Layout style={{ padding: '24px 24px 24px' }}>
          <Content style={{ background: '#fff', padding: 24 }}>
            <Row gutter={16}>
              { 
                Array.isArray(this.props.restaurants) ? this.props.restaurants.map(r => (
                  <Col xs={24} sm={24} md={12} lg={6} xl={6} key={r.id} style={{ marginBottom: 24 }}>
                    <Restaurant {...r} selectRestaurant={this.props.selectRestaurant}/>
                  </Col>)
                ) : ''
              }
            </Row>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
           <h3>Huddol Delivery</h3>
           Created by Yuri Olive
          </Footer>
        </Layout>
        <Menu />
      </div>
    );
  }
}

/*HomePage.propTypes = {
  restaurants: PropTypes.arrayOf({
    image: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    materials: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    user: PropTypes.string.isRequired,
    file: PropTypes.string.isRequired,
  }).isRequired,
  getRestaurants: PropTypes.func.isRequired,
};*/


const mapStateToProps = state => ({
  restaurants: state.restaurants.values
});

const matchDispatchToProps = dispatch => bindActionCreators({ getRestaurants, selectRestaurant }, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(HomePage);