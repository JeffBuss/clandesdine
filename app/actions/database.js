import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBHDn1h335ljeF4MLdrFjL2D8WJN95V4MA',
  authDomain: 'clandesdine-6733f.firebaseapp.com',
  databaseURL: 'https://clandesdine-6733f.firebaseio.com',
  storageBucket: 'clandesdine-6733f.appspot.com',
  messagingSenderId: '729519655324',
};

firebase.initializeApp(config);
const database = firebase.database();

export default database;
