import React, { Component } from 'react';

import { ReactRpg } from 'react-rpg';

const images = [
  { url: 'http://james-oldfield.github.io/thailand/images/girl.adc2e72a.jpg' },
        { url: 'http://james-oldfield.github.io/thailand/images/RecliningBuddha.a1705a9a.jpg' },
        { url: 'http://im.vsco.co/1/52d992e43ad70287923/545e7da07267083a1e8b4662/vsco_110814.jpg?w=709&dpr=2' },
        { url: 'http://im.vsco.co/1/52d992e43ad70287923/53ab2a567167083b658b45df/vsco_062514.jpg?w=300&dpr=2' },
        { url: 'http://im.vsco.co/1/52d992e43ad70287923/53ab2a3a74670831708b4749/vsco_062514.jpg?w=300&dpr=2' },
        { url: 'http://im.vsco.co/1/52d992e43ad70287923/53ab26fd75670897318b464c/vsco_062514.jpg?w=300&dpr=2' },
        { url: 'http://im.vsco.co/1/52d992e43ad70287923/53ab27657467082f588b4939/vsco_062514.jpg?w=300&dpr=2' },
        { url: 'http://im.vsco.co/1/52d992e43ad70287923/53ab26b87267089b1d8b456f/vsco_062514.jpg?w=300&dpr=2' },
        { url: 'http://im.vsco.co/1/52d992e43ad70287923/545e7bab7567081e158b4575/vsco_110814.jpg?w=300&dpr=2' },
];


class Media extends Component {
  render() {
    return (
      <div className="photo-grid">
        <ReactRpg imagesArray={images} columns={ [ 1, 3, 5 ] } padding={10} />
      </div>
    );
  }
}

export default Media;
