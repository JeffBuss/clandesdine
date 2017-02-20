import React, { Component } from 'react';

export default class Login extends Component {
  render() {
    return (
      <div>
        <input
          type='text'
          onChange={() => console.log('invite code input')}
          placeholder='invite code'
        />
        <button
          onClick={() => console.log('login button')}
        >
          Let me in
        </button>
      </div>
    );
  }
}
