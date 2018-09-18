import { phoneListSelector, phoneDetailSelector } from './selectors';

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

  describe('phoneDetailSelector', () => {
    it('should return empty object phoneDetail from state', () => {
      // Arrange
      const state = {
        phoneDetail: {},
      };

      // Act
      const result = phoneDetailSelector(state);

      // Assert
      expect(result).toEqual(state.phoneDetail);
    });

    it('should return phoneDetail with values from state', () => {
      // Arrange
      const state = {
        phoneDetail: {
          id: 1,
        },
      };

      // Act
      const result = phoneDetailSelector(state);

      // Assert
      expect(result).toEqual(state.phoneDetail);
    });
  });
});
