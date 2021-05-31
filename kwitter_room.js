
  // Initialize Firebase
  var firebaseConfig = {
    apiKey: "AIzaSyAThoxEQWRQ7KO-_auP1RP9fbz2Q4OmpCc",
    authDomain: "practice-activity-c94-f6540.firebaseapp.com",
    databaseURL: "https://practice-activity-c94-f6540-default-rtdb.firebaseio.com",
    projectId: "practice-activity-c94-f6540",
    storageBucket: "practice-activity-c94-f6540.appspot.com",
    messagingSenderId: "387713208287",
    appId: "1:387713208287:web:fbca88aff87d7862597e6a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function adduser() {
    get_name=document.getElementById("Enter").value;
    firebase.database().ref("/").child(get_name).update({
        purpose:"adding user"
    });
    
}

  
  login_name=localStorage.getItem("user_name");
document.getElementById("welcome").innerHTML="Welcome " + login_name + "!";
function addroom() {
      room=document.getElementById("roomname").value;
      firebase.database().ref("/").child(room).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room);
      window.location="kwitter_page.html";
      
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 //Start code
 row="<div class='room_name' id='" + Room_names + "'onclick='redirectetoroomname(this.id)'>#" + Room_names + "</div><hr>";
document.getElementById("output").innerHTML+=row;
 //End code
 });});}
getData();
function redirectetoroomname(name) {
 localStorage.setItem("room_name",name);
 document.getElementById()
 window.location="kwitter_page.html";
 
}
function logout() {
 localStorage.removeItem("user_name");
 localStorage.removeItem("room_name");
 window.location="kwitter.html";
 
}

