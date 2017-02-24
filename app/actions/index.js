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
