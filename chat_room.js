
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyBlA2tytro5Axa3xigH_yMZgm4T4Gcsw-s",
      authDomain: "bigchatapp-9b5dd.firebaseapp.com",
      databaseURL: "https://bigchatapp-9b5dd-default-rtdb.firebaseio.com",
      projectId: "bigchatapp-9b5dd",
      storageBucket: "bigchatapp-9b5dd.appspot.com",
      messagingSenderId: "405343828891",
      appId: "1:405343828891:web:4a9d4296af35060a98ff3e",
      measurementId: "G-1GKFHT4WLC"
    };
    
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
            
      })
      localStorage.setItem("room_name",room_name);
      window.location="chat_page.html";
      
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - "+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      
      //End code
      });});}
getData();


function redirecttoroomname(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="chat_page.html"
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
