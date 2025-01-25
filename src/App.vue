<template>
  <router-view />
</template>

<script setup lang="ts">

import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { firebaseConfig, vapidKey } from './config';
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Initialize Firebase
initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const strUrl: string = window.location.origin + window.location.pathname + 'src-pwa/firebase-messaging-sw.js';
console.log(strUrl)
new SharedWorker(new URL(strUrl));
// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
const messaging = getMessaging();
onMessage(messaging, (payload) => {
  console.log('Message received. ', payload);
  // ...
});
getToken(messaging, { vapidKey  }).then((currentToken) => {
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
// if ("serviceWorker" in navigator) {
//   navigator.serviceWorker
//     .register("firebase-messaging-sw.js")
//     .then(function(registration) {
//       console.log("Registration successful, scope is:", registration.scope);
//     })
//     .catch(function(err) {
//       console.log("Service worker registration failed, error:", err);
//     });
// }

// const registerServiceWorker = async () => {
//   if ('serviceWorker' in navigator) {
//     try {
//       const registration = await navigator.serviceWorker.register(
//         '/src/firebase-messaging-sw.js',
//         {
//           scope: '/src/',
//         }
//       );
//       if (registration.installing) {
//         console.log('Service worker installing');
//       } else if (registration.waiting) {
//         console.log('Service worker installed');
//       } else if (registration.active) {
//         console.log('Service worker active');
//       }
//     } catch (error) {
//       console.error(`Registration failed with ${error}`);
//     }
//   }
// };

// registerServiceWorker().then()

</script>
