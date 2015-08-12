var header = {
	toggleMenu : function(){

		$('.menu_icon').on('click',function(){
			if($(this).hasClass('glyphicon-menu-hamburger')) {
				alert(0);
                $(this).removeClass('glyphicon-menu-hamburger');   
                 $(this).addClass('glyphicon-remove');              
            }
            if($(this).hasClass('glyphicon-remove')) {
                $(this).addClass('glyphicon-menu-hamburger').removeClass('glyphicon-remove');              
            }
			// $(this).hasClass("glyphicon-menu-hamburger").removeClass('glyphicon-menu-hamburger').addClass('glyphicon-remove');
			// $(this).hasClass("glyphicon-remove").removeClass('glyphicon-remove').addClass('glyphicon-menu-hamburger');
		})
	}
}







$(function(){
	header.toggleMenu();
});