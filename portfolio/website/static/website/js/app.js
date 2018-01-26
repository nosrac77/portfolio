'use strict';

$(document).ready(function(){
  $('body').hide().fadeIn();
  $('.header-fade').hide().delay(1000).fadeIn('slow');
  $('.icon-user').css('opacity', '0').delay(1000).fadeTo('slow', 1.00);
  $('.icon-file').css('opacity', '0').delay(1200).fadeTo('slow', 1.00);
  $('.icon-briefcase').css('opacity', '0').delay(1400).fadeTo('slow', 1.00);
  $('.icon-envelope').css('opacity', '0').delay(1600).fadeTo('slow', 1.00);
});
