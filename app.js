$(document).ready(function() {
// set var for score element
  var sum = 0 + " Points";

$("#score").html(sum);

  $(document).on("click", "#increase-5", function() {
    // add 5 to sum variable
    // show new sum + 5 in score element
   sum =  sum + 5;

   $("#score").html(sum + " Points");


  });
  $(document).on("click", "#decrease-5", function() {
    if (score - 5>= 0) {
      score = score - 5;
    }

   sum =  sum - 5;
   $("#score").html(sum + " Points");


  });

  var custom = custom-score;

  //$("#custom-score").val();

  $(document).on("click", "#submit-custom-score",
    function() {
    var newScore = $("#custom-score").val();
    var newNumberScore = parsInt("newScore");

    score = newNumberScore;

    $("#score").html(sum + " Points");

    //alert("Ick");


  });
});
