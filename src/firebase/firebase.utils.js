import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: "AIzaSyDSeGISL0jFZOjuYCZ9Wbo0UoC0PNoHfXc",
	authDomain: "crwn-db-b86e0.firebaseapp.com",
	databaseURL: "https://crwn-db-b86e0.firebaseio.com",
	projectId: "crwn-db-b86e0",
	storageBucket: "crwn-db-b86e0.appspot.com",
	messagingSenderId: "838937219930",
	appId: "1:838937219930:web:4709eeae56607122171963",
	measurementId: "G-GB5Z7NFSV2"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;