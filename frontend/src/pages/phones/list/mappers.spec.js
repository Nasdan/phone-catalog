import { mapPhonesModelToViewModel } from './mappers';

describe('pages/phones/list/mappers specs', () => {
  describe('mapPhonesModelToViewModel', () => {
    it('should return empty array when feeding phones equals undefined', () => {
      // Arrange
      const phones = undefined;

      // Act
      const result = mapPhonesModelToViewModel(phones);

      // Assert
      expect(result).toEqual([]);
    });

    it('should return empty array when feeding phones equals null', () => {
      // Arrange
      const phones = null;

      // Act
      const result = mapPhonesModelToViewModel(phones);

      // Assert
      expect(result).toEqual([]);
    });

    it('should return empty array when feeding phones equals empty array', () => {
      // Arrange
      const phones = [];

      // Act
      const result = mapPhonesModelToViewModel(phones);

      // Assert
      expect(result).toEqual([]);
    });

    it('should return array with one phone default values when feeding phones with one item equals undefined', () => {
      // Arrange
      const phones = [undefined];

      // Act
      const result = mapPhonesModelToViewModel(phones);

      // Assert
      expect(result).toEqual([
        {
          id: 0,
          title: '',
          imageUrl: '',
          price: '',
        },
      ]);
    });

    it('should return array with one phone default values when feeding phones with one item equals null', () => {
      // Arrange
      const phones = [null];

      // Act
      const result = mapPhonesModelToViewModel(phones);

      // Assert
      expect(result).toEqual([
        {
          id: 0,
          title: '',
          imageUrl: '',
          price: '',
        },
      ]);
    });

    it('should return array with one phone undefined values when feeding phones with one item with wrong fields', () => {
      // Arrange
      const phones = [
        {
          testField: '',
        },
      ];

      // Act
      const result = mapPhonesModelToViewModel(phones);

      // Assert
      expect(result).toEqual([
        {
          id: undefined,
          title: undefined,
          imageUrl: undefined,
          price: undefined,
        },
      ]);
    });

    it('should return array with one mapped phone when feeding phones with one item', () => {
      // Arrange
      const phones = [
        {
          id: 1,
          title: 'test title',
          imageUrl: 'test imageUrl',
          price: 2,
        },
      ];

      // Act
      const result = mapPhonesModelToViewModel(phones);

      // Assert
      expect(result).toEqual([
        {
          id: 1,
          title: 'test title',
          imageUrl: 'test imageUrl',
          price: '2 €',
        },
      ]);
    });
  });
});
