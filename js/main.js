const links = document.getElementsByClassName('footer__link')
Array.from(links).forEach(
	el =>
		(el.onclick = e => {
			e.preventDefault()
			window.scrollTo({ top: 0, behavior: 'smooth' })
		})
)

window.addEventListener('scroll', () => {
	const header = document.querySelector('.header-container');
	if (window.scrollY > 50) {
		header.classList.add('scrolled');
	} else {
		header.classList.remove('scrolled');
	}
});