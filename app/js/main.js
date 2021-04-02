$(function() {

    $('.preloader').delay(500).fadeToggle(500);
    // .delay(500)

    $('.menu__btn').on('click', function() {
        $('.menu__btn').toggleClass('menu__btn--active');
        $('.menu').toggleClass('menu--active');
        $('.header').toggleClass('header--active');
    });
    $('.header__lang-btn').on('click', function() {
        $('.header__lang-btn').removeClass('header__lang-btn--active');
        $(this).addClass('header__lang-btn--active');
    });


    $('.menu__link').on('click', function() {
        $('.menu__btn').removeClass('menu__btn--active');
        $('.menu').removeClass('menu--active');
    });



    $('.btn-details').magnificPopup({
        type: 'inline',
        midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    });

    $('a[href^="#"]').click(function() {
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $('html').animate({ scrollTop: destination }, 1100);
        return false;
    });


    var wow = new WOW({
        boxClass: 'wow', // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 120, // distance to the element when triggering the animation (default is 0)
        mobile: true, // trigger animations on mobile devices (default is true)
        live: true, // act on asynchronously loaded content (default is true)
        callback: function(box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null // optional scroll container selector, otherwise use window
    });

    // multiply

    var arrLang = {
        'en': {
            'about': 'about',
            'skills': 'skills',
            'works': 'works',
            'contacts': 'contacts',
            'top__pretitle': 'welcome on my portfolio',
            "top__title": 'Khalimskiy Vitaliy',
            'top__text': 'WEBSITES DEVELOPMENT',
            'btn-details': 'more',
            'btn-resume': 'resume',
            'about__title': 'About me',
            'about__text': 'Welcome to my portfolio site. My name is Vitaliy. I live in Nikolaev. I am engaged in HTML-layout of sites. I have a completely cross-browser, responsive and valid layout. To ensure that the requirements for site layout are met in the process of working on a project, I use the Gulp project builder to automate the layout process, Less / Sass preprocessors for accelerated site styling and more flexible code, BEM, Smartgrid and media queries for responsive site layout. The dynamics of the site is organized by its own jQuery code or customized plugins. At the end of the work, the layout display is checked in various browsers on different devices, the code is checked by the validator for compliance with standards, and the identified errors are eliminated.',
            'skills__title': 'skills',
            'skills__css': 'In my projects I use HTML5  and CSS3 cascading style sheets.',
            'skills__scss': 'In order to write code faster, I use the Scss preprocessor and the Gulp assembly for automation and comfort of development.',
            'skills__js': 'I use JavaScript and JQuery plugins to implement tab pagination sliders and the like. I can write my own code, but this is more about simple tasks.',
            'works__title': 'EXAMPLES OF MY WORKS',
            'works__link': 'link'
        },
        'ru': {
            'about': 'о себе',
            'skills': 'Навыки',
            'works': 'работы',
            'contacts': 'контакты',
            'top__pretitle': 'ПРИВЕТСТВУЮ НА МОЕМ САЙТЕ ПОРТФОЛИО',
            "top__title": 'ХАЛИМСКИЙ ВИТАЛИЙ',
            'top__text': 'РАЗРАБОТКА САЙТОВ',
            'btn-details': 'детальнее',
            'btn-resume': 'резюме',
            'about__title': 'КОРОТКО О СЕБЕ',
            'about__text': 'Приветствую Вас на своем сайте-портфолио. Меня зовут Виталий. Живу в Николаеве. Занимаюсь HTML-версткой сайтов. У меня полностью кроссбраузерная, адаптивная и валидная верстка. Для обеспечения выполнения требований, предъявляемых к верстке сайта в процессе работы над проектом я использую сборщик проектов Gulp для автоматизации процесса верстки, препроцессоры Less/Sass для ускоренной стилизации сайта и более гибкого кода, БЭМ, Smartgrid и media-запросы для адаптивной верстки сайта. Динамика сайта организуется собственным jQuery кодом или настроенными плагинами. В конце работы осуществляется проверка отображения верстки в различных браузерах на разных устройствах, код проверяется валидатором на соответствие стандартам и устраняются выявленные ошибки.',
            'skills__title': 'МОИ НАВЫКИ',
            'skills__css': 'В своих проектах яиспользую язык разметки HTML5 и каскадные таблицы стилей CSS3.',
            'skills__scss': 'С целью более быстрого написания кода я использую препроцессор Scss а также сборку Gulp для автоматизации и комфорта разработки.',
            'skills__js': 'Использую JavaScript и JQuery плагины для реализации слайдеров пагинаций вкладок и тому подобное. Могу писать и свой код но это больше касается несложных задач.',
            'works__title': 'ПРИМЕРЫ МОИХ РАБОТ',
            'works__link': 'перейти'
        }
    };
    $(function() {
        $('.header__lang-btn').click(function() {
            var lang = $(this).attr('id');
            $('.lang').each(function(index, element) {
                $(this).text(arrLang[lang][$(this).attr('key')]);
            });
        });
    });



    $('.top__btn')
        .on('mouseenter', function(e) {
            var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            $(this).find('span').css({ top: relY, left: relX })
        })
        .on('mouseout', function(e) {
            var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            $(this).find('span').css({ top: relY, left: relX })
        });






    new WOW().init();


});