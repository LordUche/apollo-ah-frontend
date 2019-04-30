import * as actions from '../../actions/clapsAction';
import { mockState, createMockStore } from '../setup';
import request from '../../utils/request';

const mockStore = createMockStore();

jest.mock('../../utils/request');

const { clapArticleType, userClapsType } = actions;
const { article: payload } = mockState;

describe('Action creators', () => {
  it('should dispatch success action upon clapping article', () => {
    const expected = {
      type: clapArticleType.success,
      payload,
    };
    expect(actions.clapArticleSuccess(payload)).toEqual(expected);
  });
  it('should dispatch failure action upon clapping article', () => {
    const expected = {
      type: clapArticleType.failure,
      payload: [{ error: 'some error' }],
    };
    expect(actions.clapArticleFailure([{ error: 'some error' }])).toEqual(expected);
  });
  it('clapArticleRequest() should dispatch success', () => {
    request.mockResolvedValue({ data: { data: {} } });
    const expectedAction = [
      {
        type: clapArticleType.success,
        payload: {},
      }
    ];
    const store = mockStore();
    return store.dispatch(actions.clapArticleRequest({})).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
  it('clapArticleRequest() should dispatch failure with error payload', () => {
    const response = {
      data: {
        message: 'error message',
        data: [],
      }
    };
    request.mockRejectedValue({ response });

    const expectedAction = [
      {
        type: clapArticleType.failure,
        payload: { ...response.data },
      }
    ];
    const store = mockStore();
    return store.dispatch(actions.clapArticleRequest({})).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
  it('fetchUserClaps() should dispatch success', () => {
    request.mockResolvedValue({ data: { data: { claps: 0 } } });
    const expectedAction = [
      {
        type: userClapsType.success,
        payload: { claps: 0 },
      }
    ];
    const store = mockStore();
    return store.dispatch(actions.fetchUserClaps({})).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
