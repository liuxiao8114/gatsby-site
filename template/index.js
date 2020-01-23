(function($) {

  //ユーザーエージェント判別
  
  var Index = $.index = (function() {

  // コンストラクタ
    function init() {
      
      // 世贸服务 hover
      $(".service .service_list li").mouseenter(function(){
        $(this).addClass("current");
      });
      $(".service .service_list li").mouseleave(function(){
        $(this).removeClass("current");
      });

      // 最新动态 Tab
      var tabs = function(tab, con){
				tab.click(function(){
						var indx = tab.index(this);
						tab.removeClass('current');
						$(this).addClass('current');
						con.hide();
						con.eq(indx).show();
				});
			};
      tabs($(".news .news_box .news_tab li"), $('.news_box .news_main'));
      tabs($(".overseas_file .overseas_file_box .overseas_file_tab li"), $('.overseas_file_box .overseas_file_main'));

      // 常见问题 slide
			$(".faq .faq_list li h3").on("click",function(){
				if($(this).next(".faq_text").css("display") === "none") {
					$(this).addClass("current");
					$(this).next(".faq_text").slideDown();
				}
				else {
					$(this).removeClass("current");
					$(this).next(".faq_text").slideUp();
				}
      });
      
      // 微博 QQ sns
      function shareTo(stype){
        var ftit = '';
        var flink = '';
        var lk = '';
        ftit = document.title;
        flink = document.images[0].src;
        if(typeof flink == 'undefined'){
            flink='';
        }
        if(flink == ''){
            lk = 'http://'+window.location.host+'/share/img/logo.png';
        }
        //新浪微博
        if(stype=='weibo'){
            window.open('http://service.weibo.com/share/share.php?url='+document.location.href+'?sharesource=weibo&title='+ftit+'&pic='+lk+'&appkey=2706825840');
        }
        //qq好友
        if(stype == 'qq'){
            window.open('http://connect.qq.com/widget/shareqq/index.html?url='+document.location.href+'?sharesource=qzone&title='+ftit+'&pics='+lk+'&summary='+document.querySelector('meta[name="description"]').getAttribute('content')+'&desc=上海世贸');
        }
        //qq空间
        if(stype == 'kongjian'){
          window.open('https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url='+document.location.href+'?sharesource=qzone&title='+ftit+'&pics='+lk+'&summary='+document.querySelector('meta[name="description"]').getAttribute('content')+'&desc=上海世贸');
        }
      }
      $('.about .about_main .video .sns ul li.sns_button').on('click', function() {
        var type = this.dataset.type;
        shareTo(type);
      })
      $('.news_share .news_share_list ul li.sns_button').on('click', function() {
        var type = this.dataset.type;
        shareTo(type);
      })

      // 微信 sns
      $(".qr_code a").on("click",function(){
				if($(this).next(".qr_code_block").css("display") === "none") {
					$(this).next(".qr_code_block").fadeIn();
				} else {
					$(this).next(".qr_code_block").fadeOut();
				}
      });



    }

    // アクセス制御
    return {
      init : init
    }
  })();
  /* document.ready
  ----------------------------------------*/
  $(Index.init);
})(jQuery);


