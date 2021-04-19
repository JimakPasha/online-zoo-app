'use strict';

const menuBtn = document.querySelector('.menu__btn');
if(menuBtn) {
	const menuList = document.querySelector('.menu__list');
	menuBtn.addEventListener('click', function(e) {
		document.body.classList.toggle('lock');
		this.classList.toggle('active');
		menuList.classList.toggle('active');
	});
}