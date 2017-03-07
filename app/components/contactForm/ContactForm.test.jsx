import React from 'react';
import configureMockStore from 'redux-mock-store';
import { mount  } from 'enzyme';
import ContactForm from './ContactForm';
import { assert, expect } from 'chai';
import { Provider } from 'react-redux';

const fakeStore = configureMockStore()({})

const setup = () => {
  const props = {
    onContactClick: jest.fn(),
  };

  const wrapper = mount(
    <Provider store={fakeStore} >
      <ContactForm {...props} />
    </Provider>,
  );

  const Component = wrapper.find(ContactForm);

  return {
    props,
    Component,
  };
};

describe('ContactForm', () => {
  it('should render something', () => {
    const { Component } = setup();
    expect(Component.length).toEqual(1);
  });

  it('should call the delete function if delete button is clicked', () => {
    const { Component } = setup();
    const submitContact = Component.find('.contact-btn');

    submitContact.simulate('click');

    expect(props.onContactClick).toBeCalled();
  });
});
