jQuery(document).ready(function($) {

        $(".login_btn a").click(function() {
          $(".login_form").slideToggle("slow");
          $(this).toggleClass("active"); return false;
        });

        $('.slider ul').carouFredSel({
          responsive: true,
          auto: true,
          circular: true,
          align: "center",
          width: "variable",
          height: "variable",
          items: {
            height: "variable"
          },
          scroll: {
            items: 1,
            fx: "slide",
            duration: 500,
            pauseOnHover: true
          },
          pagination: {
            container: ".pagerslider",
            anchorBuilder : function( nr ) {
              return "<a href=\"#\"></a>";
            }
          },
          mousewheel: false,
          swipe: {
            onMouse: false,
            onTouch: true
          }
        });
	$(".content img").each (
        function() {
            var m = $("img[src='"+this.src+"']");        
            if (this.hspace>0) {this.style.marginLeft=this.hspace+'px'; this.style.marginRight=this.hspace+'px'; this.hspace=0;}
            if (this.vspace>0) {this.style.marginTop=this.vspace+'px'; this.style.marginBottom=this.vspace+'px'; this.vspace=0;}    
  });

    $('.content input, .content select').styler();

    $('.date-pick').datePicker({clickInput:true});

    $(".login_btn a").fancybox({
      fitToView : false,
      autoSize  : true,
      closeClick  : false,
      openEffect  : 'none',
      closeEffect : 'none'
    });

    $('.header_menu li:last-child').css('border-right','0');

    $('input, textarea').placeholder({ color : "#aaa" });

});

function last_child() {
  if ($.browser.msie && parseInt($.browser.version, 10) <= 8) {
    $('*:last-child').addClass('last-child');
  }
}