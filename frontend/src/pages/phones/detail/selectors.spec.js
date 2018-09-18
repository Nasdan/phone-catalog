import { phoneDetailVMSelector } from './selectors';
import * as mappers from './mappers';

describe('pages/phones/detail/selectors specs', () => {
  describe('phoneDetailVMSelector', () => {
    it('should call to mapPhoneModelToViewModel and return mapped phone from state.phoneDetail', () => {
      // Arrange
      const state = {
        phoneDetail: {
          id: 1,
          title: 'test title',
          description: 'test description',
          imageUrl: 'test imageUrl',
          color: 'test color',
          price: 2,
        },
      };

      const expectedPhone = {
        id: 1,
        title: 'test title',
        description: 'test description',
        imageUrl: 'test imageUrl',
        color: 'test color',
        price: '2 €',
      };

      const mapperStub = jest
        .spyOn(mappers, 'mapPhoneModelToViewModel')
        .mockReturnValue(expectedPhone);

      // Act
      const result = phoneDetailVMSelector(state);

      // Assert
      expect(mapperStub).toHaveBeenCalledWith(state.phoneDetail);
      expect(result).toEqual(expectedPhone);
    });
  });
});
