//Backend function
var testNumber = [];

function pingPong(usernumber){
    for(var index = 1;index <=usernumber; index++){

        if (index % 3 === 0 ){
            testNumber.push("ping");
        }

        if (index % 5 === 0 ){
            testNumber.push("pong");
        }
        if (index % 3 === 0  && index % 5 === 0){
            testNumber.push("pingpong");
        }
            
        else {
            testNumber.push(index);
        }
    }
}

  //Front end
$(document).ready(function() {
    //Button click event
    $('form#userpingpong').submit(function(event) {
      event.preventDefault();
      //user input into a var
      var usernumber = parseInt($('input#userinput').val());
      //run function save it in a var
        pingPong(usernumber);
      //display the result
      testNumber.forEach(function(item){
        $('#display').append("<li>" + item + "</li>");
      });

     
    });
  
});