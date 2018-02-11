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
    $('#sony-div').css('margin-left', '0px');
    var canvasEls = $('canvas');
    var skillEl = $('#skills-desc');
    var focusEl = $(this);
    var skillsList = [
                 ['python', '<p>Python is an interpreted high-level programming language known for high-readability and ease of use. Unveiled in 1991 by it\'s creator, Guido van Rossum, Python is designed with elegeance and simplicity in mind. It\'s extensive built-in support for mathematics make it well-suited for data scientists, although they\'re certainly not the only ones using it. As of January, 2018, Python sits as the fourth most popular programming language and has also been used by the likes of Yahoo, Google, NASA, CERN, and Reddit.</p><br><p>I write in Python when I need to perform data analysis, quickly automate a task on my computer, or work on a team with a large shared code-base.</p>', 'https://www.python.org/', 'Learn more about Python'],
                 ['javascript', '<p>Not to be confused with the popular programming language Java, JavaScript is an interpreted high-level programming language known for providing interactive user-interfaces to web-based applications. Alongside the likes of HTML and CSS, JavaScript is a staple in developing modern websites with built-in support from all major web-browsers. It\'s implementation in webpages is so ubiquitous that it\'d actually be difficult to find a site that doesn\'t employ some level of the language. Beyond it\'s client-side capabilities, companies such as LinkedIn, Uber, Netflix, PayPal, and Ebay take advantage of JavaScript\'s server-side scripting to create fast and scalable back-end architecture.</p><br><p>I write in JavaScript when I need to create feature-rich web applications.</p>', 'https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics', 'Learn more about JavaScript'],
                 ['jquery', '<p>jQuery is a widely-used open-source JavaScript library known for it\'s ability to simplify client-side scripting of HTML. It\'s syntax differs from that of plain (vanilla) JavaScript and is designed to easily manipulate the DOM in webpages, making animations, visual effects, and customizable widgets simple to implement. In fact, the text you\'re reading right now was rendered dynamically using jQuery! Being the most used JavaScript library by far, jQuery is used by companies like Google, Imgur, and MSN, as well as in Microsoft\'s Visual Studio IDE.</p><br><p>I write in jQuery when I want to create flashy and eye-catching animations, easily manipulate the DOM of a webpage, and/or design AJAX applications.</p>', 'https://jquery.com/', 'Learn more about jQuery'],
                 ['django', '<p>Named after the French guitarist Jean "Django" Reinhardt, Django is an open-source web framework written entirely in the programming language Python. Since it\'s public release in 2005 Django has become one of the most popular Python web frameworks in existence. Known for it\'s "batteries included" architecture, Django\'s design allows programmers to worry less about web development and more about an applications core functionality. With the promise of rapid, secure, and scalable development, companies such as Instagram, Mozilla, The Washington Times, and Bitbucket chose to build their applications on the Django framework.</p><br><p>I write on Django when I need to build a large-scale web-application.</p>', 'https://www.djangoproject.com/', 'Learn more about Django']
    ]
    for (var i = 0; i < skillsList.length; i++) {
        if (skillsList[i][0] == focusEl.attr('id')) {
            var skillText = skillsList[i][1];
            if (skillEl.html() != skillText) {
                canvasEls.next().css('color', 'white');
                canvasEls.next().animate({fontSize: '16px'}, 100);
                focusEl.next().animate({fontSize: '1.4em'}, 180);
                focusEl.next().css('color', '#f85c37');
                $('.skills-text').hide().fadeIn();
                skillEl.html(skillText);
                $('#skills-link').attr('href', skillsList[i][2]).text(skillsList[i][3]);
                break;
            }
        }
    }
});
