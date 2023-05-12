// wait until page is loaded
$(document).ready(function () {
  $("#show-more-btn").click(function () {

    // targeted elements load with bootstrap class "d-none" which makes them hidden by default. 
    // When the monitered button is clicked it toggles the class, making the elements visible.
    $(".more-cards").toggleClass("d-none");
  });
});