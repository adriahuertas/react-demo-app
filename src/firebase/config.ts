// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDUjw9kZ2Y9H-D7ykA1lfaQ9aY1t27KhPg',
  authDomain: 'react-demo-app-6ff5c.firebaseapp.com',
  projectId: 'react-demo-app-6ff5c',
  storageBucket: 'react-demo-app-6ff5c.appspot.com',
  messagingSenderId: '313823201690',
  appId: '1:313823201690:web:38181520a2651a9ce5d223'
}

// Initialize Firebase
initializeApp(firebaseConfig)

const auth = getAuth()

export { auth }
