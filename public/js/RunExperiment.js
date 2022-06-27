var a = 'active';

// Steps

function steps(e, step_name) {
    var e = $(e),
        step = $('.' + step_name + '_step').eq(e.index());

    if (!e.hasClass(a)) {
        steps_line(e);
        e.addClass(a).siblings().removeClass(a);
        step.slideDown().addClass(a).siblings('.' + step_name + '_step').slideUp().removeClass(a);
    }
}

function steps_line(e) {
    var e = $(e),
        line = e.parent().siblings('.line');

    if (line.length) {
        line.css({
            'left': e.position().left - 12,
            'width': e.outerWidth() + 24
        })
    }
}

$(document).ready(function () {
    steps_line('.code_tab.active');
})


// Auto height

function auto_grow(element) {
    element.style.height = "5px";
    element.style.height = (element.scrollHeight)+"px";

    if (!$(element).parent().hasClass(a)) {
        $(element).parent().hide();
    }
}

$(document).ready(function () {
    $('.code_step textarea').each(function () {
        auto_grow(this);
    })
})



// Code copy

$(document).on('click', '.code_step_copy', function () {
    var text = $(this).siblings('textarea').val();

    console.log(text);

    if(!$(this).find('.input_copied').length) {
        var input = $('<textarea class="input_copied"></textarea>').val(text);
        input.css({
            'position': 'absolute',
            'left': '-9999px'
        });
        $(this).append(input);
    }

    input = $(this).find('.input_copied');
    $(input[0]).val(text)
    input[0].select();
    input[0].setSelectionRange(0, 99999)
    document.execCommand('copy');
})
