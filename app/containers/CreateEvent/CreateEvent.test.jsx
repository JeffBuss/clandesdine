import React from 'react';
import configureMockStore from 'redux-mock-store';
import { mount  } from 'enzyme';
import CreateEvent from './CreateEvent';
import { assert, expect } from 'chai';
import { Provider } from 'react-redux';

const fakeStore = configureMockStore()({})

const setup = (events = null) => {
  const props = {
    events: events,
  };

  const wrapper = mount(
    <Provider store={fakeStore} >
      <CreateEvent {...props} />
    </Provider>,
  );

  const Component = wrapper.find(CreateEvent);

  return {
    props,
    Component,
  };
};

describe('CreateEvent', () => {
  it('should render something', () => {
    const { Component } = setup();
    expect(Component.length).toEqual(1);
  });

  it('should display the events list if user is signed in', () => {
    const { Component } = setup({ events: 'fakeprofile' });
    const eventsList = Component.find('.events-list');
    expect(eventsList.length).toEqual(1);
  });

  it('should not have any events by default', () => {
    const { Component } = setup({ events: null });
    const addedEvent = Component.find('.single-event');
    expect(addedEvent.length).toEqual(0);
  });

  it('should add an event if the NewEvent button is clicked', () => {
    const { Component } = setup({ events: null });
    const NewEvent = Component.find('.new-event-button');
    const addedEvent = Component.find('.single-event');

    NewEvent.simulate('click');

    expect(addedEvent.length).toEqual(1);
  });
});

// comment files for instructor review
