WebFontConfig = {
    google: { families: [ 'Source+Sans+Pro:300:latin' ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();

$(document).on('ready', function() {

  $('.one').on('click', function() {

    var leftAmount = ( $(this).attr('style') == 'left: 150px;'  ) ? '-=150px' : '+=150px';

    console.log( $(this).position().left )
    console.log(leftAmount)

    $(this).animate({
      left: leftAmount
    });

  });

  $('.two').on('click', function() {

    $(this).animate({
      opacity: 0
    }).animate({
      opacity: 1
    });

  });

  $('.three').on('click', function() {

    $(this).animate({
      top: '+=25px'
    }).animate({
      top: '-=50px'
    }).animate({
      top: '+=25px'
    });

  });


});
