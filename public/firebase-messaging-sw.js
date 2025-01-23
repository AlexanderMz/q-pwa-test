// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
// Replace 10.13.2 with latest version of the Firebase JS SDK.
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js')
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js')

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'push-notification-cb084.firebaseapp.com',
  projectId: 'push-notification-cb084',
  storageBucket: 'push-notification-cb084.firebasestorage.app',
  messagingSenderId: '811825584003',
  appId: '1:811825584003:web:973e20241669cb57d808b6',
  measurementId: 'G-J50FCL38Y8',
})

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging()

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload)
  // Customize notification here
  const notificationTitle = payload.notification.title
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/firebase-logo.png',
  }

  self.registration.showNotification(notificationTitle, notificationOptions)
})
