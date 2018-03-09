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
                 ['django', '<p>Named after the French guitarist Jean "Django" Reinhardt, Django is an open-source web framework written entirely in the programming language Python. Since it\'s public release in 2005 Django has become one of the most popular Python web frameworks in existence. Known for it\'s "batteries included" architecture, Django\'s design allows programmers to worry less about web development and more about an applications core functionality. With the promise of rapid, secure, and scalable development, companies such as Instagram, Mozilla, The Washington Times, and Bitbucket chose to build their applications on the Django framework.</p><br><p>I write on Django when I need to build a large-scale web-application.</p>', 'https://www.djangoproject.com/', 'Learn more about Django'],
                 ['node', '<p>Node.js is an open-source JavaScript runtime environment built in 2009 by software engineer Ryan Dahl. In contrast to modern thread-based networking systems, Node.js has asynchronous and event-driven architecture designed to handle many concurrent connections and provide higher efficiency and scalability. The environment is noted for granting the programming language JavaScript (which was traditionally limited to client-side scripting) the ability to execute server-side scripts, bolstering the "JavaScript Everywhere" paradigm and allowing all aspects of web applications to be written entirely in JavaScript. Other than the companies listed under the JavaScript description, the likes of GoDaddy, Groupon, IBM, Voxer, and Yahoo! all chose to build their applications using Node.js.</p><br><p>I write on Node.js when fast and efficient web-applications are a priority.</p>', 'https://nodejs.org/en/', 'Learn more about Node.js'],
                 ['pyramid', '<p>Developed as part of the Pylons Project, Pyramid is an open-source web framework written entirely in Python. Claiming to be the "Goldilocks Solution", being midway between a micro-framework and a mega-framework, Pyramid is a mid-weight choice for developers seeking more flexibility over their server-side architecture. If you\'re looking for a framework without a multitude of built-ins, and you don\'t mind doing the leg-work necessary to get a templating style, a URL structure, or a database, Pyramid may be the option for you. Companies such as SurveyMonkey, Yelp, Environmental Health News, Majerti, and VantagePoint all chose the Pyramid framework to develop their web applications.</p><br><p>I write on Pyramid when I need more flexibility in my server-side architecture.</p>', 'https://trypyramid.com/', 'Learn more about Pyramid'],
                 ['html', '<p>In the world of Web Development, there may be no duo more iconic than HTML (Hypertext Mark-up Language) and CSS (Cascading Style Sheets). The undeniable standard markup language for creating webpages and web applications, HTML describes the structure and content for the webpages that employ it (which is nearly every webpage on the internet) through tags that represent HTML elements. While HTML is busy telling your browser what to interpret, CSS is a style sheet language designed to describe how a markup document should be presented. According to statistics from W3techs.com CSS is used in a staggering 95.7% of all websites - and for good reason! It\'s ability to style layout, colors, text, organization, and general appearance enable a powerful separation of presentation and structure. It also allows quick and easy graphic design changes.</p><br><p>I write in HTML and CSS when developing any webpage.</p>', 'https://www.w3.org/standards/webdesign/htmlcss', 'Learn more about HTML/CSS'],
                 ['bootstrap', '<p>Released as an open-source project in 2011, Bootstrap is a free front-end library used to design websites and web applications. Originally called Twitter Blueprint, Boostrap was originally intended for use as an internal interface development toolkit in order to document and share common design patterns within the company Twitter. Created by the Twitter developers Mark Otto and Jacob Thornton, it has since grown to become the most popular HTML, CSS, and JavaScript library on the planet and is the second most starred project on GitHub. Bootstrap offers themes, templates, responsive layouts, and a powerful grid system that can make creating beautiful, modern-looking webpages a simple process. With all of this in mind it\'s no wonder that organizations such as the NBA, Indeed, Walmart, Target, and Bloomberg Business all used Bootstrap to design their websites.</p><br><p>I use Bootstrap at times when web design must be quick and efficient.</p>', 'https://getbootstrap.com/', 'Learn more about Boostrap'],
                 ['sql', '<p>Originally created in the early 1970\'s by Donald D. Chamberlin and Raymond F. Boyce, SQL, or Structured Query Language, is a programming language and model designed to interact with Relational Database Management Systems (RDBMS). Recognized as a standard by ANSI (American National Standards Institute) in 1986, SQL is widely considered the standalone language used to access or modify both the information stored in relational databases as well as the databases themselves. Although it has many alternatives, such as Datalog, Object Query Language, and XQuery, SQL remains the most popular. An important note is that it\'s recognition as a standard by ANSI doesn\'t make SQL\'s syntax uniform across all platforms. Several versions of SQL exist, including MySQL, Postgres, SQL Server, and Oracle, to name a few. Despite their variations and, in some cases, propriety extensions, all versions of SQL must support the five major commands SELECT, UPDATE, DELETE, INSERT, and WHERE.</p><br><p>I write in PostgreSQL when direct control over relational databases is essential.</p>', 'https://www.w3schools.com/sql/sql_intro.asp', 'Learn more about SQL'],
                 ['sony', '<p>Sony Vegas Pro is a video-editing software for non-linear editing (NLE). Originally created for use as audio-editing program on July 23, 1999, Sony Vegas Pro is now contains powerful video-editing features such as 3D track motion compositing, keyframe manipulation, masking, an array of special effects, frame transitions, and built-in conversion of formats into 24p. Along with video-editing features, Sony Vegas Pro is also well-equipped with audio-editing tools, including many standard level effects (like delay, reverb, flange, compression, and more) and mixing/mastering options to give the author fine-grained control. It\'s simple graphical interface and it\'s suite of editing tools make Sony Vegas Pro friendly enough for beginners and advanced enough for professionals.</p><br><p>I edit with Sony Vegas Pro when I need an experienced software capable of producing professional content.</p>', 'http://www.vegascreativesoftware.com/us/vegas-pro/', 'Learn more about Sony Vegas Pro'],
                 ['power-director', '<p>PowerDirector is a video-editing software produced by CyberLink. Selected by TechRadar.com as The Best Video Editor of 2018, PowerDirector is a powerful and feature-rich software that allows the user an incredible amount (almost daunting) of options with which to fine-tune their content. Known for lightning-fast rendering speeds, PowerDirector can reduce the time necessary to render content to a fraction of what it\'s competitors can manage by utilizing it\'s touted SVRT (Smart Video Rendering Technology), which only renders edited content to speed up the process and preserve video quality. Although SVRT is it\'s most noteworthy attribute, PowerDirector is packed with several other tools worthy of praise, such as Design Templates and 4K, 3D, and 360&#176; Video Editing capabilities.</p><br><p>With nearly endless editing options and a less-intuitive interface, I edit with PowerDirector when I have plenty of time and a desire to fine-tune content.</p>', 'https://www.cyberlink.com/products/powerdirector-ultra/features_en_US.html', 'Learn more about PowerDirector']
    ]
    for (var i = 0; i < skillsList.length; i++) {
        if (skillsList[i][0] == focusEl.attr('id')) {
            var skillText = skillsList[i][1];
            if (skillEl.html() != skillText) {
                canvasEls.next().css('color', 'white');
                focusEl.next().css('color', '#f85c37');
                $('.skills-text').hide().fadeIn();
                skillEl.html(skillText);
                $('#skills-link').attr('href', skillsList[i][2]).text(skillsList[i][3]);
                break;
            }
        }
    }
});
