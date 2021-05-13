// import * as firebase from 'firebase/app';
import firebase from 'firebase';

import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const config = {
  apiKey: 'AIzaSyDlYTr2m_KQr8hEvGBzbACIJW9-Uo49ylo',
  authDomain: 'eatstagram-bbe34.firebaseapp.com',
  // eslint-disable-next-line @typescript-eslint/naming-convention
  databaseURL: 'https://eatstagram-bbe34.firebaseio.com',
  projectId: 'eatstagram-bbe34',
  storageBucket: 'eatstagram-bbe34.appspot.com',
  messagingSenderId: '421748087924',
  appId: '1:421748087924:web:10483226f13dbcaacd0521',
  measurementId: 'G-J3RM4ZBDXC',
};

const app = firebase.initializeApp(config);

// export const database = app.firestore();
// export const storage = app.storage();
// export const authentication = app.auth();

export default app;
