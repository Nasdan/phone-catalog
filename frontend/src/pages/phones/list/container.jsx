import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { routes } from '../../../common/constants/routes';
import { buildRoute } from '../../../common/helpers/routes';
import { PhoneListPage } from './page';
import { phoneListVMSelector } from './selectors';
import { fetchPhones } from './actions';

class InnerPhoneListContainer extends React.PureComponent {
  componentDidMount() {
    this.props.fetchPhones();
  }

  handleItemClick = phone => {
    const route = buildRoute(routes.phones.detail, { id: phone.id });
    this.props.history.push(route);
  };

  render() {
    return (
      <PhoneListPage
        phones={this.props.phones}
        onItemClick={this.handleItemClick}
      />
    );
  }
}

InnerPhoneListContainer.propTypes = {
  phones: PropTypes.array.isRequired,
  fetchPhones: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  phones: phoneListVMSelector(state),
  history: ownProps.history,
});

const mapDispatchToProps = dispatch => ({
  fetchPhones: () => dispatch(fetchPhones()),
});

export const PhoneListContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(InnerPhoneListContainer)
);
