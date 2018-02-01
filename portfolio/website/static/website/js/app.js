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
    $('#django-div').css('margin-left', '0px');
    $('#htmlcss-div').css('margin-left', '0px');
    var skillEl = $('#skills-desc');
    var focusEl = $(this).attr('id');
    var skillsList = [
                 ['python', 'Python is an interpreted high-level programming language known for high-readability and ease of use. Unveiled in 1991 by it\'s creator, Guido van Rossum, Python is designed with elegeance and simplicity in mind. It\'s extensive built-in support for mathematics make it well-suited for data scientists, although they\'re certainly not the only ones using it. As of January, 2018, Python sits as the fourth most popular programming language and has also been used by the likes of Yahoo, Google, NASA, CERN, and Reddit. I tend to use Python when I need to perform data analysis, quickly automate a task on my computer, or work with on a team with a large shared code-base.', 'https://www.python.org/', 'Learn more about Python'],
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
