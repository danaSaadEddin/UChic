import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC9o3mOxXQV0Ytt5TiY9tWZO3A7_4fyNHg",
    authDomain: "youchic-d8cea.firebaseapp.com",
    databaseURL: "https://youchic-d8cea.firebaseio.com",
    projectId: "youchic-d8cea",
    storageBucket: "youchic-d8cea.appspot.com",
    messagingSenderId: "216111886987",
    appId: "1:216111886987:web:530deaa885fa73c569da8e",
    measurementId: "G-XY3BX7F4CY"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserDoc = async (userAuth, restFunctions) => {
    if (!userAuth) { return; }
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const userSnap = await userRef.get();
    if (!userSnap.exists) {
        const createdTime = new Date();
        const { displayName, email } = userAuth;
        try {
            await userRef.set({
                displayName,
                email,
                createdTime
            }).then(() => {
                console.log('new user document has been added')
            })
        } catch (err) {
            console.log(err.message)
        }

    }
    return userRef;
}
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    'prompt': 'select_account'
});
export const signInWithPopup = () => auth.signInWithPopup(provider);
export default firebase;