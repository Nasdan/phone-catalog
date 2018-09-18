import { phoneDetailReducer } from './reducer';
import deepFreeze from 'deep-freeze';
import { actionIds } from '../actionIds';
import { createEmptyPhone } from './model';

describe('pages/phones/detail/reducer specs', () => {
  describe('phoneDetailReducer', () => {
    it('should return phone with default values when feeding state equals undefined and not handled action type', () => {
      // Arrange
      const state = undefined;
      const action = { type: 'some type' };

      // Act
      const result = phoneDetailReducer(state, action);

      // Assert
      expect(result).toEqual(createEmptyPhone());
    });

    it('should return initial state and not mutate it when feeding state with values and not handled action type', () => {
      // Arrange
      const state = {
        id: 1,
        title: 'test title',
        description: 'test description',
        imageUrl: 'test imageUrl',
        color: 'test color',
        price: 2,
      };
      const action = { type: 'some type' };

      deepFreeze(state);

      // Act
      const result = phoneDetailReducer(state, action);

      // Assert
      expect(result).toEqual({
        id: 1,
        title: 'test title',
        description: 'test description',
        imageUrl: 'test imageUrl',
        color: 'test color',
        price: 2,
      });
    });

    it('should return action payload and not mutate state when feeding state with values and action type equals FETCH_PHONE_SUCCESS', () => {
      // Arrange
      const state = {
        id: 1,
        title: 'test title',
        description: 'test description',
        imageUrl: 'test imageUrl',
        color: 'test color',
        price: 2,
      };

      const action = {
        type: actionIds.FETCH_PHONE_SUCCESS,
        payload: {
          id: 2,
          title: 'test title 2',
          description: 'test description 2',
          imageUrl: 'test imageUrl 2',
          color: 'test color 2',
          price: 4,
        },
      };

      deepFreeze(state);

      // Act
      const result = phoneDetailReducer(state, action);

      // Assert
      expect(result).toEqual({
        id: 2,
        title: 'test title 2',
        description: 'test description 2',
        imageUrl: 'test imageUrl 2',
        color: 'test color 2',
        price: 4,
      });
    });
  });
});
