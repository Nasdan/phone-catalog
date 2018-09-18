import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { routes } from '../../../common/constants/routes';
import { buildRoute } from '../../../common/helpers/routes';
import { phoneAPI } from '../../../rest-api/api/phone';
import { mapPhonesModelToViewModel } from './mappers';
import { PhoneListPage } from './page';

class InnerPhoneListContainer extends React.PureComponent {
  state = {
    phones: [],
  };

  componentDidMount() {
    this.loadPhones();
  }

  loadPhones = () => {
    phoneAPI.fetchPhones().then(phones => {
      this.setState({
        phones: mapPhonesModelToViewModel(phones),
      });
    });
  };

  handleItemClick = phone => {
    const route = buildRoute(routes.phones.detail, { id: phone.id });
    this.props.history.push(route);
  };

  render() {
    return (
      <PhoneListPage
        phones={this.state.phones}
        onItemClick={this.handleItemClick}
      />
    );
  }
}

InnerPhoneListContainer.propTypes = {
  history: PropTypes.object.isRequired,
};

export const PhoneListContainer = withRouter(InnerPhoneListContainer);
