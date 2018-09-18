import ReduxThunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { fetchPhones } from './actions';
import { phoneAPI } from '../../../rest-api/api/phone';
import { actionIds } from './actionIds';

const middlewares = [ReduxThunk];
const getMockStore = configureStore(middlewares);

describe('pages/phones/list/actions specs', () => {
  describe('fetchPhones', () => {
    it(`should call to fetchPhones from phoneAPI and updatePhones action creator 
      when server response is successfully and return phones array`, async () => {
      // Arrange
      const expectedPhones = [
        {
          id: 1,
          title: 'test title',
          imageUrl: 'test imageUrl',
          price: 2,
        },
      ];
      const fetchPhonesStub = jest
        .spyOn(phoneAPI, 'fetchPhones')
        .mockResolvedValue(expectedPhones);

      // Act
      const store = getMockStore();
      await store.dispatch(fetchPhones());

      // Assert
      expect(fetchPhonesStub).toHaveBeenCalled();
      const expectedAction = store.getActions()[0];
      expect(expectedAction.type).toEqual(actionIds.FETCH_PHONES_SUCCESS);
      expect(expectedAction.payload).toEqual(expectedPhones);
    });

    it(`should call to fetchPhones from phoneAPI and console.error 
      when server response is failed`, async () => {
      // Arrange
      const expectedError = 'Test error';

      const fetchPhonesStub = jest
        .spyOn(phoneAPI, 'fetchPhones')
        .mockRejectedValue(expectedError);

      const consoleErrorStub = jest
        .spyOn(window.console, 'error')
        .mockImplementation(() => {});

      // Act
      const store = getMockStore();
      await store.dispatch(fetchPhones());

      // Assert
      expect(fetchPhonesStub).toHaveBeenCalled();
      expect(consoleErrorStub).toHaveBeenCalledWith(expectedError);
    });
  });
});
