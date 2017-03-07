import React from 'react';
import configureMockStore from 'redux-mock-store';
import { mount  } from 'enzyme';
import Home from './Home';
import { assert, expect } from 'chai';
import { Provider } from 'react-redux';

const fakeStore = configureMockStore()({})

const setup = (profile = null) => {
  const props = {
    profile: profile,
  };

  const wrapper = mount(
    <Provider store={fakeStore} >
      <Home {...props} />
    </Provider>,
  );

  const Component = wrapper.find(Home);

  return {
    props,
    Component,
  };
};

describe('Home', () => {
  it('should render something', () => {
    const { Component } = setup();
    expect(Component.length).toEqual(1);
  });

  it('should display login button if user is not signed in', () => {
    const { Component } = setup({ profile: null });
    const login = Component.find('.login');
    expect(login.length).toEqual(1);
  });

  it('should display the events list if user is signed in', () => {
    const { Component } = setup({ profile: 'fakeprofile' });
    const eventsList = Component.find('.events-list');
    expect(eventsList.length).toEqual(1);
  });
});
