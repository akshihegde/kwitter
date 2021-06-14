// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBKAdq73VZMR9rOPbsa6l0Hi_acGdWbCSk",
      authDomain: "kwitter-30471.firebaseapp.com",
      databaseURL: "https://kwitter-30471-default-rtdb.firebaseio.com",
      projectId: "kwitter-30471",
      storageBucket: "kwitter-30471.appspot.com",
      messagingSenderId: "427236195549",
      appId: "1:427236195549:web:19d0abdc1d984a17142f34"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addroom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  console.log("room name-"+ Room_names);
            row="<div class='room-name' id=" + Room_names + "onclick='redirecttoroomname(this.id)'>#" + Room_names + "</div> <hr>";
            document.getElementById("output").innerHTML += row;      

                  
            });
      });
}
getData();
function redirecttoroomname(name){
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}
function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";
}