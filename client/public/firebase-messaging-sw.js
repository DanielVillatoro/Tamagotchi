importScripts("https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js");

// Initialize Firebase
firebase.initializeApp({
    apiKey: "AIzaSyC1J5BztS7F0f9JnbLH5cX6e1K1bL2sDZM",
    authDomain: "bytebeasts-test.firebaseapp.com",
    projectId: "bytebeasts-test",
    storageBucket: "bytebeasts-test.firebasestorage.app",
    messagingSenderId: "1006066833674",
    appId: "1:1006066833674:web:23c4ce8b06a634bafc02f3",
    measurementId: "G-JC5X3YXGQE"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log("[firebase-messaging-sw.js] Received background message:", payload);
    console.log("[firebase-messaging-sw.js] Notification permission status:", Notification.permission);

    // Extract notification details
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: "/original-dark.png", // Ensure this path is correct and accessible
        data: { url: "https://your-app.com/play" } // Optional: URL to open when notification is clicked
    };

    // Show the notification
    self.registration.showNotification(notificationTitle, notificationOptions).catch((error) => {
        console.error("[firebase-messaging-sw.js] Failed to show notification:", error);
    });
});




// importScripts("https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js");
// importScripts("https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js");

// // Initialize Firebase
// firebase.initializeApp({
//     apiKey: "AIzaSyC1J5BztS7F0f9JnbLH5cX6e1K1bL2sDZM",
//     authDomain: "bytebeasts-test.firebaseapp.com",
//     projectId: "bytebeasts-test",
//     storageBucket: "bytebeasts-test.firebasestorage.app",
//     messagingSenderId: "1006066833674",
//     appId: "1:1006066833674:web:23c4ce8b06a634bafc02f3",
//     measurementId: "G-JC5X3YXGQE"
// });

// const messaging = firebase.messaging();

// messaging.onBackgroundMessage((payload) => {
//     console.log("[firebase-messaging-sw.js] Received background message:", payload);
//     const notificationTitle = payload.notification.title;
//     const notificationOptions = {
//         body: payload.notification.body,
//         icon: "/original-dark.png",
//     };
//     self.registration.showNotification(notificationTitle, notificationOptions);
// });