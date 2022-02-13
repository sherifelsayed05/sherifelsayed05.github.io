function validation(){
  
  var name = document.getElementById("name").value;
  var lname = document.getElementById("lname").value;
  var email = document.getElementById("email").value;
  var phonenumber = document.getElementById("phonenumber").value;
  var username = document.getElementById("username").value;
  var password" = document.getElementById("password").value;
  var address = document.getElementById("address").value;
  var city = document.getElementById("city").value;
  var state = document.getElementById("state").value;
  var zipcode = document.getElementById("zipcode").value;
  var country = document.getElementById("country").value;
  var comments = document.getElementById("comments").value;
  var error_message = document.getElementById("error_message");
  var text; 

error_message.style.padding = "10px"; 
  if (name.length <5){
    text = "Please Enter a Valid Name "
    error_message.innerHTMl = text; 
    return false;
  }
if (lname.length <5){
    text = "Please Enter a Valid Last Name ";
    error_message.innerHTMl = text; 
    return false;
  }
  if (email.indexof("@") == -1 || email.length < 6){
    text = "Please Enter a Valid Email Address ";
    error_message.innerHTMl = text; 
    return false;
  }
  if (isNaN(phone) || phone.length !=10){
    text = "Please Enter a Valid Phone Number ";
    error_message.innerHTMl = text; 
    return false;
  }
  if (lname.length <5){
    text = "Please Enter a Valid Last Name ";
    error_message.innerHTMl = text; 
    return false;
  }
  if (lname.length <5){
    text = "Please Enter a Valid Last Name ";
    error_message.innerHTMl = text; 
    return false;
  }
  alert ("Form Submitted!)")
  return true; 
}
  


  
