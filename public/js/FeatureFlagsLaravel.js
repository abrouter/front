const a = 'active';

// Form nav

$(window).scroll(function () {
	if ($('.knot_form_item').length) {
		$('.knot_form_item').each(function () {
			const w_scroll = $(window).scrollTop(),
				e = $(this),
				e_top = e.offset().top,
				e_height = e.height(),
				e_index = e.index(),
				line = $('.knot_form_nav .line'),
				nav = $('.knot_form_nav_item');

			if (w_scroll + 20 >= e_top) {
				nav.eq(e_index).addClass(a).siblings().removeClass(a);
				line.css({
					'top': nav.eq(e_index).position().top + nav.parent().position().top - 30,
					'height': nav.eq(e_index).height()
				})
			} else if (w_scroll <= $('.knot_form_item').eq(0).offset().top) {
				nav.eq(0).addClass(a);
				line.css({
					'top': nav.eq(0).position().top + nav.parent().position().top - 30,
					'height': nav.eq(0).height()
				})
			}
		})
	}
})

//Slow roll to anchor

function scroll_to(e) {
	if ($(e).length !== 0) {
		$('html, body').animate({
			scrollTop: $(e).offset().top - 19
		}, 500);
	}
}

// Select 

if ($('.select select').length) {
	$('.select select').knotSelect();
}