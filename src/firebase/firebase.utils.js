import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: "AIzaSyCTOr5PD5NIiR5JydEoWP_wyQL9YgsKUeg",
	authDomain: "crwn-db-6084a.firebaseapp.com",
	databaseURL: "https://crwn-db-6084a.firebaseio.com",
	projectId: "crwn-db-6084a",
	storageBucket: "crwn-db-6084a.appspot.com",
	messagingSenderId: "806529976837",
	appId: "1:806529976837:web:688e47dd0df25614e7ea6c"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;