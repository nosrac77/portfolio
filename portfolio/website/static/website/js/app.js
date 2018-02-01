'use strict';

$(document).ready(function(){
  $('body').hide().fadeIn();
  $('.header-fade').hide().delay(1000).fadeIn('slow');
  $('.icon-user').css('opacity', '0').delay(1000).fadeTo('slow', 1.00);
  $('#file-icon').css('opacity', '0').delay(1250).fadeTo('slow', 1.00);
  $('.icon-briefcase').css('opacity', '0').delay(1500).fadeTo('slow', 1.00);
  $('.icon-envelope').css('opacity', '0').delay(1750).fadeTo('slow', 1.00);
});

$('canvas').mouseenter(function() {
    var skillEl = $('#skills-desc');
    var focusEl = $(this).attr('id');
    var skillsList = [
                 ['python', 'Python is a language invented by whats-his-face Guido something or other.', 'https://www.python.org/', 'Learn more about Python'],
                 ['javascript', 'JavaScript has been described as the wild-wild west of programming.', 'https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics', 'Learn more about JavaScript']
    ]
    for (var i = 0; i < skillsList.length; i++) {
        if (skillsList[i][0] == focusEl) {
            var skillText = skillsList[i][1];
            if (skillEl.text() != skillText) {
                $('.skills-text').hide().fadeIn();
                skillEl.text(skillText);
                $('#skills-link').attr('href', skillsList[i][2]).text(skillsList[i][3]);
                break;
            }
        }
    }
});
