import { createEmptyState } from './container.business';

describe('pages/phones/detail/contaier.business specs', () => {
  describe('createEmptyState', () => {
    it('should return an object with phone field with default values when call it', () => {
      // Arrange

      // Act
      const result = createEmptyState();

      // Assert
      expect(result).toEqual({
        phone: {
          id: 0,
          title: '',
          description: '',
          imageUrl: '',
          color: '',
          price: '',
        },
      });
    });
  });
});
