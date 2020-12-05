jQuery(document).ready(function($) {

  $(function() {
    $("#sd_menu").dynatree({
      fx: { height: "toggle", duration: 200 },
      debugLevel: 0
    })
  });

    $(".header_menu li").hover(function(){
        $(this).addClass("active");
        $('.header_menu_sub',this).css('visibility', 'visible');
    }, function(){
        $(this).removeClass("active");
        $('.header_menu_sub',this).css('visibility', 'hidden');
    });

  $(".main_head .main_content").carouFredSel({
    circular: false,
    auto: false,
    items: 1,
    width: 704,
    height: 343,
    scroll: {
      items: 1,
      fx: "fade"
    },
    pagination: {
      container: '.main_head_menu ul',
      anchorBuilder: function( nr ) {
        return '<li><a href="#">' + $(this).find('h3').text() + '</a></li>';
      }
    }
  });

  $('.main_products_block .main_products_title, .tovar_space').equalHeightColumns();
  $('.gallery .gallery_min_brd ul').jScrollPane();
  $(".fancybox").fancybox();

  (function($) {
  $(function() {
    $('.content_menu').each(function(i) {
      var storage = localStorage.getItem('tab'+i);
      if (storage) $(this).find('li').eq(storage).addClass('active').siblings().removeClass('active')
        .parents('.tab_container').find('div.tabs').hide().eq(storage).show();
    })
    $('.content_menu').delegate('li:not(.active)', 'click', function() {
      $(this).addClass('active').siblings().removeClass('active')
        .parents('.tab_container').find('div.tabs').eq($(this).index()).fadeIn(150).siblings('div.tabs').hide();
      var ulIndex = $('.content_menu').index($(this).parents('.content_menu'));
      localStorage.removeItem('tab'+ulIndex);
      localStorage.setItem('tab'+ulIndex, $(this).index());
    })
  })
  })(jQuery);

  $(".news_item:first").css("border-top", "0 none");
	$(".content img").each (
        function() {
            var m = $("img[src='"+this.src+"']");        
            if (this.hspace>0) {this.style.marginLeft=this.hspace+'px'; this.style.marginRight=this.hspace+'px'; this.hspace=0;}
            if (this.vspace>0) {this.style.marginTop=this.vspace+'px'; this.style.marginBottom=this.vspace+'px'; this.vspace=0;}    
  });
  function last_child() {
    if ($.browser.msie && parseInt($.browser.version, 10) <= 8) {
      $('*:last-child').addClass('last-child');
    }
  }

  $('input, select').styler();
  $('input, textarea').placeholder({ color : "#333" });

});