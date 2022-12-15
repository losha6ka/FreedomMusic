const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: false,
	allowTouchMove: false,
	slidesPerView: 1,
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});
jQuery(($) => {
	// menu
	const menu = $(".content");
	const menuBtn = $(".main-myButton");
	$(document).mouseup(function (e) {
		if (e.target.className === "main-myButton") {
			menuBtn.addClass("is-active");
			menu.stop().slideDown();
		} else if (e.target.className === "main-myButton is-active") {
			menuBtn.removeClass("is-active");
			menu.stop().slideUp();
		} else if ((menu.has(e.target).length === 0) && (menuBtn.has(e.target).length === 0)) {
			// if ($(window).width() < 768) {
			menuBtn.removeClass("is-active");
			menu.stop().slideUp();
			// }
		}
	});
});
function onEntry(entry) {
	entry.forEach(change => {
		if (change.isIntersecting) {
			change.target.classList.add('element-show');
		}
	});
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.readme, .about-us, .about__img, .gitare__body');
for (let elm of elements) {
	observer.observe(elm);
};
var header = $('.header'),
	scrollPrev = 0;

$(window).scroll(function () {
	var scrolled = $(window).scrollTop();

	if (scrolled > 100 && scrolled > scrollPrev) {
		header.addClass('out');
	} else {
		header.removeClass('out');
	}
	scrollPrev = scrolled;
});
$(window).scroll(function () {
	var top = $(document).scrollTop();
	if (top < 50) $(".header").removeClass('fixed');
	else $(".header").addClass('fixed');
});