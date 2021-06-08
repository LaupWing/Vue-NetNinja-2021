import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
   apiKey: "AIzaSyCHWoIZruk0MU7lhayy91rrWrCuR4evmC8",
   authDomain: "udemy-vue-netninja-2021.firebaseapp.com",
   projectId: "udemy-vue-netninja-2021",
   storageBucket: "udemy-vue-netninja-2021.appspot.com",
   messagingSenderId: "404306512646",
   appId: "1:404306512646:web:c3b8f5de5ee8ab0f7aac87",
   measurementId: "G-L5KJWTF6TV"
};

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export {
   projectFirestore,
   timestamp
}