$(document).ready(function() {
  $("a.external").attr("target", "_blank").append(' <span class="fa fa-share"></span>');

  $("a[href^=#]").on("click", function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top}, 500);
  });

});