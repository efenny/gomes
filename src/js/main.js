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
	

	var $window = jQuery(window);
	var windowsize = $window.width();
	if(windowsize < 1024) {
		jQuery('.item-wrapper').each(function(){
			jQuery(this).imagesCompare({
				interactionMode: "drag",
				addDragHandle: false,

			});
		});
	} else {
		jQuery('.item-wrapper').each(function(){
			jQuery(this).imagesCompare({
				interactionMode: "mousemove",
				addDragHandle: false,

			});
		});
	}


	


	// let items = document.getElementsByClassName('item-wrapper');

	// // set the initial sizes for the elements
	// function sizing(elements) {
	// 	for (let item of elements) {
	// 		let itemHeight = item.children[0].clientHeight;
	// 		let itemWidth = item.children[0].clientWidth;

	// 		// only need to affect the second and third items
	// 		for (let i = 1; i < 3; i++) {
	// 			item.children[i].style.height = ''+itemHeight+'px';
	// 			item.children[i].style.width = ''+itemWidth/2+'px';
	// 			item.children[i].style.backgroundSize = ''+itemWidth+'px '+itemHeight+'px';
	// 		}
	// 	}
	// }

	// // mouse and touch 
	// function movement(elements) {
	// 	let x = undefined;
	// 	let width = undefined;

	// 	for (let item of elements) {
	// 		function setComp() {
	// 			let itemSize = item.getBoundingClientRect();

	// 			x = itemSize.x;
	// 			width = itemSize.width;
	// 		}


	// 		function moveComp(e) {
	// 			var horizontal = (e.clientX - x) / width * 100;
	// 		    item.children[item.children.length-1].style.setProperty('width', horizontal + '%');
	// 		}

	// 		function endComp(e) {

	// 		}

	// 		item.addEventListener('mouseenter', setComp);
	// 		item.addEventListener('touchstart', setComp);
	// 		item.addEventListener('mousemove', moveComp);
	// 		item.addEventListener('touchmove', moveComp);
	// 	}
	// }

	// // on resize, adjust the sizing
	// window.addEventListener('resize', function(){
	// 	sizing(items);
	// });

	// // initialize
	// movement(items);
	// sizing(items);
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
			  duration: followDistance - textHeight, // pin the element for a total of 400px
			  offset: textHeight / 2
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


const scrollingMenu = () => {
	var lastScrollTop = 0;
	jQuery(window).scroll(function() {
        if (jQuery(document).scrollTop() > 100) {
            jQuery('header').removeClass('active');
        }
        else { 
            jQuery('header').addClass('active');
        }

        var st = jQuery(this).scrollTop();
		if (st > lastScrollTop){
		    // downscroll code
		    jQuery('header').removeClass('active');
		} else { 
		    // upscroll code
		    jQuery('header').addClass('active');
		}
		lastScrollTop = st;
    });
}

// initiate the masonry for the home page
const homeMasonry = () => {
	var homemason = jQuery('.design .row-inner');
	
	var $mason = homemason.imagesLoaded(function(){
		
	});

	jQuery(homemason).isotope({
		  itemSelector: '.case-study',
		  // layoutMode: 'fitColumns',
		  // layoutMode: 'masonry',
		  percentPosition: true,
		  ayoutMode: 'masonry',
		    masonry: {
		        columnWidth: '.blue-ocean'
		    }
		});
}


// initiate the masonry for the retouching page
const retouchedMasonry = () => {
	// $('.retouching .row-inner').isotope({
	//   itemSelector: '.retouched',
	//   sortBy: 'original-order',
	// });

	jQuery('.retouching .row-inner').isotope({
	  itemSelector: '.retouched',
	  transitionDuration: 0,
	  masonry: {
	    // use element for option
	    columnWidth: '.width-3'
	  }
	});
}

function Ready() {
	// pageTransitions();
	firstLoad();
	splashOpening();
	mobileMenuFunctionality();
	scrollingMenu();

	
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

	highRez();
}

// fire when the page is fully loaded
window.onload = function() {
	Ready();

	AOS.init({
		duration: 600,
		anchorPlacement: 'center-top' 
	});
	

	
}