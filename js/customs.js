jQuery(function($) {

	"use strict";

	/**
	 * introLoader - Preloader
	 */

	$("#introLoader").introLoader({
		animation: {
				name: 'gifLoader',
				options: {
						ease: "easeInOutCirc",
						style: 'dark bubble',
						delayBefore: 500,
						delayAfter: 0,
						exitTime: 300
				}
		}
	});	
	
	
	
	/**
	 * Sticky Header
	 */
	$(".container-wrapper").waypoint(function() {
		$(".navbar").toggleClass("navbar-sticky-function");
		$(".navbar").toggleClass("navbar-sticky");
		return false;
	}, { offset: "-20px" });
	
	
	
	/**
	 * Main Menu Slide Down Effect
	 */
	 
	// Mouse-enter dropdown
	$('#navbar li').on("mouseenter", function() {
			$(this).find('ul').first().stop(true, true).delay(350).slideDown(500, 'easeInOutQuad');
	});

	// Mouse-leave dropdown
	$('#navbar li').on("mouseleave", function() {
			$(this).find('ul').first().stop(true, true).delay(100).slideUp(150, 'easeInOutQuad');
	});

	
	
	/**
	* Background changes on focusing div by .addclass method
	*/
	$(".bg-change-focus-addclass").on("focusin", function() {
			$(this).addClass("focus");
	}).on("focusout", function() {
			$(this).removeClass("focus");
	});

	
	
	/**
	* Bootstarp Dropdown as Select with active state
	*/
	$('.dropdown-select').on( 'click', '.dropdown-menu li a', function() { 
	 var target = $(this).html();

	 //Adds active class to selected item
	 $(this).parents('.dropdown-menu').find('li').removeClass('active');
	 $(this).parent('li').addClass('active');

	 //Displays selected text on dropdown-toggle button
	 $(this).parents('.dropdown-select').find('.dropdown-toggle').html(target + ' <span class="caret"></span>');
	});


	/**
	 * Slicknav - a Mobile Menu
	 */
	var $slicknav_label;
	$('#responsive-menu').slicknav({
		duration: 500,
		easingOpen: 'easeInExpo',
		easingClose: 'easeOutExpo',
		closedSymbol: '<i class="fa fa-plus"></i>',
		openedSymbol: '<i class="fa fa-minus"></i>',
		prependTo: '#slicknav-mobile',
		allowParentLinks: true,
		label:"",
	});

	
	
	/**
	 * Smooth scroll to anchor
	 */
	$('a.anchor[href*=#]:not([href=#])').on("click",function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: (target.offset().top - 75) // 70px offset for navbar menu
				}, 1000);
				return false;
			}
		}
	});
	
	
	
	/**
	 * Counter - Number animation
	 */
	$(".counter").countimator();



	/**
	 * Another Bootstrap Toggle
	 */
	$('.another-toggle').each(function(){
		if( $('.another-toggle-header',this).hasClass('active') ){
			$(this).find('.another-toggle-content').show();
		}
	});
	$('.another-toggle .another-toggle-header').on( 'click' , function(){
		if( $(this).hasClass('active') ){
			$(this).removeClass('active');
			$(this).next('.another-toggle-content').slideUp();
		} else {
			$(this).addClass('active');
			$(this).next('.another-toggle-content').slideDown();
		}
	});
	

	/**
	 *  Arrow for Menu has sub-menu
	 */
	/* if ($(window).width() > 992) {
		$(".navbar-arrow > ul > li").has("ul").children("a").append("<i class='arrow-indicator fa fa-angle-down'></i>");
	} */
	
	if ($(window).width() > 992) {
		$(".navbar-arrow ul ul > li").has("ul").children("a").append("<i class='arrow-indicator fa fa-angle-right'></i>");
	}
	
	
	
	/**
	 * Bootstrap Tooltip
	 */
	$(function () {
		$('[data-toggle="tooltip"]').tooltip()
	})

	
	
	/**
	 * Icon Change on Collapse
	 */
	$('.collapse.in').prev('.panel-heading').addClass('active');
	$('.bootstarp-accordion, .bootstarp-toggle').on('show.bs.collapse', function(a) {
		$(a.target).prev('.panel-heading').addClass('active');
	})
	.on('hide.bs.collapse', function(a) {
		$(a.target).prev('.panel-heading').removeClass('active');
	});

		
		
	/**
	 * Back To Top
	 */
	$(window).scroll(function(){
		if($(window).scrollTop() > 500){
			$("#back-to-top").fadeIn(200);
		} else{
			$("#back-to-top").fadeOut(200);
		}
	});
	$('#back-to-top').on("click",function() {
			$('html, body').animate({ scrollTop:0 }, '800');
			return false;
	});

	
	
	/**
	 *  Placeholder
	 */
	$("input, textarea").placeholder();
	
	
	
	/**
	 * Sign-in Modal
	 */
	var $formLogin = $('#login-form');
	var $formLost = $('#lost-form');
	var $formRegister = $('#register-form');
	var $divForms = $('#modal-login-form-wrapper');
	var $modalAnimateTime = 300;
	
	$('#login_register_btn').on("click", function () { modalAnimate($formLogin, $formRegister) });
	$('#register_login_btn').on("click", function () { modalAnimate($formRegister, $formLogin); });
	$('#login_lost_btn').on("click", function () { modalAnimate($formLogin, $formLost); });
	$('#lost_login_btn').on("click", function () { modalAnimate($formLost, $formLogin); });
	$('#lost_register_btn').on("click", function () { modalAnimate($formLost, $formRegister); });
	
	function modalAnimate ($oldForm, $newForm) {
		var $oldH = $oldForm.height();
		var $newH = $newForm.height();
		$divForms.css("height",$oldH);
		$oldForm.fadeToggle($modalAnimateTime, function(){
			$divForms.animate({height: $newH}, $modalAnimateTime, function(){
				$newForm.fadeToggle($modalAnimateTime);
			});
		});
	}
	
	
	
	/**
	 * Flex Image - Image Grid Layout
	 */
	$('.flex-image').flexImages({rowHeight: 230});	
	$('.flex-image-sm').flexImages({rowHeight: 130});	
	$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
			$('.flex-image-in-tab').flexImages({rowHeight: 230});
	});	
	$('.flex-image-detail').flexImages({rowHeight: 180});
	
	
	/**
	 * Image Preview Tooltip
	 */
	$('.image-preview-tooltip a').SimpleTip({'class':'imagePreview'});

	
	
	/**
	 * Custom File Upload
	 */
	$('#input03').filestyle({
		input : false,
		buttonName : 'btn-primary'
	});
	
	
	
});

