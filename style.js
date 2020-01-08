$(function(){
  //HTML読み込み後
  $(window).ready(function() {
    $('.fadein-open').each(function(){
      var targetElement = $(this).offset().top;
      var load = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (load > targetElement - windowHeight + 200){
          $(this).css('opacity','1');
          $(this).css('transform','translateY(0)');
      }
    })
  });
  //スクロールしたら
  $(window).scroll(function (){
      $('.fadein').each(function(){
          var targetElement = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > targetElement - windowHeight + 200){
              $(this).css('opacity','1');
              $(this).css('transform','translateY(0)');
          }
      });
  });
});
$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});
