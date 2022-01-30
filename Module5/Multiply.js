var x,y;
      x= prompt("Choose a number");
      y= prompt("Choose anothe number");
      var result = Number(x)++ Number(y);
      alert("The result is","+result+");
      
    </script>

operator = GetValueFromUser("operator");
table = GetValueFromUser("number")

// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = GetTableContent(operator, number);

function GetValueFromUser(valueType) {
  var greetingMessage = 'Hello. How are you?';
  if (valueType == "operator") {
    greetingMessage += "Enter addition or multiplication";
  }
  else
  {
    greetingMessage += "Enter a number";
  }
  return prompt(greetingMessage);
}

function GetTableContent(operator, table) {
  var i = 1;                 // Set counter to 1
 var msg = '<h2>Multiplication Table</h2>';  
  if (operator === 'addition') {
    // Do addition
    while (i < 11) {
      msg += i + ' + ' + table + ' = ' + (i + table) + '<br />';
      i++;
    }
  } else {
    // Do multiplication
    while (i < 11) {
      msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
      i++;
    }
  }
  return msg;
}