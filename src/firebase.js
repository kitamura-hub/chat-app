import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAT8MkB0-eDLsP5D-P4cAGjtXwSlXjOEBE",
  authDomain: "chat-app2021-0115.firebaseapp.com",
  projectId: "chat-app2021-0115",
  storageBucket: "chat-app2021-0115.appspot.com",
  messagingSenderId: "428856084684",
  appId: "1:428856084684:web:6cf0a0fb723cfd36aeda69"
};
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const messagesRef = database.ref('messages');  //messagesというリファレンスを作成

export const pushMessage = ({ name, text }) => {
  messagesRef.push({ name, text });
}