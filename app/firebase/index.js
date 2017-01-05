import firebase from 'firebase';
 
try{
 var config = {
    apiKey: "AIzaSyCd4pVrrdY6AW200t9ZefAE__kSD1HNJJk",
    authDomain: "jesus-todo-app.firebaseapp.com",
    databaseURL: "https://jesus-todo-app.firebaseio.com",
    storageBucket: "jesus-todo-app.appspot.com",
    messagingSenderId: "385806768698"
  };
  firebase.initializeApp(config);
}catch(e){

}

export var firebaseRef = firebase.database().ref();
export default firebase;