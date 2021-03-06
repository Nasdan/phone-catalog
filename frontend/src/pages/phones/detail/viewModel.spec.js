import { createEmptyPhone } from './viewModel';

describe('pages/phones/detail/viewModel specs', () => {
  describe('createEmptyPhone', () => {
    it('should return an object with default phone values when call it', () => {
      // Arrange

      // Act
      const result = createEmptyPhone();

      // Assert
      expect(result).toEqual({
        id: 0,
        title: '',
        description: '',
        imageUrl: '',
        color: '',
        price: '',
      });
    });
  });
});
