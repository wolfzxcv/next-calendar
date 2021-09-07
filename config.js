/** example */
// var firebaseConfig = {
//   apiKey: "API_KEY",
//   authDomain: "PROJECT_ID.firebaseapp.com",
//   databaseURL: "https://PROJECT_ID.firebaseio.com",
//   projectId: "PROJECT_ID",
//   storageBucket: "PROJECT_ID.appspot.com",
//   messagingSenderId: "SENDER_ID",
//   appId: "APP_ID",
//   measurementId: "G-MEASUREMENT_ID",
// };

// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCk6jDCbSX-Ioj47TjtCvlQh48LKPf0Vb0',
  authDomain: 'report-system-385be.firebaseapp.com',
  projectId: 'report-system-385be',
  storageBucket: 'report-system-385be.appspot.com',
  messagingSenderId: '862977532012',
  appId: '1:862977532012:web:5bddc5b3604d1f80453849',
  measurementId: 'G-K27YYPC209'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
