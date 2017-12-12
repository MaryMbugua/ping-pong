//Backend function
function pingPong(usernumber) {
    if (number % 3 === 0 ){
      return "ping";
    }

    if (number % 5 === 0 ){
        return "pong";
      }
      if (number % 3 === 0  && number % 5 === 0){
        return "pingpong";
      }
    
     else {
      return number;
    }
  
  }

  //Front end
  $(document).ready(function() {
    //Button click event
    $('#submitbutton').click(function(event) {
      event.preventDefault();
      //user input into a var
      var year = parseInt($('#userinput').val());
      //run function save it in a var
      var result = pingPong(usernumber);
      //display the result
      $('#display').html(result);
    });
  
  });