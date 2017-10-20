$(document).ready(function() {

  $("form#survey").submit(function(event) {
    event.preventDefault()
    var choice = parseInt($("#goal").val());

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
