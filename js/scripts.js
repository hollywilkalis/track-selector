var greeting = function (_message, _nameInput) {
  return _message + _nameInput;
};

$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    var choice = parseInt($("#goal").val()); //gets choice from goals
    var message = "Thanks for completing this questionnaire ";
    var nameInput = $("input#name").val(); //assigns name from form input
    var greeting = message.concat(nameInput); //concats name with message

    $(".greeting").text(greeting); //assigns greeting to a class

    if (choice === 1) {
      $("#c").show();
      $("#java").hide();
      $("#php").hide();
      $("#ruby").hide();
    } else if (choice === 2) {
      $("#java").show();
      $("#c").hide();
      $("#php").hide();
      $("#ruby").hide();
    } else if (choice === 3) {
      $("#php").show();
      $("#c").hide();
      $("#java").hide();
      $("#ruby").hide();
    } else {
      $("#ruby").show();
      $("#c").hide();
      $("#java").hide();
      $("#php").hide();
    }; //close if/else
  });//close form submission
}); //close document ready
