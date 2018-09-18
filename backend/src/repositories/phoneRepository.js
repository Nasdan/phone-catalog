const phones = [
  {
    id: 1,
    title: 'Apple iPhone 6 16GB',
    imageUrl:
      'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4987/4987610_sd.jpg;maxHeight=640;maxWidth=550',
    description: `El iPhone 6 no sólo es más grande, también es mejor.
    Incluye una pantalla Retina HD de 4,7 pulgadas.    
    Chip A8 con arquitectura de 64 bits.    
    Nueva cámara iSight de 8 megapíxeles con Focus Pixels.    
    Sensor de identidad Touch ID.    
    Conexiones 4G LTE y Wi-Fi más rápidas.    
    Mayor autonomía. iOS 8 y iCloud.    
    Todo en un diseño estilizado y uniforme que sólo mide 0,69 cm de grosor.`,
    color: '#BDBDBD',
    price: 200.08,
  },
  {
    id: 2,
    title: 'Samsung Galaxy S7 Edge',
    imageUrl:
      'https://images-na.ssl-images-amazon.com/images/I/41XZDWyb3dL.jpg',
    description: `El Samsung Galaxy S7 Edge Plata ofrece diversidad de novedades:

    - Acabado en vidrio que consigue un diseño único.
    - Mejoras importantes en ambas cámaras, mayor resolución y una apertura de F1.7.
    - Carga ultrarrápida, con la que cargarás el móvil un 83% en 30 minutos, más rápido que en modelos anteriores. Además de carga inalámbrica.
    - Pantalla Quad HD (1440 x 2560) Super AMOLED de 5,5" con la que podrás disfrutar de una nitidez increíble.
    - Seguridad mejorada gracias a la detección de huellas dactilares y KNOX Enabled App proporciona seguridad adicional para aislar y cifrar de forma segura tus datos confidenciales
    - Arquitectura de 64 bits con la que podrás realizar multitud de tareas a gran velocidad.
    - Bluetooth v4.2
    - Cámaras de 12 mpx la trasera y 5 mpx la delantera para realizar selfies o videollamadas.
    - Batería de litio de 3600 mAh
    - Memoria de 32Gb ampliable por micro SD hasta 200GB
    - Samsung Pay (Visa, MasterCard certificado)
    - IP68 certificado - resistente al polvo y al agua hasta 1.5 metros y 30 minutos.
    
    -Otras características:
    - S-Voice 
    - Cancelacion de ruido en el micro
    - MP4/DivX/XviD/WMV/H.264 reproductor
    - MP3/WAV/WMA/eAAC+/FLAC reproductor
    - Editor Foto/video 
    - Editor Document`,
    color: '#BE9B7B',
    price: 239.25,
  },
  {
    id: 3,
    title: 'LG G5 SE',
    imageUrl:
      'https://www.maxmovil.com/media/catalog/product/cache/1/thumbnail/600x/17f82f742ffe127f42dca9de82fb58b1/c/o/comprar_lg_g5_se_plata.jpg',
    description: `Con la lente de gran angular del nuevo LG G5 SE podrás hacer una captura de mayor superficie a menor distancia. Su doble cámara principal dispone de una lente gran angular de 135º, con 16 mpx con apertura de f1.8 y 8 mpx. Además tiene una cámara secundaria de 8 MP con f/2.0.

    Podrás ver la pantalla de tu LG G5 SE incluso bajo la luz del sol, tiene una pantalla de 5.3" IPS Quantum Display Quad HD que te ofrece unos colores intensos y ricos, para que puedas disfrutar de unas imágenes nítidas.
    
    Con su pantalla Alway On podrás comprobar de un solo vistazo la hora y las notificaciones que hayas recibido, sin tener que encenderla.`,
    color: '#838381',
    price: 155.08,
  },
  {
    id: 4,
    title: 'Huawei P20 Lite',
    imageUrl:
      'https://http2.mlstatic.com/huawei-p20-lite-32gb-ram-4gb-libre-de-fabrica-disponible-hoy-D_NQ_NP_781953-MPE27428937103_052018-F.jpg',
    description: `El Huawei P20 lite dispone de una pantalla de 5.84 pulgadas con una resolución de 2280x1080 pixeles, donde podrás disfrutar de forma fluida de todo tu contenido multimedia gracias a su procesador Kirin 659 de 8 núcleos y a sus 4GB de RAM.
    La cámara principal es dual de 16MP+2MP mientras que la cámara para selfies cuenta con 16MP. Además cuenta con sensor de huellas dactilares, reconocimiento facial, NFC, USB tipo C y una batería de 3.000mAh.`,
    color: '#BD3182',
    price: 329,
  },
  {
    id: 5,
    title: 'Xiaomi Redmi Note 5 32GB+3GB RAM',
    imageUrl: 'https://img.dxcdn.com/productimages/sku_461551_1.jpg',
    description: `- Cámara dual, imágenes más profundas:
    El Redmi Note 5 toma fotos de alta calidad incluso en condiciones de poca luz. Los píxeles de gran tamaño de 1.4μm de la cámara principal crean fotos brillantes y claras. Todo esto se ve incluso mejorado por el segundo sensor, que ofrece una profundidad de campo no disponible en las cámaras de los smartphones convencionales.
    - Snapdragon 636, Estreno mundial:
    El Redmi Note 5 es nuestro Redmi más rápido hasta la fecha y es el primero en contar con el nuevo Snapdragon 636, el nuevo procesador de 14nm que ofrece Qualcomm. Este procesador octa-core de vanguardia implementa la arquitectura Kryo, la cual trae grandes mejoras del rendimiento general y la eficiencia energética. El Snapdragon 636 mejora a su predecesor en más de un 40%.
    - Todo pantalla 18:9:
    La pantalla FHD de 5,99" utiliza una relación de aspecto 18:9, el nuevo estándar para las pantallas de smartphone.
    - Esquinas reforzadas:
    El Redmi Note 5 está especialmente diseñado para amortiguar los impactos en las esquinas y prevenir daños en la pantalla, tiene la garantía de haber pasado por rigurosas pruebas de calidad.`,
    color: '#D4A92E',
    price: 189,
  },
  {
    id: 6,
    title: 'BQ Aquaris VS 64GB+4GB RAM',
    imageUrl:
      'https://d2giyh01gjb6fi.cloudfront.net/default/0002/26/thumb_125254_default_big.jpeg',
    description: `Porque eres exigente y sabes lo que necesitas de un móvil sin renunciar al mejor precio, el Aquaris VS es para ti. Disfruta de la estética rompedora y de las especificaciones clave de la gama V: una experiencia multimedia inmersiva, una cámara con resultados de 10 y una batería de larga duración con carga rápida. Y todo esto en un smartphone con 64GB de memoria interna para que guardes toda tu vida.`,
    color: '#FFFFFF',
    price: 189.9,
  },
  {
    id: 7,
    title: 'Sony Xperia L1',
    imageUrl: 'https://cdn.alzashop.com/ImgW.ashx?fd=f3&cd=SOM0400a1b',
    description: `El Xperia L1 cuenta con una pantalla de gran calidad de 5,5" y un marco suave y redondeado, ademas dispone de un procesador de cuatro núcleos y 2 GB de RAM y 16GB de memoria ampliables mediante ranura para tarjetas microSD de hasta 265GB. Cuenta con una cámara principal de 13Mpx y una para selfies de 5Mpx`,
    color: '#000000',
    price: 139,
  },
  {
    id: 8,
    title: 'Elephone R9 32GB+3GB RAM',
    imageUrl:
      'https://img2.efoxtienda.com/img2/images/_f4fef2f6270b6e2bdb4a4a911ec197ea.images.400x400.jpg',
    description: `El R9 dispone de una pantalla de 5,5 pulgadas con una resolución de 1920x1080 pixeles, y con protección GorillaGlass, con la que evitará arañazos y roturas en la pantalla de vidrio curvo. Además cabe destacar su bisel ultradelgado, que hace que la pantalla parezca visualmente mucho más grande y te de una experiencia visual inmensa.

    Cuenta con una cámara trasera de 13MP, y delantera de unos sorprendentes 5MP, para unos selfies perfectos incluso en condiciones de baja luz. Su procesador es de 10 núcleos y la batería de 3.000mAh. Además es dual SIM.`,
    color: '#27265D',
    price: 149,
  },
];

exports.getPhones = () =>
  Promise.resolve(
    phones.map(phone => ({
      id: phone.id,
      title: phone.title,
      imageUrl: phone.imageUrl,
      price: phone.price,
    }))
  );

exports.getPhoneById = id =>
  Promise.resolve(phones.find(phone => phone.id === Number(id)));
