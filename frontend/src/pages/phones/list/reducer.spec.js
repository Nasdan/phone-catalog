import { phoneListReducer } from './reducer';
import deepFreeze from 'deep-freeze';
import { actionIds } from './actionIds';

describe('pages/phones/list/reducer specs', () => {
  describe('phoneListReducer', () => {
    it('should return empty array when feeding state equals undefined and not handled action type', () => {
      // Arrange
      const state = undefined;
      const action = { type: 'some type' };

      // Act
      const result = phoneListReducer(state, action);

      // Assert
      expect(result).toEqual([]);
    });

    it('should return initial state and not mutate it when feeding state equals array with one item and not handled action type', () => {
      // Arrange
      const state = [
        {
          id: 1,
          title: 'test title',
          imageUrl: 'test imageUrl',
          price: 2,
        },
      ];
      const action = { type: 'some type' };

      deepFreeze(state);

      // Act
      const result = phoneListReducer(state, action);

      // Assert
      expect(result).toEqual([
        {
          id: 1,
          title: 'test title',
          imageUrl: 'test imageUrl',
          price: 2,
        },
      ]);
    });

    it('should return action payload and not mutate state when feeding state equals array with one item and action type equals FETCH_PHONES_SUCCESS', () => {
      // Arrange
      const state = [
        {
          id: 1,
          title: 'test title',
          imageUrl: 'test imageUrl',
          price: 2,
        },
      ];
      const action = {
        type: actionIds.FETCH_PHONES_SUCCESS,
        payload: [
          {
            id: 2,
            title: 'test title 2',
            imageUrl: 'test imageUrl 2',
            price: 4,
          },
        ],
      };

      deepFreeze(state);

      // Act
      const result = phoneListReducer(state, action);

      // Assert
      expect(result).toEqual([
        {
          id: 2,
          title: 'test title 2',
          imageUrl: 'test imageUrl 2',
          price: 4,
        },
      ]);
    });
  });
});
