// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB2H4Wa9Hcyy9vM_HBephROkEh96rdk2Jo",
    authDomain: "kwitter-project-1d98b.firebaseapp.com",
    databaseURL: "https://kwitter-project-1d98b-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-1d98b",
    storageBucket: "kwitter-project-1d98b.appspot.com",
    messagingSenderId: "961768694989",
    appId: "1:961768694989:web:1d34f5435199b62e1d7584"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("user");

document.getElementById("user").innerHTML = "welcome " + username + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code

  //End code
  });});}
getData();