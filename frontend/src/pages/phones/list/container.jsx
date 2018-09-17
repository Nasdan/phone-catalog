import React from 'react';
import { PhoneListPage } from './page';

export class PhoneListContainer extends React.PureComponent {
  state = {
    phones: [],
  };

  componentDidMount() {
    this.loadPhones();
  }

  loadPhones = () => {
    setTimeout(() => {
      this.setState({
        phones: [
          {
            id: 1,
            title: 'Test 1',
            imageUrl:
              'https://d1eh9yux7w8iql.cloudfront.net/product_images/product_images/1529503182.37-thumb.jpg',
            price: ' 758€',
          },
          {
            id: 2,
            title: 'Test 2',
            imageUrl:
              'https://http2.mlstatic.com/celular-samsung-galaxy-D_NQ_NP_632515-MLM26892411879_022018-F.jpg',
            price: ' 621€',
          },
          {
            id: 3,
            title: 'Test 3',
            imageUrl:
              'https://d1eh9yux7w8iql.cloudfront.net/product_images/product_images/1529503182.37-thumb.jpg',
            price: ' 758€',
          },
          {
            id: 4,
            title: 'Test 4',
            imageUrl:
              'https://http2.mlstatic.com/celular-samsung-galaxy-D_NQ_NP_632515-MLM26892411879_022018-F.jpg',
            price: ' 621€',
          },
          {
            id: 5,
            title: 'Test 5',
            imageUrl:
              'https://d1eh9yux7w8iql.cloudfront.net/product_images/product_images/1529503182.37-thumb.jpg',
            price: ' 758€',
          },
        ],
      });
    }, 2000);
  };

  render() {
    return <PhoneListPage phones={this.state.phones} />;
  }
}
