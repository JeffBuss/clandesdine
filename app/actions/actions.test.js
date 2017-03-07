import * as actions from './index';

describe('actions', () => {
  it('should create an action to submit a contact form', () => {
    const contact = [{ contactName: 'taytay' }, { contactEmail: 'tman2272@aol.com' }, { contactBody: 'your tests look like garbage jk you passed' }];
    const submitContact = {
      type: 'SUBMIT_CONTACT',
      contact,
    };
    expect(actions.handleContact(contact)).toEqual(submitContact);
  });

  it('should create an action add an event action', () => {
    const newEvent = [{ title: 'Jeff passed mod 3' }, { host: 'Brenna' }, { date: 'wednesday' }, { time: 'late' }, { menu: 'bubbles' }];
    const addNewEvent = {
      type: 'ADD_EVENT',
      newEvent,
    };
    expect(actions.handleAdd(newEvent)).toEqual(addNewEvent);
  });

  it('should should create a delete event action', () => {
    const event = { title: 'Jeff failed mod 3 mourning gathering' };
    const deleteAnEvent = {
      type: 'DELETE_EVENT',
      event,
    };
    expect(actions.deleteEvent(event)).toEqual(deleteAnEvent);
  });
});
