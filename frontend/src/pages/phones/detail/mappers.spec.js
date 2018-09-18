import { mapPhoneModelToViewModel } from './mappers';
import { createEmptyPhone } from './viewModel';

describe('pages/phones/detail/mappers specs', () => {
  describe('mapPhoneModelToViewModel', () => {
    it('should return phone with empty values when feeding phone equals undefined', () => {
      // Arrange
      const phone = undefined;

      // Act
      const result = mapPhoneModelToViewModel(phone);

      // Assert
      expect(result).toEqual(createEmptyPhone());
    });

    it('should return phone with empty values when feeding phone equals null', () => {
      // Arrange
      const phone = null;

      // Act
      const result = mapPhoneModelToViewModel(phone);

      // Assert
      expect(result).toEqual(createEmptyPhone());
    });

    it('should return phone with undefined values when feeding phone with wrong properties', () => {
      // Arrange
      const phone = {
        testProperty: 1,
      };

      // Act
      const result = mapPhoneModelToViewModel(phone);

      // Assert
      expect(result).toEqual({
        id: undefined,
        title: undefined,
        imageUrl: undefined,
        description: undefined,
        color: undefined,
        price: undefined,
      });
    });

    it('should return phone with mapped values when feeding phone with values', () => {
      // Arrange
      const phone = {
        id: 1,
        title: 'test title',
        imageUrl: 'test imageUrl',
        description: 'test description',
        color: 'test color',
        price: 2.22,
      };

      // Act
      const result = mapPhoneModelToViewModel(phone);

      // Assert
      expect(result).toEqual({
        id: 1,
        title: 'test title',
        imageUrl: 'test imageUrl',
        description: 'test description',
        color: 'test color',
        price: '2.22 €',
      });
    });
  });
});
