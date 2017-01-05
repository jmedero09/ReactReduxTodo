import firebase from 'firebase';
 
 var config = {
    apiKey: "AIzaSyCd4pVrrdY6AW200t9ZefAE__kSD1HNJJk",
    authDomain: "jesus-todo-app.firebaseapp.com",
    databaseURL: "https://jesus-todo-app.firebaseio.com",
    storageBucket: "jesus-todo-app.appspot.com",
    messagingSenderId: "385806768698"
  };
  firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

  firebaseRef.set({
  	
  	isRunning:true,
  	app:{
  		name:'Jesus Todo App',
  		version:'1.0.0'
  	},
  	user:{
  		name:'Jesus',
  		age:29
  	},
  	todos:{
  		'123abcds':{
  		text:'Film some vids'
  		}
  	}
});






  
//Array Challenge-----------------------------------------------
var todosRef = firebaseRef.child('todos');

todosRef.on('child_added',(snapshot)=>{
	console.log('child_added',snapshot.key,snapshot.val());
});

todosRef.push({
	text:'Eat my shorts'
});

todosRef.push({
	text:'yerrrrrrr'
});


//Dealing a with arrays-----------------------------------------

 // var notesRef = firebaseRef.child('notes');

 // notesRef.on('child_added',(snapshot)=>{
 // 	console.log('child_added',snapshot.key,snapshot.val());
 // });
 // notesRef.on('child_changed',(snapshot)=>{
 // 	console.log('child_changed',snapshot.key,snapshot.val());
 // });

 // notesRef.on('child_removed',(snapshot)=>{
 // 	console.log('child_removed',snapshot.key,snapshot.val());
 // });

 // var newNoteRef = notesRef.push();

 // newNoteRef.set({
 // 	text:'walk the dog'
 // });
 // var newNoteRef = notesRef.push({

 // 	text:'walk the dog!'
 // });

 // console.log('my id is ',newNoteRef.key)




// firebaseRef.child('user').on('value',(snapshot)=>{
// 	console.log('got value',snapshot.val());
// });

// firebaseRef.update({
// 	'user/name':'Gee'
// });
// firebaseRef.update({
// 	'app/name':'Todizo Application'
// });

//Fetching data--------------------------------------
  // firebaseRef.on('value',(snapshot)=>{
  // 	console.log('got value',snapshot.val());
  // });

  // firebaseRef.off();

  // firebaseRef.update({isRunning:false});

//One item from the database--------------------------
// firebaseRef.child('app').once('value').then((snapshot)=>{
// 	console.log('Got entire database',snapshot.key,snapshot.val());
// },
// (e)=>{
// 	'unable to fetch data'
// })

//Everything on Database--------------------------------
// firebaseRef.once('value').then((snapshot)=>{
// 	console.log('Got entire database',snapshot.val())
// },
// (e)=>{
// 	'unable to fetch data'
// })

//Remove-------------------------------------------
//firebaseRef.child('app/name').remove();

// firebaseRef.child('app').update({
// 	version:'2.0',
// 	name:null
// })

// firebaseRef.child('user/age').remove();


// firebaseRef.update({
// 	isRunning:null
// })


//Update-------------------------------------

  // firebaseRef.update({
  // 	isRunning:false,
  // 	'app/name':'Todo Apllication Boi'
  // });

  // firebaseRef.child('app').update({
  // 	name:'This is an Application son'
  // }).then(()=>{
  // 	console.log('Update worked');
  // },(e)=>{
  // 	console.log('update failed');
  // })

// firebaseRef.update({
// 	'app/name':'Todo Application',
// 	'user/name':'Gee'
// })

// firebaseRef.child('app').update({name:'Todo App'});
// firebaseRef.child('user').update({name:'Gee'});






