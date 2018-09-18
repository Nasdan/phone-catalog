import React from 'react';
import { createEmptyState } from './container.business';
import { PhoneDetailPage } from './page';
import { phoneAPI } from '../../../rest-api/api/phone';
import { mapPhoneModelToViewModel } from './mappers';

export class PhoneDetailContainer extends React.PureComponent {
  state = createEmptyState();

  componentDidMount() {
    this.loadPhone();
  }

  loadPhone = () => {
    const id = Number(this.props.match.params.id);
    phoneAPI.fetchPhoneById(id).then(phone => {
      this.setState({
        phone: mapPhoneModelToViewModel(phone),
      });
    });
  };

  render() {
    return <PhoneDetailPage phone={this.state.phone} />;
  }
}
