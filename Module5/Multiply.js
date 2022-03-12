             // Unit of table


             table = GetValueFromUser("table")

             // Write the message into the page
             var el = document.getElementById('blackboard');
             el.innerHTML = GetTableContent(table);

             function GetValueFromUser(valueType) {
               var message = "Enter a number";
               return prompt(message);
             }



             function GetTableContent(table) {
               var i = 1; // Set counter to 1
               var msg = ''; // Message  

               {
                 //Do multiplication
                 while (i < 11) {
                   msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
                   i++;
                 }
               }
               return msg;
             }
