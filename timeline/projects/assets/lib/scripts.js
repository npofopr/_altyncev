jQuery(document).ready(function($) {
	/*$(".sidebar").height($(document).height());*/
	$(".content img").each (
        function() {
            var m = $("img[src='"+this.src+"']");        
            if (this.hspace>0) {this.style.marginLeft=this.hspace+'px'; this.style.marginRight=this.hspace+'px'; this.hspace=0;}
            if (this.vspace>0) {this.style.marginTop=this.vspace+'px'; this.style.marginBottom=this.vspace+'px'; this.vspace=0;}    
    });
	$(document).ready(function () {
       var setResponsive = function () {
            if ($(window).height() > $(".sidebar").height() + 50) { // Is the window taller than the #adminmenuwrap by 50px or more?
                $('.sidebar').css('position', 'fixed'); // ...if so, make the #adminmenuwrap position:fixed
            }
            else {
                $('.sidebar').css('position', 'relative'); //...otherwise, leave it relative
            }
        }
    $(window).resize(setResponsive);
    setResponsive();
	});
});

jQuery(window).load(function($) {
});
