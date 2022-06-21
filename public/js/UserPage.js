$(document).ready(function () {
    $('#search_user_data').on('click', function (e) {
        e.preventDefault();

        let userId = $('#user_id').val();
    })
})

$('#event_date_from').daterangepicker({
    singleDatePicker: true,
    showDropdowns: true,
    locale: {
        format: 'MMMM DD, YYYY'
    }
})

$('#event_date_to').daterangepicker({
    singleDatePicker: true,
    showDropdowns: true,
    locale: {
        format: 'MMMM DD, YYYY'
    }
})