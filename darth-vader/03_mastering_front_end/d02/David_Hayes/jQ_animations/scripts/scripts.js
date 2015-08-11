// $(document).ready(function() {
//   $('#one').fadeIn(2000);
// });

$('#one').mouseenter(function() {
  $(this).animate({
    height: '-=25px'
  });
});
$('#one').mouseleave(function() {
  $(this).animate({
    height: '+=25px'
  });
});
