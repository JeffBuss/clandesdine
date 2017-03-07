import React from 'react';
import configureMockStore from 'redux-mock-store';
import { mount  } from 'enzyme';
import Navbar from './Navbar';
import { assert, expect } from 'chai';
import { Provider } from 'react-redux';

const fakeStore = configureMockStore()({})

const setup = (profile = null) => {
  const props = {
    profile: profile,
  };

  const wrapper = mount(
    <Provider store={fakeStore} >
      <Navbar {...props} />
    </Provider>,
  );

  const Component = wrapper.find(Navbar);

  return {
    props,
    Component,
  };
};

describe('Navbar', () => {
  it('should render something', () => {
    const { Component } = setup();
    expect(Component.length).toEqual(1);
  });

  it('should display sign out button if user is signed in', () => {
    const { Component } = setup({ profile: 'fakeprofile' });
    const signOut = Component.find('.sign-out-btn');
    expect(signOut.length).toEqual(1);
  });

  it('should display the menu dropdown', () => {
    const { Component } = setup();
    const menu = Component.find('.menu-dropdown');
    expect(menu.length).toEqual(1);
  });

  it('display all the menu items when menu bar is clicked', () => {
    const { Component } = setup();
    const menu = Component.find('.menu-dropdown');
    const about = Component.find('.about-dropdown');
    const media = Component.find('.media-dropdown');
    const faqs = Component.find('.faqs-dropdown');
    const contact = Component.find('.contact-dropdown');

    menu.simulate('click');

    expect(about.length).toEqual(1);
    expect(media.length).toEqual(1);
    expect(faqs.length).toEqual(1);
    expect(contact.length).toEqual(1);
  });
});
