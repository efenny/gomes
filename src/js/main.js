// Check to see if the user has visited the page already
const firstLoad = () => {
	if(localStorage.getItem('visited') !== 'true') {
		document.querySelector('body').classList.add('first-visit');
		// If they haven't then run the splash page animation
		splashStart();
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

// get the elements that need to have their characters wrapped in span
function animateLetters() {
	let allSelected = document.getElementsByClassName('character-slide');
	
	for (let item of allSelected) {
		item.innerHTML = wordSpanWrapper(item.dataset.characterSlide);
	}
}

function homeMasonry() {
	var elem = document.querySelector('.row-inner');
	var msnry = new Masonry( elem, {
	  // options
	  itemSelector: '.case-study'
	});

	// element argument can be a selector string
	//   for an individual element
	var msnry = new Masonry( '.grid', {
	  // options
	});
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
				// e.preventDefault();
				var horizontal = (e.clientX - x) / width * 100;
			    item.children[item.children.length-1].style.setProperty('width', horizontal + '%');
			}

			function endComp(e) {

			}

			item.addEventListener('mouseenter', setComp);
			item.addEventListener('touchstart', setComp);
			item.addEventListener('mousemove', moveComp);
			item.addEventListener('touchmove', moveComp);
			// item.addEventListener('touchstart', moveComp(e));
		}
	}

	// on resize, adjust the sizing
	window.addEventListener('resize', function(){
		sizing(items);
	});

	// initialize
	sizing(items);
	movement(items);
}

const homeMasonry = () => {
	jQuery('.design .row-inner').masonry({
	  itemSelector: '.case-study',
	  columnWidth: 1,
	});
}

const retouchedMasonry = () => {
	jQuery('.retouching .row-inner').masonry({
	  itemSelector: '.retouched',
	  columnWidth: 1,
	});
}

// fire when the page is fully loaded
window.onload = function() {
	firstLoad();
	animateLetters();

	if(document.getElementsByTagName('body')[0].className.match('page-id-10')) {
		beforeAfter();
	}

	if(document.getElementsByTagName('body')[0].className.match('page-id-8')) {
		retouchedMasonry();
	}

	if(document.getElementsByTagName('body')[0].className.match('home')) {
		homeMasonry();
	}
	
}