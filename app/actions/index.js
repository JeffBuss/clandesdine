export const handleContact = (contact) => {
  return {
    type: 'SUBMIT_CONTACT',
    contact,
  };
};

export const handleAdd = (newEvent) => {
  return {
    type: 'ADD_EVENT',
    newEvent,
  };
};

export const deleteEvent = (event) => {
  return {
    type: 'DELETE_EVENT',
    event,
  };
};
