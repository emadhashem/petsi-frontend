import firebase from 'firebase/compat/app';

import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBT4KZadfXAAa_QO7XnjmZXvvOij6ajwzQ",
    authDomain: "waddeni-ffc23.firebaseapp.com",
    projectId: "waddeni-ffc23",
    storageBucket: "waddeni-ffc23.appspot.com",
    messagingSenderId: "262050470340",
    appId: "1:262050470340:web:7bd897451f133ce19d2c91",
    measurementId: "G-QMP7X3CX11"
};
firebase.initializeApp(firebaseConfig);

export const storage = firebase.storage();