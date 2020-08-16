import App from 'firebase/app';
import 'firebase/auth';
import 'firebase/firebase-firestore'

const firebaseConfig = {
	apiKey: "AIzaSyBMd_LaR3uJP5NpCPlNAlx7hl1fm21y9xM",
    authDomain: "eateria-41ded.firebaseapp.com",
    databaseURL: "https://eateria-41ded.firebaseio.com",
    projectId: "eateria-41ded",
    storageBucket: "eateria-41ded.appspot.com",
    messagingSenderId: "613574223317",
    appId: "1:613574223317:web:1f0d41b1ba451c8173c95c"
  };


  class Firebase {
	constructor() {
		App.initializeApp(firebaseConfig);
		this.auth = App.auth();
		this.db = App.firestore();
	}

	login(email, password) {
		return this.auth.signInWithEmailAndPassword(email, password);
	}

	async register(name, lastName, email, password) {
		await this.auth.createUserWithEmailAndPassword(email, password)
		return this.auth.currentUser.updateProfile({
			displayName: `${name} ${lastName}`
		})
	}

	logout() {
		return this.auth.signOut();
	}	

	getUser(){
		return this.auth.currentUser;
	}

	authChange(user){
		this.auth.onAuthStateChanged(user);
	}

	resetPassword(email){					  
		return this.auth.sendPasswordResetEmail(email);
	}

	emailVerification(){
		return this.auth.currentUser.sendEmailVerification();            
	}
	// addQuote(quote) {
	// 	if(!this.auth.currentUser) {
	// 		return alert('Not authorized')
	// 	}

	// 	return this.db.doc(`User/${this.auth.currentUser.uid}`).set({
	// 		quote
	// 	})
	// }

	// isInitialized() {
	// 	return new Promise(resolve => {
	// 		this.auth.onAuthStateChanged(resolve)
	// 	})
	// }

	// getCurrentUsername() {
	// 	return this.auth.currentUser && this.auth.currentUser.displayName
	// }

	// async getCurrentUserQuote() {
	// 	const quote = await this.db.doc(`User/${this.auth.currentUser.uid}`).get()
	// 	return quote.get('quote')
	// }
}

export default new Firebase();