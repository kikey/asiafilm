jQuery(document).ready(function($) {
// pge top
	var topBtn = jQuery('#totop');	
	topBtn.hide();
	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() > 100) {
			topBtn.fadeIn();
		} else {
			topBtn.fadeOut();
		}
	});
	topBtn.click(function () {
		jQuery('body,html').animate({
			scrollTop: 0
		}, 500);
		return false;
	});
	
// Media types
	$(window).resize(function() {
		windowWidth = $(window).width();
		lteTablet = windowWidth < 980;
		lteMobile = windowWidth < 740;
		lteMini   = windowWidth < 320;
		gteDektop = windowWidth >= 980;
		gteTablet = windowWidth >= 740;
		gteMobile = windowWidth >= 320;
		tablet    = lteTablet && gteTablet;
		mobile    = lteMobile && gteMobile;
		if (lteMini)     device = 'mini';
		else if (mobile) device = 'mobile';
		else if (tablet) device = 'tablet';
		else             device = 'desktop';
	}).trigger('resize');

// global Nav
	$('#nav-global>.switch').click(function () {
	  $('#nav-global>ul').slideToggle();
	});
	$('#nav-global li:has(ul)').addClass('hasul');
	$('#nav-global li:has(ul)').click(function(e) {
		if (lteMobile && e.pageX - $(this).offset().left >= $(this).width() - 50) {
			$('> ul', this).slideToggle(200);
			return false;
		}
		else {
		}
	});
	$('#nav-global a').click(function () {
 	if ((this).children('ul').css('display') =='none')	return false;
 });

// flexslider
		$(window).load(function() {
			$('.flexslider').flexslider({
			 animation: "slide",
			 controlsContainer: ".flexslider-container"
			});
		});

	// gallery
	$('.gallery section').mouseenter(function() {
  $(this).find('.icon span').animate({'top':'0px','right':'0px'});
	}).mouseleave(function() {
  $(this).find('.icon span').animate({'top':'-64px','right':'-64px'});
	});

	// masonry
	$('.masonry img').imagesLoaded(function() {
		$(window).resize(function() {
    $('.masonry').masonry({
      itemSelector: '.tiling_item',
      isAnimated: true
						
    });
		}).trigger('resize');
	});

	// slimbox
 $('a[rel*=lightbox]').slimbox();

	$('.gallery_sort li').click(function(){
//		if(!($(this).hasClass('active'))){
			$(this).parent().find('.active').removeClass('active');
			var theClass= $(this).attr('class');
			$(this).parent().find('.'+theClass).addClass('active');
			var $theGallery = $(this).parent().next('.gallery');
			var theWidth = $(this).parent().next('.gallery').children('section').width();
			if(!($(this).hasClass('all'))){
				$(this).parent().next('.gallery').children('.'+theClass).delay(500).fadeIn('fast');
				$(this).parent().next('.gallery').children().not('.'+theClass).fadeOut(500);
			}
			else {
				$(this).parent().next('.gallery').find('section').fadeIn();
			}
	//	}
	});





	var $setFilter = $('#filter'),
	$setList = $('#filterlist'),
	$setFilterAll = $('.allitem');

	var showFade = 1500,
	showShut = 1500,
	hideFade = 1000,
	hideShut = 1000;

	var $setFilterBtn = $setFilter.children('a'),
	$setFilterList = $setList.children('ul').children('li'),
	$filterAllItem = $setFilterAll.attr('class');

	$setFilterBtn.click(function(){
		if(!($(this).hasClass('active'))){
			var filterClass = $(this).attr('class');
			$setFilterList.each(function(){
				if($(this).hasClass(filterClass)){
					$(this).css({display:'block'});
					$(this).find('*').stop().animate({opacity:'1'},showFade);
					$(this).stop().animate({width:'100px'},showShut);
				} else {
					$(this).find('*').stop().animate({opacity:'0'},hideFade);
					$(this).stop().animate({width:'0'},hideShut,function(){
						$(this).css({display:'none'});
					});
				}
			});
			$setFilterBtn.removeClass('active');
			$(this).addClass('active');
		}
	});

	$setFilterAll.click(function(){
		$setFilterList.each(function(){
			$(this).css({display:'block'});
			$(this).find('*').stop().animate({opacity:'1'},showFade);
			$(this).stop().animate({width:'100px'},showShut);
		});
	});
	$setFilterAll.click();






});
