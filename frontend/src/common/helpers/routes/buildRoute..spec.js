import { buildRoute } from './buildRoute';

describe('buildRoute', () => {
  it('should return empty string when params is undefined', () => {
    // Assert
    const baseRoute = 'user/products/';
    const params = undefined;

    // Act
    const result = buildRoute(baseRoute, params);

    // Arrange
    expect(result).toEqual('');
  });

  it('should return empty string when params is null', () => {
    // Assert
    const baseRoute = 'user/products/';
    const params = null;

    // Act
    const result = buildRoute(baseRoute, params);

    // Arrange
    expect(result).toEqual('');
  });

  it('should return empty string when params is empty object', () => {
    // Assert
    const baseRoute = 'user/products/';
    const params = {};

    const expectResult = 'user/products/';

    // Act
    const result = buildRoute(baseRoute, params);

    // Arrange
    expect(result).toEqual(expectResult);
  });

  it('should return empty string when pass undefined baseRoute', () => {
    // Assert
    const baseRoute = undefined;
    const params = {
      categoryId: '1',
    };

    const expectedResult = '';

    // Act
    const result = buildRoute(baseRoute, params);

    // Arrange
    expect(result).toEqual(expectedResult);
  });

  it('should return empty string when pass null baseRoute', () => {
    // Assert
    const baseRoute = null;
    const params = {
      categoryId: '1',
    };

    const expectedResult = '';

    // Act
    const result = buildRoute(baseRoute, params);

    // Arrange
    expect(result).toEqual(expectedResult);
  });

  it('should return empty string when pass empty baseRoute', () => {
    // Assert
    const baseRoute = '';
    const params = {
      categoryId: '1',
    };

    const expectedResult = '';

    // Act
    const result = buildRoute(baseRoute, params);

    // Arrange
    expect(result).toEqual(expectedResult);
  });

  it('should return expected result when feeding params with one property', () => {
    // Assert
    const baseRoute = 'user/products/:categoryId';
    const params = {
      categoryId: '1',
    };

    const expectedResult = 'user/products/1';

    // Act
    const result = buildRoute(baseRoute, params);

    // Arrange
    expect(result).toEqual(expectedResult);
  });

  it('should return expected result when feeding params with 2 properties', () => {
    // Assert
    const baseRoute = 'user/products/:categoryId/detail/:productId';
    const params = {
      categoryId: '1',
      productId: '2',
    };

    const expectedResult = 'user/products/1/detail/2';

    // Act
    const result = buildRoute(baseRoute, params);

    // Arrange
    expect(result).toEqual(expectedResult);
  });

  it('should return expected result when feeding params with 3 properties', () => {
    // Assert
    const baseRoute =
      'user/products/:categoryId/detail/:productId/typeProduct/:typeProductId';
    const params = {
      categoryId: '1',
      productId: '2',
      typeProductId: '3',
    };

    const expectedResult = 'user/products/1/detail/2/typeProduct/3';

    // Act
    const result = buildRoute(baseRoute, params);

    // Arrange
    expect(result).toEqual(expectedResult);
  });

  it('should not change route if all properties of params does not match', () => {
    // Assert
    const baseRoute = 'user/products/:categoryId';
    const params = {
      id: '1',
    };

    const expectedResult = 'user/products/:categoryId';

    // Act
    const result = buildRoute(baseRoute, params);

    // Arrange
    expect(result).toEqual(expectedResult);
  });

  it('should change only properties that match', () => {
    // Assert
    const baseRoute = 'user/products/:categoryId/product/:id';
    const params = {
      categoryId: '1',
      productId: '2',
    };

    const expectedResult = 'user/products/1/product/:id';

    // Act
    const result = buildRoute(baseRoute, params);

    // Arrange
    expect(result).toEqual(expectedResult);
  });

  it('should change all matches for a property that matchs', () => {
    // Assert
    const baseRoute =
      'user/products/:categoryId/product/:id/products/:categoryId';
    const params = {
      categoryId: '1',
      productId: '2',
    };

    const expectedResult = 'user/products/1/product/:id/products/1';

    // Act
    const result = buildRoute(baseRoute, params);

    // Arrange
    expect(result).toEqual(expectedResult);
  });
});
