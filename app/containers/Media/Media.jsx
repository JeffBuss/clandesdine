import React, { Component } from 'react';

import { ReactRpg } from 'react-rpg';

const images = [
  {
    url: 'https://placehold.it/300x300',
  },
  {
    url: 'https://placehold.it/300x300',
  },
  {
    url: 'https://placehold.it/300x300',
  },
  {
    url: 'https://placehold.it/300x300',
  },
  {
    url: 'https://placehold.it/300x300',
  },
  {
    url: 'https://placehold.it/300x300',
  },
  {
    url: 'https://placehold.it/300x300',
  },
  {
    url: 'https://placehold.it/300x300',
  },
  {
    url: 'https://placehold.it/300x300',
  },
  {
    url: 'https://placehold.it/300x300',
  },
  {
    url: 'https://placehold.it/300x300',
  },
];


class Media extends Component {
  render() {
    return (
      <div>
        <ReactRpg imagesArray={images} columns={[ 1, 3, 5 ]} padding={10} />
      </div>
    );
  }
}

export default Media
