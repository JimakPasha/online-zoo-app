'use strict';

const coverElem = document.getElementById('cover');
const donateBtn = document.getElementById('btn-donate');
const formAnimal = document.getElementById('form-animal');
const formDonat = document.getElementById('form-donat');
const closeBtnAnimal = document.getElementById('close-btn-animal');
const closeBtnDonat = document.getElementById('close-btn-donat');
const nextBtnForm = document.getElementById('modal-animal__btn');
const donateBtnForm = document.getElementById('modal-donat__btn');
const mapImage = document.getElementById('map');
const wrapperMap = document.getElementsByClassName('map');
const infoAnimalBtnsBox = document.querySelectorAll('.animal-info__bottom-item');






infoAnimalBtnsBox.forEach(item => {
	item.addEventListener('click', function () {
		item.classList.toggle('active');
		let children = item.children;
		for (var i = 0; i < children.length; ++i) {
			children[i].classList.toggle('active');
		}
	});
});





donateBtn.addEventListener('click', () => {
	document.body.classList.add('notScroll');
	coverElem.classList.remove('hidden');
	formAnimal.classList.remove('hidden');
});

coverElem.addEventListener('click', () => {
	document.body.classList.remove('notScroll');
	coverElem.classList.add('hidden');
	formAnimal.classList.add('hidden');
	formDonat.classList.add('hidden');
});

closeBtnAnimal.addEventListener('click', () => {
	document.body.classList.remove('notScroll');
	coverElem.classList.add('hidden');
	formAnimal.classList.add('hidden');
	formDonat.classList.add('hidden');
});

closeBtnDonat.addEventListener('click', () => {
	document.body.classList.remove('notScroll');
	coverElem.classList.add('hidden');
	formDonat.classList.add('hidden');
});

nextBtnForm.addEventListener('click', (e) => {
	e.preventDefault();
		formAnimal.classList.add('hidden');
		formDonat.classList.remove('hidden');
});


donateBtnForm.addEventListener('click', (e) => {
	e.preventDefault();
	document.body.classList.remove('notScroll');
	coverElem.classList.add('hidden');
	formDonat.classList.add('hidden');
	alert('Thank you for your donation');
});



const menuBtn = document.querySelector('.menu__btn');
if(menuBtn) {
	const menuList = document.querySelector('.menu__list');
	menuBtn.addEventListener('click', function(e) {
		document.body.classList.toggle('lock');
		this.classList.toggle('active');
		menuList.classList.toggle('active');
	});
}

function maxLengthCheck(object) {
	if (object.value.length > object.maxLength) {
		object.value = object.value.slice(0, object.maxLength)
	}
	if (object.value.length < object.minLength) {
		object.value = object.value.slice(0, object.minLength)
	}
}









// const getCoords = (elem) => {
// 	var box = elem.getBoundingClientRect();
// 	return {
// 		top: box.top + pageYOffset,
// 		left: box.left + pageXOffset
// 	};
// }

// mapImage.addEventListener('mousedown', (e) => {

// 		const {top, left} = getCoords(mapImage);
// 		let shiftX = e.pageX - left;
// 		let shiftY = e.pageY - top;

// 		const moveAt = (e) => {
// 			mapImage.style.top = e.pageX - shiftX + 'px';
// 			mapImage.style.left = e.pageY - shiftY + 'px';
// 		};

// 		wrapperMap.appendChild(mapImage);
// 		moveAt(e);

// 		document.onmousemove = function (e) {
// 			moveAt(e);
// 		};

// 		document.addEventListener('mousemove', moveAt);
// 	});

// mapImage.ondragstart = function () {
// 	return false;
// };