import { phoneListVMSelector } from './selectors';
import * as mappers from './mappers';

describe('pages/phones/list/selectors specs', () => {
  describe('phoneListVMSelector', () => {
    it('should call to mapPhonesModelToViewModel and return mapped phones from state.phoneList', () => {
      // Arrange
      const state = {
        phoneList: [
          {
            id: 1,
            title: 'test title',
            imageUrl: 'test imageUrl',
            price: 2,
          },
        ],
      };

      const expectedPhoneList = [
        {
          id: 1,
          title: 'test title',
          imageUrl: 'test imageUrl',
          price: '2 €',
        },
      ];

      const mapperStub = jest
        .spyOn(mappers, 'mapPhonesModelToViewModel')
        .mockReturnValue(expectedPhoneList);

      // Act
      const result = phoneListVMSelector(state);

      // Assert
      expect(mapperStub).toHaveBeenCalledWith(state.phoneList);
      expect(result).toEqual(expectedPhoneList);
    });
  });
});
