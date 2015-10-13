$(document).ready(function() {
  $("a.external").attr("target", "_blank");

  $("a[href^=#]").on("click", function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top}, 500);
  });

});