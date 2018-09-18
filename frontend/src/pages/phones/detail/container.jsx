import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { phoneDetailVMSelector } from './selectors';
import { fetchPhoneById } from './actions';
import { PhoneDetailPage } from './page';

class InnerPhoneDetailContainer extends React.PureComponent {
  componentDidMount() {
    const id = Number(this.props.match.params.id);
    this.props.fetchPhoneById(id);
  }

  render() {
    return <PhoneDetailPage phone={this.props.phone} />;
  }
}

InnerPhoneDetailContainer.propTypes = {
  phone: PropTypes.object.isRequired,
  fetchPhoneById: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  phone: phoneDetailVMSelector(state),
});

const mapDispatchToProps = dispatch => ({
  fetchPhoneById: id => dispatch(fetchPhoneById(id)),
});

export const PhoneDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(InnerPhoneDetailContainer);
