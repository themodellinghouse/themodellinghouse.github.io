$(function(){
  	$(window).on( 'touchmove', function( ev )
	{
		if (!$( ev.target ).parents().hasClass( 'content' ))
		{ev.preventDefault();}
	});

	/*$('body').bind('touchmove', function(e) {
    console.log($(this).scrollTop()); // Replace this with your code.
});*/


  $('.content').bind("scroll",function(){

    var scrollPosition = $(this).scrollTop() ;

    if (scrollPosition> $(window).height() - 60 - 10 ){
      $('body').addClass('scrolled')
    }else{
      $('body').removeClass('scrolled')
      /*window.location.hash = '';*/
      $(".menu-nav a").removeClass('active');
    }

    $('section').each(function(){
        if (
         /*  $(this).offset().top < 10
        && $(this).offset().top + $(this).height() > 10*/

        $(this).offset().top  < 60 +10
		/*&& $(this).offset().top  < $(this).parent().height()*/
        ) {
            /*window.location.hash = $(this).attr('id');*/
            $(".menu-nav a.active").removeClass('active');
            $(".menu-nav a[href='#"+$(this).attr('id')+"']").addClass('active');
        }
    });

    /*$(this).scrollTop(scrollPosition);*/

    /*console.log($(this).scrollTop())*/
  })

  $(".menu-nav a, .intro-nav a, .more").on('click',function (e) {
	    e.preventDefault();
	    var target = this.hash;
	    var $target = $(target);

	    $('.content').stop().animate({
	        'scrollTop': -60+$target.parent().scrollTop()+$target.offset().top
	    }, 900, 'swing', function () {
	        /*window.location.hash = target;*/
	    });
  })


  $(".menu-home").on('click',function (e) {
      e.preventDefault();
      $('.content').stop().animate({
          'scrollTop': 0
      }, 900, 'swing', function () {
          /*window.location.hash = '';*/
      });
  })

    $(".menu-social-menu").on('click',function (e) {
      e.preventDefault();
      $('.menu-social-menu-panel').toggleClass('visible')
	  $('.menu-social-menu').toggleClass('visible')
  })

})
