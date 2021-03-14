// JavaScript Document
 function ClearFields() {

    document.getElementById("firstName").value = "";
     document.getElementById("lastName").value = "";
     document.getElementById("username").value = "";
     document.getElementById("email").value = "";
     document.getElementById("address").value = "";
     document.getElementById("zip").value = "";
     document.getElementById("cc-name").value = "";
     document.getElementById("cc-number").value = "";
     document.getElementById("cc-expiration").value = "";
     document.getElementById("cc-cvv").value = "";
	 
  	 


 }

 function ClearFieldsTwo(){
    document.getElementById("inputName").value = "";
	document.getElementById("inputLastName").value = "";
    document.getElementById("inputEmail4").value = "";
    document.getElementById("inputAddress").value = "";
    document.getElementById("inputCity").value = "";
    document.getElementById("inputZip").value = "";
    document.getElementById("message").value = "";

 }

 var d = new Date();
      var months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      var days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      document.getElementById("demo").innerHTML = months[d.getMonth()];
      var days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      document.getElementById("demo2").innerHTML = days[d.getDay()];
      document.getElementById("demo1").innerHTML = d.getFullYear();
      document.getElementById("demo4").innerHTML = d.getDate();