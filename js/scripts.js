var greeting = function (_message, _nameInput) {
  return _message + _nameInput;
};

$(document).ready(function() {
  $("form#survey").submit(function(event) {
    debugger
    event.preventDefault()
    var choice = parseInt($("#goal").val());
    var message = "Thanks for completing this questionnaire, ";
    var nameInput = $("input#name").val();
    var greeting = message.concat(nameInput);

    $(".greeting").text(greeting);

    if (choice === 1) {
      $("#c").show();

    } else if (choice === 2) {
      $("#java").show();

    } else if (choice === 3) {
      $("#php").show();

    }
    else {
      $("#ruby").show();

    }
  });

});
