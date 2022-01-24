jQuery(document).ready(function() {
	var width_device = jQuery(window).width();
	jQuery('.dotdotdot').dotdotdot();
	setTimeout(function(){
		jQuery('.dotdotdot').dotdotdot();
	}, 100);
	jQuery(window).resize(function(event) {
    	setTimeout(function(){    
    		jQuery('.dotdotdot').dotdotdot();
		}, 400);
    });
	var wow = new WOW(
	  	{
		    boxClass:     'wow',      // animated element css class (default is wow)
		    animateClass: 'animated', // animation css class (default is animated)
		    offset:       0,          // distance to the element when triggering the animation (default is 0)
		    mobile:       true,       // trigger animations on mobile devices (default is true)
		    live:         true,       // act on asynchronously loaded content (default is true)
		    callback:     function(box) {
		      // the callback is fired every time an animation is started
		      // the argument that is passed in is the DOM node being animated
		    },
		    scrollContainer: null // optional scroll container selector, otherwise use window
	  	}
	);
	wow.init();

	header();
	jQuery(window).scroll(function(){
		header();
	});

	jQuery('.scroll-to-top').click(function(event) {
		jQuery('html, body').animate({scrollTop: 0}, 1000);
	});

	jQuery('.content-contact_switchboards .switchboards__switchboard .switchboards__switchboard__heading').height('auto');
	jQuery('.content-contact_switchboards .switchboards__switchboard .switchboards__switchboard__paragraph').height('auto');

	if(jQuery(window).width() > 992){			
		if($(".sidebar__ads").length > 0){
		    $(window).load(function(){
		      	$(".sidebar__ads:last-child").sticky({ 
		      		topSpacing: 60, 
		      		bottomSpacing: jQuery('#footer').innerHeight() + 50, 
		      		getWidthFrom: '60' 
		      	});
		    });    
	    }	
		var height_heading = 0;	
		var height_items = 0;

		setTimeout(function(){
			for (var i = 0; i < jQuery('.content-contact_switchboards .switchboards__switchboard').length; i++) {
				if (jQuery('.content-contact_switchboards .switchboards__switchboard:eq('+ i +') .switchboards__switchboard__paragraph').height() > height_items) {
					height_items = jQuery('.content-contact_switchboards .switchboards__switchboard:eq('+ i +') .switchboards__switchboard__paragraph').height();
				}
				if (jQuery('.content-contact_switchboards .switchboards__switchboard:eq('+ i +') .switchboards__switchboard__heading').height() > height_heading) {
					height_heading = jQuery('.content-contact_switchboards .switchboards__switchboard:eq('+ i +') .switchboards__switchboard__heading').height();
				}
			}
			jQuery('.content-contact_switchboards .switchboards__switchboard .switchboards__switchboard__heading').height(height_heading);
			jQuery('.content-contact_switchboards .switchboards__switchboard .switchboards__switchboard__paragraph').height(height_items);
		
		}, 100);
	}

    jQuery(window).resize(function(event) {
		$(".sidebar__ads").sticky('update');
		jQuery('.content-contact_switchboards .switchboards__switchboard .switchboards__switchboard__heading').height('auto');
		jQuery('.content-contact_switchboards .switchboards__switchboard .switchboards__switchboard__paragraph').height('auto');

		if(jQuery(window).width() > 992){	
	    	if($(".sidebar__ads").length > 0){
		      	$(".sidebar__ads:last-child").sticky({ 
		      		topSpacing: 60, 
		      		bottomSpacing: jQuery('#footer').innerHeight() + 50, 
		      		getWidthFrom: '60' 
		      	});
		    }	

			var height_heading = 0;	
			var height_items = 0;

			for (var i = 0; i < jQuery('.content-contact_switchboards .switchboards__switchboard').length; i++) {
				if (jQuery('.content-contact_switchboards .switchboards__switchboard:eq('+ i +') .switchboards__switchboard__paragraph').height() > height_items) {
					height_items = jQuery('.content-contact_switchboards .switchboards__switchboard:eq('+ i +') .switchboards__switchboard__paragraph').height();
				}
				if (jQuery('.content-contact_switchboards .switchboards__switchboard:eq('+ i +') .switchboards__switchboard__heading').height() > height_heading) {
					height_heading = jQuery('.content-contact_switchboards .switchboards__switchboard:eq('+ i +') .switchboards__switchboard__heading').height();
				}
			}
			jQuery('.content-contact_switchboards .switchboards__switchboard .switchboards__switchboard__heading').height(height_heading);
			jQuery('.content-contact_switchboards .switchboards__switchboard .switchboards__switchboard__paragraph').height(height_items);
		} else {
	    	$(".sidebar__ads:last-child").unstick();
	    	jQuery('.content-contact_switchboards .switchboards__switchboard .switchboards__switchboard__heading').height('auto');
			jQuery('.content-contact_switchboards .switchboards__switchboard .switchboards__switchboard__paragraph').height('auto');
		}
	});	

	//SHOW AND HIDE LIGHBOX
		jQuery(document).on('click','.md-trigger',function(event){    	
	    	var value = jQuery(this).attr('data-modal');
	    	event.preventDefault();
	    	jQuery('#md-forgot form, #md-login form').trigger("reset");
	    	jQuery('#md-forgot form .text-warning, #md-login form .text-warning').text("");
	    	jQuery('#md-forgot form .input-control, #md-login form .input-control').removeClass("error").removeClass("success-value");
	    	jQuery('.md-modal').removeClass('md-show');
	        jQuery(value).addClass('md-show');
	        // jQuery('body').addClass('none-scroll');
	        jQuery(value).find('form').trigger("reset");
	    });

	    jQuery(document).on('click','.md-close, .md-overlay, .md-cancel',function(){
	        jQuery('.md-modal').removeClass('md-show');
	        jQuery('body').removeClass('none-scroll');
	        var src = jQuery(this).parent().find('iframe').attr('src');		
			jQuery(this).parent().find('iframe').attr('src', '');
			jQuery(this).parent().find('iframe').attr('src', src);
	    }); 

    /*=================================================
        					Custom
	=====================================================*/
    jQuery(window).load(function() {   
        jQuery(".fr-loading").delay(1000).fadeOut("slow");
    });

    // Slider
	if(jQuery('.content-banner_box__slider').length > 0){
		var slide = jQuery('.content-banner_box__slider');
		slide.owlCarousel({
		    loop: true,
			margin:0,
			nav:false,
			items: 1,
			dots: true,
			autoplay:true,
			autoplayTimeout:10000,
			autoplayHoverPause:false,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
		  	dotsContainer: '.owl-dots',
			onInitialized: callback,
			onTranslate: callChange,
			onTranslated: callChanged,
			responsive: {
				// breakpoint from 0 up
				0: {
					mouseDrag: false,
					touchDrag: false,
					pullDrag: false
				},
				// breakpoint from 480 up
				576: {
					mouseDrag: true,
					touchDrag: true,
					pullDrag: true
				}
			}
		});

		function callback(event) {
			setTimeout(function(){
				jQuery('.content-banner_box__slider .owl-item.active .content-banner_item').addClass('active');
				getMargin();
			},100);
		}
		function callChange (event) {
			jQuery('.content-banner_box__slider .owl-item .content-banner_item').removeClass('active');
		}
		function callChanged (event) {
			setTimeout(function(){
				jQuery('.content-banner_box__slider .owl-item.active .content-banner_item').addClass('active');
			},100);
		}
		jQuery('.content-banner .owl-dots .owl-dot').each(function(){
			var valueMain = $(this).index()+1;
			$(this).children('span').text(('0' + valueMain).slice(-2));
		});
	}

	if(jQuery('.footer-top_brands__slider').length > 0){
		jQuery('.footer-top_brands__slider').owlCarousel({
		    loop:true,
		    margin: 50,
		    autoplayTimeout:5000,
		    nav: true,
		    autoplay: false,
		    rewind: true,
		    dots: false,
	        lazyLoad:true,
			autoplayHoverPause:true,
		  	autoplaySpeed: 700,
		  	navSpeed: 700,
		  	dragEndSpeed: 700,
		  	navText: ['<div class="slider__prev"></div>','<div class="slider__next"></div>'],   
			responsive:{
				0:{
					mouseDrag: false,
				    touchDrag: false,
				    items: 2,
				},
				450:{
				    items: 3,
				},
		        767:{
					mouseDrag: false,
				    touchDrag: false,
		        	items: 4,
		        },
		        992:{
				    items: 6,
		        }
		    },
		});
	}

	// Menu
	jQuery('#dark-shadow').click(function(event) {
		jQuery('#header-responsive .bottoms .menu').removeClass('active');
		jQuery('#header-responsive .bottoms .menu-mobile').removeClass('active');
		jQuery(this).removeClass('active');
	});

    jQuery(document).on('click', '#header-responsive .bottoms .menu', function(event) {
    	event.preventDefault();
    	if(jQuery(this).hasClass('active')){
    		jQuery(this).removeClass('active');
    		jQuery(this).parent().find('.box-menu').removeClass('active');
    		jQuery(this).parent().find('.menu-mobile').removeClass('active');
    		jQuery('#dark-shadow').removeClass('active');
    		jQuery('body').removeClass('none-scroll');
    	} else {
    		jQuery(this).addClass('active');
    		jQuery(this).parent().find('.box-menu').addClass('active');
    		jQuery(this).parent().find('.menu-mobile').addClass('active');
    		jQuery('#header-responsive .bottoms .book, #header-responsive .bottoms .box-book').removeClass('active');
    		jQuery('#dark-shadow').addClass('active');
    		jQuery('body').addClass('none-scroll');
    	}
    });

	jQuery(document).on('click', '.menu-mobile .fr-menu .menu-item-has-children', function(event) {
    	event.stopPropagation();
		if(jQuery(this).hasClass('open')){
			jQuery(this).removeClass('open');
			jQuery(this).find('> ul').slideUp(300);
		}else{			
			jQuery(this).addClass('open');
			jQuery(this).find('> ul').slideDown(300);
		}
	});

	// Hover Menu
	jQuery(document).on('mouseover', '.child__tabs .child__tabs__tab > a', function(event) {
		event.preventDefault();
		jQuery('.child__tabs .child__tabs__tab').removeClass('active');
		jQuery(this).parent().addClass('active');
		jQuery(this).closest('li').find('.child__contents__content').removeClass('active');
		jQuery(this).closest('li').find('.child__contents__content:eq(' + jQuery(this).parent().index() +')').addClass('active');
	});

	jQuery(".content-sublisting_box .box__item").slice(0, 9).show();
	jQuery(document).on('click', '.content-sublisting_load', function(event) {
		event.preventDefault();
        jQuery(".content-sublisting_box .box__item:hidden").slice(0, 3).slideDown();
        if (jQuery(".content-sublisting_box .box__item:hidden").length == 0) {
            jQuery(this).fadeOut('slow');
        }
        jQuery('html,body').animate({
            scrollTop: jQuery(this).offset().top - 90
        }, 1500);
    });

	jQuery(".content-list_post__box .box__item").slice(0, 8).show();
	jQuery(document).on('click', '.content-sublisting_load', function(event) {
		event.preventDefault();
        jQuery(".content-list_post__box .box__item:hidden").slice(0, 3).slideDown();
        if (jQuery(".content-list_post__box .box__item:hidden").length == 0) {
            jQuery(this).fadeOut('slow');
        }
        jQuery('html,body').animate({
            scrollTop: jQuery(this).offset().top - 90
        }, 1500);
    });

	jQuery(".content-free-style_grid__have__load .grid__item").slice(0, 6).show();
	jQuery(document).on('click', '.content-free-style_load', function(event) {
		event.preventDefault();
        jQuery(".content-free-style_grid__have__load .grid__item:hidden").slice(0, 3).slideDown();
        if (jQuery(".content-free-style_grid__have__load .grid__item:hidden").length == 0) {
            jQuery(this).fadeOut('slow');
        }
        jQuery('html,body').animate({
            scrollTop: jQuery(this).offset().top - 90
        }, 1500);
    });

    // Scroll article
    var position = $(window).scrollTop(); 
    jQuery(window).scroll(function(event) {
    	var scroll = $(window).scrollTop();
    	if (jQuery(window).scrollTop() > 500){
		    if(scroll > position) {
	    		jQuery('#content-heading_scroll').addClass('active');
		    } else {
    			jQuery('#content-heading_scroll').removeClass('active');
		    }
    	} else {
    		// jQuery('#content-heading_scroll').removeClass('active');
    	}
	    position = scroll;
    });

    jQuery(document).on('click', '.none-tabs a', function(event) {
    	event.stopPropagation();
    	var id = jQuery(this).attr('data');
    	$('html, body').animate({
	        scrollTop: (jQuery(id).offset().top - 60)
	    }, 1000);
    });
});

function header(){
	if(jQuery(this).scrollTop() > 400)
    {  	
		jQuery('#header-scroll').addClass('active');
    }
    else
    {
		jQuery('#header-scroll').removeClass('active');
		jQuery('.header-scroll_action_search').removeClass('open');
		jQuery('.header-scroll_action_language').removeClass('open');
    }  
}

function getMargin() {
	var margin = jQuery(".container").offset().left;
	jQuery('.banner-slider .owl-dots').css({
		'right': margin
	});
}