/* eslint-disable import/no-extraneous-dependencies */
import '@babel/polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import thunk from 'redux-thunk';
import configMockStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';


export const mockState = {
  user: {
    token: '',
    isLoggedIn: false,
    loginStatus: false,
    message: '',
    isLoading: false,
    profile: {
      username: '',
      image: '',
      errorData: [],
    },
    resetPassword: {
      loading: false,
      message: '',
    }
  },
  createArticle: {
    loading: false,
    message: false,
  },
  articlesReducer: {
    articles: []
  },
  articlesCategoryReducer: []
};

export const createMockStore = () => {
  const mockStore = configMockStore([thunk]);
  configure({ adapter: new Adapter() });
  return mockStore;
};

const setup = (component, initailState = mockState) => {
  const mockStore = configMockStore([thunk]);
  configure({ adapter: new Adapter() });
  const connectedWrapper = mount(
    <Provider store={mockStore(initailState)}>
      <BrowserRouter>
        {component}
      </BrowserRouter>
    </Provider>
  );
  return connectedWrapper;
};

export default setup;
