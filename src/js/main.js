// Check to see if the user has visited the page already
const firstLoad = () => {
	if(localStorage.getItem('visited') !== 'true') {
		document.querySelector('body').classList.add('first-visit');
		// If they haven't then run the splash page animation
		localStorage.setItem('visited', 'true')
	} else {
		// If they have then go straight to the content
		document.querySelector('body').classList.add('visited');
	}
}


// Get a string and wrap each word with span
const wordSpanWrapper = (str) => {
	let strSpans = [];
	for (let char of str.split(' ')) {
		strSpans.push(`<span data-word="${char}">${char}</span>`)
	}
	return strSpans.join(' '); 
}

// Get a string and wrap each word with span
const letterSpanWrapper = (str) => {
	let strSpans = [];
	for (let char of str.split('')) {
		strSpans.push(`<span data-letter="${char}">${char}</span>`)
	}
	return strSpans.join('');
}

const splashOpening = () => {
	animateLetters('.character-slide');
}

const aboutPage = () => {
	animateLetters('.text-wrapper p');
}


// get the elements that need to have their characters wrapped in span
function animateLetters(element) {
	let allSelected = document.querySelectorAll(element);
	
	for (let item of allSelected) {
		item.innerHTML = wordSpanWrapper(item.innerHTML);
	}
}


// before and after page
function beforeAfter() {
	let items = document.getElementsByClassName('item-wrapper');

	// set the initial sizes for the elements
	function sizing(elements) {
		for (let item of elements) {
			let itemHeight = item.children[0].clientHeight;
			let itemWidth = item.children[0].clientWidth;

			// only need to affect the second and third items
			for (let i = 1; i < 3; i++) {
				item.children[i].style.height = ''+itemHeight+'px';
				item.children[i].style.width = ''+itemWidth/2+'px';
				item.children[i].style.backgroundSize = ''+itemWidth+'px '+itemHeight+'px';
			}
		}
	}

	// mouse and touch 
	function movement(elements) {
		let x = undefined;
		let width = undefined;

		for (let item of elements) {
			function setComp() {
				let itemSize = item.getBoundingClientRect();

				x = itemSize.x;
				width = itemSize.width;
			}


			function moveComp(e) {
				var horizontal = (e.clientX - x) / width * 100;
			    item.children[item.children.length-1].style.setProperty('width', horizontal + '%');
			}

			function endComp(e) {

			}

			item.addEventListener('mouseenter', setComp);
			item.addEventListener('touchstart', setComp);
			item.addEventListener('mousemove', moveComp);
			item.addEventListener('touchmove', moveComp);
		}
	}

	// on resize, adjust the sizing
	window.addEventListener('resize', function(){
		sizing(items);
	});

	// initialize
	movement(items);
	sizing(items);
}


// initiate the masonry for the home page
const homeMasonry = () => {
	jQuery('.design .row-inner').masonry({
	  itemSelector: '.case-study',
	  columnWidth: 0,
	});
}


// initiate the masonry for the retouching page
const retouchedMasonry = () => {
	jQuery('.retouching .row-inner').masonry({
	  itemSelector: '.retouched',
	  columnWidth: 0.5,
	});
}

const mobileMenuFunctionality = () => {
	let mobileBtn = document.getElementsByClassName('mobile-button')[0];
	let mobileMenu = document.getElementsByClassName('mobile-menu')[0];

	mobileBtn.addEventListener('click', function(){
		document.getElementsByTagName('body')[0].classList.toggle('mobile-active');
		mobileBtn.classList.toggle('active');
		mobileMenu.classList.toggle('active');
	});

	jQuery('.mobile-menu li a').click(function(){
		jQuery('body').removeClass('mobile-active');
	});
}

const textFollow = () => {
	var $window = jQuery(window);
    function checkWidth() {
        var windowsize = $window.width();
        if (windowsize > 1024) {
            let controller = new ScrollMagic.Controller();
			let imageToFollow = document.querySelector('.row.website img');
			let textHeight = document.querySelector('.row.website .text-wrapper').clientHeight;
			let followDistance = imageToFollow.height;
			let scene = new ScrollMagic.Scene({
			  triggerElement: '.row.website .row-inner .text-wrapper', // starting scene, when reaching this element
			  duration: followDistance - textHeight // pin the element for a total of 400px
			})
			.setPin('.row.website .row-inner .text-wrapper'); // the element we want to pin

			// Add Scene to ScrollMagic Controller
			controller.addScene(scene);
        }
    }
    // Execute on load
    checkWidth();
    // Bind event listener
    jQuery(window).resize(checkWidth);
}

const highRez = () => {
	if (window.devicePixelRatio > 1) {
		let arr = document.querySelectorAll('[data-retina]');

		for(let item of arr) {
			let itemSrc = jQuery(item).find('img').attr('src');

			let finalSource = itemSrc.slice(0, itemSrc.length-4) + '_retina_5k' + itemSrc.slice(itemSrc.length-4);

			jQuery(item).find('img').attr('src', finalSource);
		}
	}
}

const pageTransitions = () => {
	'use strict';
	  var options = {
	    prefetch: true,
	    cacheLength: 2,
	    scroll: true,
	    onStart: {
	      duration: 500,
	      render: function ($container) {
	        jQuery('body').addClass('is-exiting');
	        smoothState.restartCSSAnimations();
	      }
	    },
	    onProgress: {
		    duration: 500,
		    render: function ($container) {
		    	jQuery('body').addClass('on-progress');
		    }
		  },
	    onReady: {
	      duration: 500,
	      render: function ($container, $newContent) {
	        // Remove your CSS animation reversing class
	        jQuery('body').removeClass('on-progress');

	        // Inject the new content
	        $container.html($newContent);
	      }
	    },
	    onAfter: function($container, $newContent) {
	    	Ready();

			jQuery('body').removeClass('is-exiting');
	    },
	  },
	  smoothState = jQuery('#main').smoothState(options).data('smoothState');
}

function Ready() {
	pageTransitions();
	firstLoad();
	splashOpening();
	mobileMenuFunctionality();
	
	

	if(document.getElementsByClassName('content')[0].className.match('page-id-10')) {
		beforeAfter();
	}

	if(document.getElementsByClassName('content')[0].className.match('postid-41')||
		document.getElementsByClassName('content')[0].className.match('postid-73')) {
		textFollow();
	}

	
	if(document.getElementsByClassName('content')[0].className.match('page-id-8')) {
		retouchedMasonry();
	}

	if(document.getElementsByClassName('content')[0].className.match('home')) {
		homeMasonry();
	}

	if(document.getElementsByClassName('content')[0].className.match('page-id-12')) {
		aboutPage();
	}

	AOS.init({
		duration: 700,
		anchorPlacement: 'center-top' 
	});

	highRez();
}

// fire when the page is fully loaded
window.onload = function() {
	Ready();
}