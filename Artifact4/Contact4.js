


function validate() {
  
  if( document.myForm.Name.value === "" ) {
            alert( "Please provide your first name!" );
            document.myForm.Name.focus() ;
            return false;
         }
  function allLetter(inputtxt)
  {
   var letters = /^[A-Za-z]+$/;
   if(inputtxt.value.match(letters))
     {
      return true;
     }
   else
     {
     alert("message");
     return false;
     }
  }
  
  
 
  if( document.myForm.lname.value === "" ) {
            alert( "Please provide your last name!" );
            document.myForm.lname.focus() ;
            return false;
      }
  
  
  
   if( document.myForm.email.value === "" ) {
            alert( "Please provide your Email!" );
            document.myForm.email.focus() ;
            return false;
      
         }
  
   if( document.myForm.phonenumber.value === "" || isNaN( document.myForm.phonenumber.value ) ||
            document.myForm.phonenumber.value.length != 10 ) {
            
            alert( "Please provide a phonenumber in the format ##########." );
            document.myForm.phonenumber.focus() ;
            return false;
         }
 
  if( document.myForm.username.value === "" ) {
            alert( "Please provide your username" );
            document.myForm.username.focus() ;
            return false;
         }
  if( document.myForm.password.value === "" ) {
            alert( "Please provide your Password" );
            document.myForm.password.focus() ;
            return false;
    
         }
  if( document.myForm.address.value === "" ) {
            alert( "Please provide your Address" );
            document.myForm.address.focus() ;
            return false;
         }
  if( document.myForm.city.value === "" ) {
            alert( "Please provide your City" );
            document.myForm.city.focus() ;
            return false;
         }
  if( document.myForm.State.value === "-1" ) {
            alert( "Please provide your State" );
            
            return false;
         }
  
  if( document.myForm.zip.value === "" || isNaN( document.myForm.zip.value ) ||
            document.myForm.zip.value.length != 5 ) {
            
            alert( "Please provide a zip in the format #####." );
            document.myForm.zip.focus() ;
            return false;
         }
  
  if( document.myForm.country.value == "-1" ) {
            alert( "Please provide your country!" );
            return false;
         }
         return( true );
      }
 
        
   


