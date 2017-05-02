
var mmenu = 'close'; // to close menu

/* NENU */
(function(){
$('.js-menu-burger').on('click', function() {
    	var $this = $(this);
    	if(!$this.hasClass('close')){
    		$this.addClass('close');
    		$('.menu').slideDown(400);
    	}else{
    		$this.removeClass('close');
    		$('.menu').slideUp(400);
    	}
    });
$(window).resize(function() {
	if($(window).width() > 760){
		$('.menu').removeAttr('style');
	}
});
})();
    

