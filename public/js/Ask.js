// Ask
const a = 'active';
const $ = jQuery.noConflict();
const form = $('#askForm');
const askSection = $('.ask');

let askOut;

form.on('submit', function (event) {
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
        },
        success: () => {
            form[0].reset();

            if ($(event.target).closest('.ask').length === 0) {
                askSection.removeClass('active _thank');
                clearTimeout(askOut);
            }

            askSection.addClass('_thank');

            askOut = setTimeout(function () {
                askSection.removeClass('active _thank');
            }, 3000);
        }
    });
})

$(document).on('click', '.ask_button', function () {
    askSection.toggleClass(a);

    if (!askSection.hasClass(a)) {

        askSection.removeClass('_thank');
        clearTimeout(askOut);
    }
})