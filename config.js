
import firebase from 'firebase';

// Konfigurasi Firebase TodosApp
const firebaseConfig = {
  apiKey: "AIzaSyC2zkd5ri0TKqCvCoPiegpgKLGLqtlXHek",
  authDomain: "todosapp-5e170.firebaseapp.com",
  projectId: "todosapp-5e170",
  storageBucket: "todosapp-5e170.firebasestorage.app",
  messagingSenderId: "943415330690",
  appId: "1:943415330690:web:da0f8a97de91671484719b",
  measurementId: "G-110E973BZY"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
