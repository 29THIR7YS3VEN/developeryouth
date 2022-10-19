
// Main Visual
// -------------------------------

$(function () {
    // window読み込みと共にaimation呼び出し
    // ページ内に.js-window-triggerが存在したら実行
    $(document).ready(function(){
            $(".js-window-trigger").each(function () {
                    $(this).addClass('is-active');
            });
        });
  });
  


// jquery
// -------------------------------

$(function () {
  // aimation呼び出し
  // ページ内に.js-scroll-triggerが存在したら実行
  if ($('.js-scroll-trigger').length) {
      scrollAnimation();
  }

  // aimation関数
  function scrollAnimation() {
      $(window).scroll(function () {
          $(".js-scroll-trigger").each(function () {
              let position = $(this).offset().top,
                  scroll = $(window).scrollTop(),
                  windowHeight = $(window).height();

              if (scroll > position - windowHeight + 80) {
                  $(this).addClass('is-active');
              }
          });
      });
  }
  $(window).trigger('scroll');
});


