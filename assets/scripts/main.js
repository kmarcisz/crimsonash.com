var externalLinks = document.querySelectorAll('a.external');
externalLinks.forEach(function (link) {
  link.setAttribute('target', '_blank');
});

var scrollLinks = document.querySelectorAll("a[href^='#']")

scrollLinks.forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    animateScrollTo(
      document.getElementById(
        e.srcElement.getAttribute('href').substr(1)
      ).offsetTop  
    );
  });  
})
