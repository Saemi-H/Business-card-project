import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNbWYbWnY27dh9Gp9lQtLBqzJI5fwicHQ",
  authDomain: "business-card-maker-b0949.firebaseapp.com",
  projectId: "business-card-maker-b0949",
};


const Auth = firebase.initializeApp(firebaseConfig);
export default Auth;