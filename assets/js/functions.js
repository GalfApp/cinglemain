/*
Author: Jhon Moreno
Author URL: jhonmo09@gmail.com/
*/

/*
Author: Jhon Moreno
Author URL: jhonmo09@gmail.com/
*/
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};
var tech = getUrlParameter('terms');
if (tech=="open") {
  //Abrir modal de terminos
  console.log("Abriendo modal");
  openTerms();
}

function cancelEvent(event) {
   if (event.preventDefault) { 
      event.preventDefault();
   } else {
      event.returnValue = false; 
   }
}

$(window).load(function(e) {
   //$('.loader').fadeOut('slow');

   var slidesNum = $('.phone_slides img').size();
   var slideWidth = $('.phone_slides img').width();
   $('.phone_slides').width(slidesNum*slideWidth);

   
});



var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};
var mainVideoId = $('#player').attr('data-id')
var tag = document.createElement('script');
tag.src = "http://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubePlayerAPIReady() {
    player = new YT.Player('player', {
        videoId: mainVideoId,
        playerVars: { 
         'controls': 0,
         'rel': 0,
         'showinfo':0
        }
    });
}
$("#enviar").click(function(e){
  e.preventDefault();  
  var form = new FormData();
form.append("opcion", $("#opcion :selected" ).text());
form.append("email", $("#email" ).val());
form.append("detalle", $("#detalle" ).val());

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://api.cingleapp.com/contacto",
  "method": "POST",
  "processData": false,
  "contentType": false,
  "mimeType": "multipart/form-data",
  "data": form
}

$.ajax(settings).done(function (response) {
  console.log(response);
});
});

$(function(){
  $('.fancy').fancySelect();
  $('.btn_menu').click(function(){
    $('.mobile_nav').fadeIn();
  });
  $('.close_menu').click(function(){
    $('.mobile_nav').fadeOut();
  });
  $('.close_modal, .modal').click(function(){
    $('.content_modal').removeClass('modal_abierto');
    setTimeout(function(){
      $('.modal').fadeOut(350);
      $('body').removeClass('modal_open');
    },300);
  });
  $('.content_modal').click(function(event){
    event.stopPropagation();
  });
  $('.btn_video').click(function(){
    $('.main_video, .close_video').fadeIn(800);
    $('header').fadeOut(800);
    player.playVideo();
  });

  $('.close_video').click(function(){
    $('.main_video, .close_video').fadeOut(800);
    $('header').fadeIn(800);
    player.pauseVideo();
  })
  //$("html").niceScroll();
  $('.custom_select select').change(function(){
    var thisval = $(this).children('option:selected').text();
    $(this).siblings('span').text(thisval);
  })

  $('.btn_down').click(function(){
    cancelEvent(event)
    var position1 = $('.video_section').height();
    $('html,body').animate({scrollTop:position1},1200)
  })
  TweenMax.to($('.content_pin .phone_text, .content_pin .info_phone'), 0, {y:300, opacity:0})

  $('.arrow_down').click(function(){
    var winHeight = $(window).innerHeight();
    $('html,body').animate({scrollTop:winHeight}, 2000, 'easeInOutQuart')
  })


  var controller = new ScrollMagic.Controller();

  

  if( isMobile.any() ) {
    

  }else{
    new ScrollMagic.Scene({triggerElement: "#trigger", duration: 6000, triggerHook: "onLeave"})
    .setPin("#pin")
    .addTo(controller);

    new ScrollMagic.Scene({triggerElement: "#trigger", duration: 300, triggerHook: "onLeave", offset:0 })
        .setTween("#phone_text1", {y:0, opacity:1})
        .addTo(controller);

    new ScrollMagic.Scene({triggerElement: "#trigger", duration: 300, triggerHook: "onLeave", offset: 150})
        .setTween(".info_phone1", {y:0, opacity:1})
        .addTo(controller);

    new ScrollMagic.Scene({triggerElement: "#trigger", duration: 300, triggerHook: "onLeave", offset: 650})
        .setTween("#phone_text1", {y:-300, opacity:0})
        .addTo(controller);

    new ScrollMagic.Scene({triggerElement: "#trigger", duration: 300, triggerHook: "onLeave", offset: 800})
        .setTween(".info_phone1", {y:-300, opacity:0})
        .addTo(controller);

    //slide2
    new ScrollMagic.Scene({triggerElement: "#trigger", duration: 300, triggerHook: "onLeave", offset: 1100})
        .setTween(".phone_slides", {'margin-left':-384})
        .addTo(controller);
    var offset2 = 1100
    new ScrollMagic.Scene({triggerElement: "#trigger", duration: 300, triggerHook: "onLeave", offset:offset2+150 })
        .setTween("#phone_text2", {y:0, opacity:1})
        .addTo(controller);

    new ScrollMagic.Scene({triggerElement: "#trigger", duration: 300, triggerHook: "onLeave", offset:offset2+300})
        .setTween(".info_phone2", {y:0, opacity:1})
        .addTo(controller);

    new ScrollMagic.Scene({triggerElement: "#trigger", duration: 300, triggerHook: "onLeave", offset:offset2+800})
        .setTween("#phone_text2", {y:-300, opacity:0})
        .addTo(controller);

    new ScrollMagic.Scene({triggerElement: "#trigger", duration: 300, triggerHook: "onLeave", offset:offset2+950})
        .setTween(".info_phone2", {y:-300, opacity:0})
        .addTo(controller);

    //slide3
    new ScrollMagic.Scene({triggerElement: "#trigger", duration: 300, triggerHook: "onLeave", offset:offset2+1400})
        .setTween(".phone_slides", {'margin-left':-768})
        .addTo(controller);
    var offset3 = 2500
    new ScrollMagic.Scene({triggerElement: "#trigger", duration: 300, triggerHook: "onLeave", offset:offset3+150 })
        .setTween("#phone_text3", {y:0, opacity:1})
        .addTo(controller);

    new ScrollMagic.Scene({triggerElement: "#trigger", duration: 300, triggerHook: "onLeave", offset:offset3+300})
        .setTween(".info_phone3", {y:0, opacity:1})
        .addTo(controller);

    new ScrollMagic.Scene({triggerElement: "#trigger", duration: 300, triggerHook: "onLeave", offset:offset3+800})
        .setTween("#phone_text3", {y:-300, opacity:0})
        .addTo(controller);

    new ScrollMagic.Scene({triggerElement: "#trigger", duration: 300, triggerHook: "onLeave", offset:offset3+950})
        .setTween(".info_phone3", {y:-300, opacity:0})
        .addTo(controller);

    //slide4
    new ScrollMagic.Scene({triggerElement: "#trigger", duration: 300, triggerHook: "onLeave", offset:offset3+1400})
        .setTween(".phone_slides", {'margin-left':-1152})
        .addTo(controller);
    var offset4 = 3900
    new ScrollMagic.Scene({triggerElement: "#trigger", duration: 300, triggerHook: "onLeave", offset:offset4+150 })
        .setTween("#phone_text4", {y:0, opacity:1})
        .addTo(controller);

    new ScrollMagic.Scene({triggerElement: "#trigger", duration: 300, triggerHook: "onLeave", offset:offset4+300})
        .setTween(".info_phone4", {y:0, opacity:1})
        .addTo(controller);

    new ScrollMagic.Scene({triggerElement: "#trigger", duration: 300, triggerHook: "onLeave", offset:offset4+800})
        .setTween("#phone_text4", {y:-300, opacity:0})
        .addTo(controller);

    new ScrollMagic.Scene({triggerElement: "#trigger", duration: 300, triggerHook: "onLeave", offset:offset4+950})
        .setTween(".info_phone4", {y:-300, opacity:0})
        .addTo(controller);

    //slide5
    new ScrollMagic.Scene({triggerElement: "#trigger", duration: 300, triggerHook: "onLeave", offset:offset4+1400})
        .setTween(".phone_slides", {'margin-left':-1536})
        .addTo(controller);
    var offset5 = 5200
    new ScrollMagic.Scene({triggerElement: "#trigger", duration: 300, triggerHook: "onLeave", offset:offset5+150 })
        .setTween("#phone_text5", {y:0, opacity:1})
        .addTo(controller);

    new ScrollMagic.Scene({triggerElement: "#trigger", duration: 300, triggerHook: "onLeave", offset:offset5+300})
        .setTween(".info_phone5", {y:0, opacity:1})
        .addTo(controller);


  }


  $('.lat_nav a').click(function(event){
      event.preventDefault();
      var thisHref = $(this).attr('href');
      var hrefTop = $(''+thisHref+'').offset().top;
      $('html,body').animate({scrollTop:hrefTop+300},2000, 'easeInOutQuart');
      
  });

  $('.logo').click(function(){
    $('html,body').animate({scrollTop:0},2000, 'easeInOutQuart')
  })
  

});


$(window).bind('load resize scroll',function(){
  var flag = 0
    var valScroll = $(window).scrollTop();
    var winHeight = $(window).innerHeight();
    $('.anchor').each(function(index, element){
      var thisTop = $(this).offset().top;
      var thisHeight = $(this).innerHeight();
      var thisBottom = thisTop+thisHeight;
      var thisId = $(this).attr('id');
    });
    $('.lat_nav a').each(function(index, element){
        var thisHref = $(this).attr('href');
        var hrefPos = $(''+thisHref+'').offset().top;
        if(valScroll >= hrefPos-(winHeight/2)){
          $(this).siblings('a').removeClass('active');
          $(this).addClass('active');
          
          
        }else{
          $(this).removeClass('active');
        }
    });

    if(valScroll>=50){
      $('header').addClass('scrolling');
    }else{
      $('header').removeClass('scrolling');
    }
});




$(window).bind('load resize', function(){
  var winWidth = $(window).innerWidth();
  var winHeight = $(window).innerHeight();
  $('.content_pin, .content_pin .main_content, .init_section').height(winHeight);
  //$('.mobile_slider .item').height(winHeight-70);
  //$('.final_content').height(winHeight);

  if(winWidth<=768){
    $('.mobile_slider').owlCarousel({
        loop: false,
        margin: 0,
        nav: false,
        dots:true,
        items: 1,
        autoplay: false
        
      });
  }

  
  
});





function openContact(){
  $('body').addClass('modal_open');
  $('.modal').fadeOut(350);
  setTimeout(function(){
    $('#modal_contacto').fadeIn(350,function(){
      $(this).find('.content_modal').addClass('modal_abierto');
    });
  },0)
}

function openTerms(){
  $('body').addClass('modal_open');
  $('.modal').fadeOut(350);
  setTimeout(function(){
    $('#modal_terminos').fadeIn(350,function(){
      $(this).find('.content_modal').addClass('modal_abierto');
    });
  },0)
  setTimeout(function(){
    $(".content_politics").niceScroll();
  },350);
}

function openConnect(){
  $('body').addClass('modal_open');
  $('.modal').fadeOut(350);
  setTimeout(function(){
    $('#modal_connect').fadeIn(350,function(){
      $(this).find('.content_modal').addClass('modal_abierto');
    });
  },0)
}