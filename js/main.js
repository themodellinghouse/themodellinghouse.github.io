$(function(){
  	$(window).on( 'touchmove', function( ev )
	{ 
		if (!$( ev.target ).parents().hasClass( 'content' ))
		{ev.preventDefault();}
	});

  $(window).scroll(function(){

    var scrollPosition = $(this).scrollTop() ; 

    if (scrollPosition> $(window).height() - 60 ){
      $('body').addClass('scrolled')
    }else{
      $('body').removeClass('scrolled')
      /*window.location.hash = '';*/
      $(".menu-nav a").removeClass('active');
    }

    $('section').each(function(){
        if (
           $(this).offset().top < window.pageYOffset + 10
        && $(this).offset().top + $(this).height() > window.pageYOffset + 10
        && $(this).attr('id') != ''
        ) {
            /*window.location.hash = $(this).attr('id');*/
            $(".menu-nav a.active").removeClass('active');
            $(".menu-nav a[href='#"+$(this).attr('id')+"']").addClass('active');
        }
    });

    $(this).scrollTop(scrollPosition);

    /*console.log($(this).scrollTop())*/
  })

  $(".menu-nav a, .more").on('click',function (e) {
	    e.preventDefault();
	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        /*window.location.hash = target;*/
	    });
  })
  
  
  $(".menu-home").on('click',function (e) {
      e.preventDefault();
      $('html, body').stop().animate({
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
