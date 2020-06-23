/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const navBar = document.querySelector('.navbar__menu')

const navUl = document.getElementById('navbar__list')

const mainSections = document.querySelectorAll('section')

const sectionsHead = document.querySelectorAll('h2')

const toTopButton = document.querySelector('.btn-to-top')

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

const viewNavBar = () => {navBar.style.display = 'block'}
const hideNavBar = () => {navBar.style.display = 'none'}

let isScrolling
window.addEventListener('scroll', event => {

	viewNavBar()
	
	window.clearTimeout(isScrolling);

	isScrolling = setTimeout(function() {

		hideNavBar()

	}, 5000);

}, false)



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// create navigation based on page sections
const pageSections = () => {
	let navLi
	let dataNav
	let i
	for (i = 0; i < mainSections.length; i++) {
		navUl.appendChild(document.createElement('li'))
		navLi = document.querySelectorAll('li')
		navLi[i].appendChild(document.createElement('a'))
		navAnchor = document.querySelectorAll('a')
		navAnchor[i].innerHTML = sectionsHead[i].innerHTML
		anchorID = mainSections[i].getAttribute('id')
		navAnchor[i].setAttribute('href', `#${anchorID}`)
		dataNav = mainSections[i].getAttribute('data-nav')
		navAnchor[i].setAttribute('data-nav', dataNav)
	}	 
}
pageSections()


// Add class 'active' to section when near top of viewport

window.addEventListener('scroll', function() {
	let i
	for (i = 0; i < mainSections.length; i++) {	
		if (window.pageYOffset == mainSections[i].offsetTop){
			mainSections[i].classList.add('your-active-class')	
		}

		if (window.pageYOffset == mainSections[i].offsetTop + mainSections[i].offsetHeight) {
			mainSections[i].classList.remove('your-active-class')
		}
	}

	if (window.pageYOffset >= 1200) {
		toTopButton.style.display = 'block'
	} else {
		toTopButton.style.display = 'none'
	}
})

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Scroll to top button 

toTopButton.addEventListener('click', function(){
	window.scrollTo(0, 0)
})