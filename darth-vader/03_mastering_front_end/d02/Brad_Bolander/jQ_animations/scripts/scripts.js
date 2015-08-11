$(document).ready(function() {
  $('#one').fadeIn(2000);

  $('#two').mouseenter(function() {
    $(this).animate({
    height: '+=25px';
    background-color: 'orange';
    });
  });

  $('#three').click(function() {

  });


});
