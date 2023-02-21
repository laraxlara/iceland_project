//Navbar

const navbar = document.getElementById('navbar')
const menuBtn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')

const offset = 50

menuBtn.addEventListener('click', () => {
	menu.classList.toggle('menu-open')
	console.log('clicked')
})

window.addEventListener('scroll', () => {
	if(pageYOffset > offset) {
		navbar.classList.add('navbar-active')
	} else {
		navbar.classList.remove('navbar-active')
	}
})


//Header Slider 

const title = document.getElementById('header-title')
const cap = document.querySelectorAll('.captions > div')
const pag = document.querySelectorAll('.pag')
const slideNum = document.querySelector('.slide-count')
const header = document.querySelector('header')

let id = 0

const images = [
	'./images/header1.jpg',
	'./images/header2.jpg',
	'./images/header3.jpg',
]

function slider(i) {
	header.style.background = `url(${images[i]}) no-repeat center`
	header.style.backgroundSize = 'cover'

	for (let i = 0; i < pag.length; i++) {
		pag[i].classList.remove('pag-active')
		cap[i].classList.remove('cap-active')
	};
	pag[i].classList.add('pag-active')
	cap[i].classList.add('cap-active')

	slideNum.innerHTML = `0${i + 1}`
}

for(let i = 0; i < pag.legth; i++) {

	pag[i].addEventListener('click', () => {
		slider(i)
		id = i
		stopAutoSlide()
	})
}

function nextSlide() {
	id++
	if(id > pag.length - 1) {
		id = 0
	}
	slider(id)
}

let autoSlide = setInterval(nextSlide, 10000)

function stopAutoSlide() {
	clearInterval(autoSlide)

	autoSlide = setInterval(nextSlide, 10000)
}