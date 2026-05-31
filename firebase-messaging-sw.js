importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');
firebase.initializeApp({
  apiKey: 'AIzaSyALbDTIYzifONaAOf6Vm-HgStxFXIf63_Y',
  authDomain: 'jhss-b6d35.firebaseapp.com',
  projectId: 'jhss-b6d35',
  messagingSenderId: '902175981455',
  appId: '1:902175981455:web:6cde16b67bcdbbedf895fa',
});
const messaging = firebase.messaging();
messaging.onBackgroundMessage((payload) => {
  const n = payload.notification || {};
  self.registration.showNotification(n.title || 'JHS', {
    body: n.body || '',
    data: { link: (payload.fcmOptions && payload.fcmOptions.link) || 'https://junjunny.github.io/read-gmae-real/' },
  });
});
self.addEventListener('notificationclick', (e) => {
  e.notification.close();
  e.waitUntil(clients.openWindow((e.notification.data && e.notification.data.link) || 'https://junjunny.github.io/read-gmae-real/'));
});
