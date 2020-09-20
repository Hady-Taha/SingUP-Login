// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDgGiBG1o48sl6jEWERz5xyHwAZ-LtBn54",
    authDomain: "hext-hadi.firebaseapp.com",
    databaseURL: "https://hext-hadi.firebaseio.com",
    projectId: "hext-hadi",
    storageBucket: "hext-hadi.appspot.com",
    messagingSenderId: "534023342537",
    appId: "1:534023342537:web:3f31a790ba505995170018",
    measurementId: "G-42N6YTFQBW"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


  function login(){
  
    var myemail=document.getElementById("email").value;
    var mypassword=document.getElementById("password").value;


    firebase.auth().signInWithEmailAndPassword(myemail, mypassword).catch(function(error) {
      // Handle Errors here.
      document.getElementById("boo").style.display="block"
      document.getElementById("boo").innerHTML=error.message;
   
      
      // ...
    });

   
};