import firebase from 'firebase';

var config = {
  apiKey: 'AIzaSyDjkiJWzcWNE-VTvRr5BA1HiJTXgqK2_j4',
  authDomain: 'first-flight-82057.firebaseapp.com',
  databaseURL: 'https://first-flight-82057.firebaseio.com',
  projectId: 'first-flight-82057',
  storageBucket: '',
  messagingSenderId: '479650499516'
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
