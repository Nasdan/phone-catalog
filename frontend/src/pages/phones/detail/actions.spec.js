import ReduxThunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { fetchPhoneById } from './actions';
import { phoneAPI } from '../../../rest-api/api/phone';
import { actionIds } from './actionIds';

const middlewares = [ReduxThunk];
const getMockStore = configureStore(middlewares);

describe('pages/phones/detail/actions specs', () => {
  describe('fetchPhoneById', () => {
    it(`should call to fetchPhoneById from phoneAPI and updatePhone action creator 
      when feeding id and server response is successfully and return a phone`, async () => {
      // Arrange
      const id = 1;

      const expectedPhone = {
        id: 1,
        title: 'test title',
        description: 'test description',
        imageUrl: 'test imageUrl',
        color: 'test color',
        price: 2,
      };

      const fetchPhoneByIdStub = jest
        .spyOn(phoneAPI, 'fetchPhoneById')
        .mockResolvedValue(expectedPhone);

      // Act
      const store = getMockStore();
      await store.dispatch(fetchPhoneById(id));

      // Assert
      expect(fetchPhoneByIdStub).toHaveBeenCalledWith(id);
      const expectedAction = store.getActions()[0];
      expect(expectedAction.type).toEqual(actionIds.FETCH_PHONE_SUCCESS);
      expect(expectedAction.payload).toEqual(expectedPhone);
    });

    it(`should call to fetchPhoneById from phoneAPI and console.error 
      when feeding id and server response is failed`, async () => {
      // Arrange
      const id = 1;

      const expectedError = 'Test error';

      const fetchPhoneByIdStub = jest
        .spyOn(phoneAPI, 'fetchPhoneById')
        .mockRejectedValue(expectedError);

      const consoleErrorStub = jest
        .spyOn(window.console, 'error')
        .mockImplementation(() => {});

      // Act
      const store = getMockStore();
      await store.dispatch(fetchPhoneById(id));

      // Assert
      expect(fetchPhoneByIdStub).toHaveBeenCalledWith(id);
      expect(consoleErrorStub).toHaveBeenCalledWith(expectedError);
    });
  });
});
