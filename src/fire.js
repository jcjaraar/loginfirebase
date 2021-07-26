import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyCr1ZE6JM5AsMybXKSKnsl6md2B6M0679E",
    authDomain: "project-thelma.firebaseapp.com",
    projectId: "project-thelma",
    storageBucket: "project-thelma.appspot.com",
    messagingSenderId: "274203368917",
    appId: "1:274203368917:web:fc3166ed9023b7b058315c",
    measurementId: "G-GXWV52SQCZ"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;