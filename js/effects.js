sel = $( "#mainNav, #mainNav a, #mainNav div, #mainNav button,  header, #navbarResponsive" )
sel.hover(function() {
  $('header').addClass('blur');
});

sel.mouseout(function() {
  $('header').removeClass('blur');
});