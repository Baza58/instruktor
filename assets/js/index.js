require('../css/style.less');

(function() {
	const viewer = document.querySelector('.customers-viewer');
	const container = document.querySelector('.customers-box-container');
	const boxes = document.querySelectorAll('.customers-box');
	const windowWidth = window.innerWidth;
	const nextBtn = document.querySelector('.customers-img-right');
	const prevBtn = document.querySelector('.customers-img-left');
	let transformed = 0;
	let transform = 0;
	let max = 0;

	nextBtn.addEventListener('click', e => {
		nextBtn.style.display = 'block';
		prevBtn.style.display = 'block';
		
		transformed += transform;
		container.style.transform = `translateX(-${transformed}px)`;
		if(transformed > max) {
			nextBtn.style.display = 'none';
		}
	});
	prevBtn.addEventListener('click', e => {
		prevBtn.style.display = 'block';
		nextBtn.style.display = 'block';
		transformed -= transform;
		container.style.transform = `translateX(-${transformed}px)`;
		if (transform > transformed) {
			prevBtn.style.display = 'none';
		}
	});
	
	if (windowWidth > 1000) {
		viewer.style.maxWidth = '970px';
		viewer.style.width = '100%';
		let containerWidth = viewer.clientWidth;
		for (let i = 0; i < boxes.length; i++) {
			let left = i * ( containerWidth / 3 - 4);
			let width = containerWidth / 3;
			boxes[i].style.left = `${left}px`;
			boxes[i].style.width = `${width}px`;
			transform = boxes[0].clientWidth ;
		}
		max = (boxes.length - 5) * boxes[0].clientWidth;

	} else if (windowWidth > 600 && windowWidth < 1000) {
		let containerWidth = viewer.clientWidth;
		for (let i = 0; i < boxes.length; i++) {
			let width = i * (windowWidth / 2);
			boxes[i].style.left = `${width}px`;
			boxes[i].style.width = '40%';
			transform = viewer.clientWidth / 2;
		}
		max = (boxes.length - 2) * boxes[0].clientWidth;
	} else {
		let containerWidth = viewer.clientWidth;
		for (let i = 0; i < boxes.length; i++) {
			let width = i * windowWidth;
			boxes[i].style.left = `${width}px`;
			boxes[i].style.width = '100%';
			transform = windowWidth;
		}
		max = (boxes.length - 1) * boxes[0].clientWidth;
	}

})();