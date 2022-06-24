// Ask
var a = 'active';
var ask_out;

$(document).on('click', '.ask_button', function () {
    $('.ask').toggleClass(a);

    if (!$('.ask').hasClass(a)) {
        $('.ask').removeClass('_thank');

        clearTimeout(ask_out);
    }
})

$(document).on('click', function (event) {
    if ($(event.target).closest('.ask').length === 0) {
        $('.ask').removeClass('active _thank');
        clearTimeout(ask_out);
    }
});

$(document).on('click', '.ask_form_button', function () {
    $('.ask').addClass('_thank');

    ask_out = setTimeout(function () {
        $('.ask').removeClass('active _thank');
    }, 3000);
})

$('#askForm').on('submit', function (event) {
    event.preventDefault();

    const name = $('#name').val();
    const email = $('#email').val();
    const message = $('#message').val();

    $.ajax({
        url: '/api/v1/ask-form',
        type: 'POST',
        data: {
            '_token': $('meta[name="csrf-token"]').attr('content'),
            name: name,
            email: email,
            message: message,
        }
    });
});