'use strict';

$(document).ready(function(){
  $('body').hide().fadeIn();
  $('.header-fade').hide().delay(1000).fadeIn('slow');
  $('.icon-user').css('opacity', '0').delay(1000).fadeTo('slow', 1.00);
  $('#file-icon').css('opacity', '0').delay(1250).fadeTo('slow', 1.00);
  $('.icon-briefcase').css('opacity', '0').delay(1500).fadeTo('slow', 1.00);
  $('.icon-envelope').css('opacity', '0').delay(1750).fadeTo('slow', 1.00);
  $('.skills-text').hide();
});

$('#python').mouseenter(function() {
    var skillEl = $('#skills-desc');
    var skillText = 'Python is a language invented by whats-his-face Guido something or other.';
    if (skillEl.text() != skillText) {
        $('.skills-text').hide().fadeIn();
        skillEl.text(skillText);
        $('#skills-link').attr('href', 'https://www.python.org/').text('Learn more about Python');    
    }
});
$('#javascript').mouseenter(function() {
    var skillEl = $('#skills-desc');
    var skillText = 'JavaScript has been described as the wild-wild west of programming.';
    if (skillEl.text() != skillText) {
        $('.skills-text').hide().fadeIn();
        skillEl.text(skillText);
        $('#skills-link').attr('href', 'https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics').text('Learn more about JavaScript');
    }
});
