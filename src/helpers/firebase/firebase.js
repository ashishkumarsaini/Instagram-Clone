import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const app = firebase.initializeApp({
    apiKey: "AIzaSyA0B1QLNkVqIa6waZF32BBjbJ8ikP8XrRU",
    authDomain: "igclone-71dc9.firebaseapp.com",
    databaseURL: "https://igclone-71dc9-default-rtdb.firebaseio.com",
    projectId: "igclone-71dc9",
    storageBucket: "igclone-71dc9.appspot.com",
    messagingSenderId: "831644354558",
    appId: "1:831644354558:web:033eb4b5834e36734622af"
});

export const auth = app.auth();
export const database = app.database();
export default app;