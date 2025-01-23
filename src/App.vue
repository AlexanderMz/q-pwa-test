<template>
  <router-view />
</template>

<script setup lang="ts">

import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from "firebase/messaging";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "push-notification-cb084.firebaseapp.com",
  projectId: "push-notification-cb084",
  storageBucket: "push-notification-cb084.firebasestorage.app",
  messagingSenderId: "811825584003",
  appId: "1:811825584003:web:973e20241669cb57d808b6",
  measurementId: "G-J50FCL38Y8"
};

// Initialize Firebase
initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
const messaging = getMessaging();
onMessage(messaging, (payload) => {
  console.log('Message received. ', payload);
  // ...
});
getToken(messaging, { vapidKey: 'BIrbkokeyGGkQa59lWw8DRLIQ_SoNw0RJckC7ilDq6ehZkI7Sl3EdFMtuXlod6zvWrgqfNWyB-iu_IEzmXZfTYw' }).then((currentToken) => {
  if (currentToken) {
    // Send the token to your server and update the UI if necessary
    console.log('Token is:', currentToken)
  } else {
    // Show permission request UI
    console.log('No registration token available. Request permission to generate one.');
    // ...
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
  // ...
});
</script>
