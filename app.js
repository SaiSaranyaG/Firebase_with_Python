var $ = jQuery;
var timestamp = Number(new Date()); //this will server as a unique ID for each user
var form = document.querySelector("form");

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDpHaI6QnsFpUU7rjp_hqLohtMBz8o6Lqw",
  authDomain: "python-backendops.firebaseapp.com",
  databaseURL: "https://python-backendops.firebaseio.com",
  projectId: "python-backendops",
  storageBucket: "python-backendops.appspot.com",
  messagingSenderId: "228935680826"
};
firebase.initializeApp(config);

var database = firebase.database();
      form.addEventListener("submit", function(event) {
        event.preventDefault();
        var ary = $(form).serializeArray();
        var obj = {};
        for (var a = 0; a < ary.length; a++) obj[ary[a].name] = ary[a].value;
          console.log("JSON",obj);
        var form_data = new FormData();
        firebase.database().ref('users/' + timestamp).set(obj);
        database.ref('users/' + timestamp).once('value').then(function(snapshot) {
        console.log("Received value",snapshot.val());
    });
    document.getElementById("form").reset();
});
