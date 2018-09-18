import React from 'react';
import { createEmptyState } from './container.business';
import { PhoneDetailPage } from './page';

export class PhoneDetailContainer extends React.PureComponent {
  state = createEmptyState();

  componentDidMount() {
    this.loadPhone();
  }

  loadPhone = () => {
    setTimeout(() => {
      this.setState({
        phone: {
          id: Number(this.props.match.params.id),
          title: 'Test tile',
          description: `El iPhone 6 no sólo es más grande, también es mejor.
          Incluye una pantalla Retina HD de 4,7 pulgadas.
          Chip A8 con arquitectura de 64 bits.          
          Nueva cámara iSight de 8 megapíxeles con Focus Pixels.          
          Sensor de identidad Touch ID.          
          Conexiones 4G LTE y Wi-Fi más rápidas.          
          Mayor autonomía. iOS 8 y iCloud.          
          Todo en un diseño estilizado y uniforme que sólo mide 0,69 cm de grosor.`,
          imageUrl:
            'https://d1eh9yux7w8iql.cloudfront.net/product_images/product_images/1529503182.37-thumb.jpg',
          color: '#F8DFC7',
          price: ' 758€',
        },
      });
    }, 2000);
  };

  render() {
    return <PhoneDetailPage phone={this.state.phone} />;
  }
}
