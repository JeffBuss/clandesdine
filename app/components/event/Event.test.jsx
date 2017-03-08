import React from 'react';
import configureMockStore from 'redux-mock-store';
import { mount  } from 'enzyme';
import Event from './Event';
import { assert, expect } from 'chai';
import { Provider } from 'react-redux';

const fakeStore = configureMockStore()({})

const setup = (events = null) => {
  const props = {
    event: event,
    id: id,
    deleteEvent: jest.fn(),
  };

  const wrapper = mount(
    <Provider store={fakeStore} >
      <Event {...props} />
    </Provider>,
  );

  const Component = wrapper.find(Event);

  return {
    props,
    Component,
  };
};

describe('Event', () => {
  it('should render something', () => {
    const { Component } = setup();
    expect(Component.length).toEqual(1);
  });

  it('should not have any events by default', () => {
    const { Component } = setup({ event: null });
    const addedEvent = Component.find('.single-event');
    expect(addedEvent.length).toEqual(0);
  });

  it('should call the delete function if delete button is clicked', () => {
    const { Component } = setup();
    const deleteSingleEvent = Component.find('.delete-event-btn');

    deleteSingleEvent.simulate('click');

    expect(props.deleteEvent).toBeCalled();
  });

  it('should delete an event if the delete button on an event is clicked', () => {
    const { Component } = setup({ event: 'fakeevent' });
    const deleteSingleEvent = Component.find('.delete-event-btn');
    const addedEvent = Component.find('.single-event');

    deleteSingleEvent.simulate('click');

    expect(addedEvent.length).toEqual(0);
  });
});

// comment files for instructor review
