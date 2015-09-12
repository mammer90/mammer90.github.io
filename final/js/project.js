$(document).ready(function(){
 $("header").click(function(){
    $(this).next().slideToggle(500);

  });
$("#nav").menumaker({
    title: "Menu",
    format: "dropdown"
  });

$("#nav a").each(function() {
    var linkTitle = $(this).text();
    $(this).attr('data-title', linkTitle);
  });
});
$.fn.menumaker = function(options) {
      
      var nav = $(this), settings = $.extend({
        title: "Menu",
        format: "dropdown",
        breakpoint: 768,
        sticky: false
      }, options);

      return this.each(function() {
        nav.find('li ul').parent().addClass('has-sub');
        if (settings.format != 'select') {
          nav.prepend('<div id="menu-button">' + settings.title + '</div>');
          $(this).find("#menu-button").on('click', function(){
            $(this).toggleClass('menu-opened');
            var mainmenu = $(this).next('ul');
            if (mainmenu.hasClass('open')) { 
              mainmenu.hide().removeClass('open');
            }
            else {
              mainmenu.show().addClass('open');
              if (settings.format === "dropdown") {
                mainmenu.find('ul').show();
              }
            }
          });

          multiTg = function() {
            nav.find(".has-sub").prepend('<span class="submenu-button"></span>');
            nav.find('.submenu-button').on('click', function() {
              $(this).toggleClass('submenu-opened');
              if ($(this).siblings('ul').hasClass('open')) {
                $(this).siblings('ul').removeClass('open').hide();
              }
              else {
                $(this).siblings('ul').addClass('open').show();
              }
            });
          };

          if (settings.format === 'multitoggle') multiTg();
          else nav.addClass('dropdown');
        }

        else if (settings.format === 'select')
        {
          nav.append('<select style="width: 100%"/>').addClass('select-list');
          var selectList = nav.find('select');
          selectList.append('<option>' + settings.title + '</option>', {
                                                         "selected": "selected",
                                                         "value": ""});
          nav.find('a').each(function() {
            var element = $(this), indentation = "";
            for (i = 1; i < element.parents('ul').length; i++)
            {
              indentation += '-';
            }
            selectList.append('<option value="' + $(this).attr('href') + '">' + indentation + element.text() + '</option');
          });
          selectList.on('change', function() {
            window.location = $(this).find("option:selected").val();
          });
        }

        if (settings.sticky === true) nav.css('position', 'fixed');

        resizeFix = function() {
          if ($(window).width() > settings.breakpoint) {
            nav.find('ul').show();
            nav.removeClass('small-screen');
            if (settings.format === 'select') {
              nav.find('select').hide();
            }
            else {
              nav.find("#menu-button").removeClass("menu-opened");
            }
          }

          if ($(window).width() <= settings.breakpoint && !nav.hasClass("small-screen")) {
            nav.find('ul').hide().removeClass('open');
            nav.addClass('small-screen');
            if (settings.format === 'select') {
              nav.find('select').show();
            }
          }
        };
        resizeFix();
        return $(window).on('resize', resizeFix);

      });

  };
  