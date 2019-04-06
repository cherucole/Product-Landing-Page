$(function () {
  $('.menu-toggle, .fa-times').on('click', function () {
    $('nav').toggleClass('active');
    $('.overlay').toggleClass('menu-open');
  });

  $('.overlay').on('click', function () {
    $('nav').removeClass('active');
    $(this).removeClass('menu-open');
  });
});