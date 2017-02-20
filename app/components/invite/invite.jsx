import React, { Component } from 'react';

const Invite = (props) => {
  return (
    <div>
      <input
        type='text'
        onChange={() => console.log('invite input')}
        placeholder='name'
      />
      <button
        onClick={() => console.log('invite button')}
      >
        RSVP
      </button>
    </div>
  );
};

export default Invite;
