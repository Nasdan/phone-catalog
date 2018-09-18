import { phoneListSelector } from './selectors';

describe('src/selectors specs', () => {
  describe('phoneListSelector', () => {
    it('should return empty array phoneList from state', () => {
      // Arrange
      const state = {
        phoneList: [],
      };

      // Act
      const result = phoneListSelector(state);

      // Assert
      expect(result).toEqual(state.phoneList);
    });

    it('should return phoneList with values from state', () => {
      // Arrange
      const state = {
        phoneList: [
          {
            id: 1,
          },
        ],
      };

      // Act
      const result = phoneListSelector(state);

      // Assert
      expect(result).toEqual(state.phoneList);
    });
  });
});
