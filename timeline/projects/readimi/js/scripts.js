jQuery(document).ready(function($) {
      //$('html, body').animate({scrollTop:460}, 'fast');
      //$.scrollTo( '#header', 100, {easing:'easeInQuad'} );
      $('.two_column').columnize({
        width: 345,
        columns: 2
      });
      $('#tab-container').easytabs('select', '#consalting');
        $(".slider-n").touchCarousel({
          pagingNav:true,
          pagingNavControls: true,
          directionNav:true,
          snapToItems:false,
          itemsPerMove:1,
          scrollToLast:false,
          loopItems:false,
          scrollbar:false
        });

  $(".ct_form").click(function(){
    if($(".head_form").hasClass("open")){
      $(".head_form").slideUp("slow");
      $(".head_form").removeClass("open")
    }
    else{
      $(".head_form").slideDown("slow");
      $(".head_form").addClass("open")
    }
  });
  $(".head_form_hide").click(function(){
    if($(".head_form").hasClass("open")){
      $(".head_form").slideUp("slow");
      $(".head_form").removeClass("open")
    }
    else{
      $(".head_form").slideDown("slow");
      $(".head_form").addClass("open")
    }
  });

$('.work_item').hover(function() {
  $('.item_work_detail', this).slideDown(400);
  $(this).addClass("hov");
},
  function() {
    $('.item_work_detail', this).slideUp(100);
    $(this).removeClass("hov");
  }
);

});

  $(window).load(function() {
        $("#NewsCarousel").touchCarousel({
          pagingNav:true,
          snapToItems:false,
          itemsPerMove:1,
          scrollToLast:false,
          loopItems:false,
          scrollbar:false,
          directionNavAutoHide:false
        });
    $('.slider-s').flexslider({
      slideshow: false,
      animation: "slide",
      itemWidth: 745
    });
    $('.slider-m').flexslider({
      slideshow: false,
      animation: "slide",
      itemWidth: 900
    });
  });

  (function($) {
      $.fn.openCloseBlocks = function(blocks, options) {
          var defaults = { 
              speed: 'normal'
          }, 
          opts         = $.extend(defaults, options),
          togglers     = $(this),
          bls          = $(blocks); if(!bls) return;
            
            togglers.each(function(index) {
                $(this).click(function(e) {
                    e.preventDefault();             
                    $(bls[index]).slideToggle(opts['speed']);
                });
            });
      };
  })(jQuery);
  $('.anons_more').openCloseBlocks($('.news_anons_detail'), {
      speed: 'fast'
  });

function setEqualHeight(columns) {
 var tallestcolumn = 0;
  columns.each(
 function() {
  currentHeight = $(this).height();
  if(currentHeight > tallestcolumn) {
    tallestcolumn  = currentHeight;
  }
 });
  columns.height(tallestcolumn);
 }
$(document).ready(function() {
 setEqualHeight($(".touchcarousel  > li"));
});

/*$(document).ready(function () {
  $(".touchcarousel-item").height($(".touchcarousel").height());
});*/