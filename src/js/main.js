// which transition event to use
function whichTransitionEvent(){
    var t;
    var el = document.createElement('fakeelement');
    var transitions = {
      'transition':'transitionend',
      'OTransition':'oTransitionEnd',
      'MozTransition':'transitionend',
      'WebkitTransition':'webkitTransitionEnd'
    }

    for(t in transitions){
        if( el.style[t] !== undefined ){
            return transitions[t];
        }
    }
}

// check when element is finished animating
const transitionEvent = whichTransitionEvent();
const transtionEnded = (element, callback) => {
	transitionEvent && element.addEventListener(transitionEvent, callback);
}

const splashStart = () => {
	console.log('start');
}

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

// Get a string and wrap each character with span
const letterSpanWrapper = (str) => {
	let strSpans = [];
	for (let char of str.split(' ')) {
		strSpans.push(`<span>${char}</span>`)
	}
	return strSpans.join(' ');
}

// get the elements that need to have their characters wrapped in span
function animateLetters() {
	let allSelected = document.getElementsByClassName('character-slide');
	
	for (let item of allSelected) {
		item.innerHTML = letterSpanWrapper(item.dataset.characterSlide);
	}
}

// fire when the page is fully loaded
window.onload = function() {
	firstLoad();
	animateLetters();
	
}