// SCROLL SECTIONS ACTIVE LINK
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
	const scrollY = window.pageYOffset

	sections.forEach(section => {
		const
			sectionHeight = section.offsetHeight,
			sectionTop = section.offsetTop - 50,
			sectionID = section.getAttribute('id')

		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			document.querySelector(`.nav__menu a[href*="${sectionID}"]`).classList.add('active-link')
		} else {
			document.querySelector(`.nav__menu a[href*="${sectionID}"]`).classList.remove('active-link')
		}
	})
}

window.addEventListener('scroll', scrollActive)

// DARK & LIGHT MODE
const themeButton = document.querySelector('#theme-button')

const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// if user selected
const selectedTheme = localStorage.getItem("selected-theme")
const selectedIcon = localStorage.getItem("selected-theme")

// function expration
const getCurrentTheme = () => 
	document.body.classList.contains(darkTheme)? 'dark' : 'light';

const getCurrentIcon = () => 
	themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

if (selectedTheme) {
	document.body.classList.toggle(darkTheme)
	themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](iconTheme) // bu yerda [] qavs ichiga yoizlgan kod bilan .toggle vazifasi bir xil
}


themeButton.addEventListener('click', function() {
	document.body.classList.toggle(darkTheme)
	themeButton.classList.toggle(iconTheme)
	// function called
	localStorage.setItem("selected-theme",getCurrentTheme())
	localStorage.setItem("selected-icon",getCurrentIcon())
})