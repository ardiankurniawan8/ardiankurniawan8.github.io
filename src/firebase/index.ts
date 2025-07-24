import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = ({
  apiKey: 'AIzaSyC4D4Tc8B-BMRLLk4pIGzv_Dhwa67zoExk',
  authDomain: 'web-profile-ca2f6.firebaseapp.com',
  projectId: 'web-profile-ca2f6',
  storageBucket: 'web-profile-ca2f6.firebasestorage.app',
  messagingSenderId: '834606427610',
  appId: '1:834606427610:web:33a37808be75fac8f924e3',
  measurementId: 'G-ETT9FTXYCX',
})

export const firebaseApp = initializeApp(firebaseConfig)
const analytics = getAnalytics(firebaseApp)
