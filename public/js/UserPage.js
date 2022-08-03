$(document).ready(function () {
    let experimentsBranches,
        userId,
        events;

    $('.loader').hide();

    $(document).on('input', '#user_id', function (event) {
        let value = event.currentTarget.value;

        if (value.length === 0) {
            $('#user_id').attr('style', 'box-shadow: inset 0 0 0 0.0625rem #dc3545, 0 0 0 0.25rem #e0e3e9')
            $('#input_user_id').append(
                '<div class="input_error" id="error">Please enter user ID.</div>'
            )
        } else {
            $('#user_id').removeAttr('style');
            $('#error').remove();
        }
    })

    $(document).on('click', '#search_user_data', function (e) {
        e.preventDefault();

        $('#results').remove();
        $('#user_info_title').remove();
        $('#experiments_title').remove();
        $('#user_events_title').remove();
        $('#user_info').remove();
        $('#new_user_experiment').remove();
        $('#new_user_event').remove();
        $('#empty_user_info').remove();
        $('#user_id').removeAttr('style');
        $('#error').remove();

        userId = $('#user_id').val();

        if (userId.length === 0) {
            $('#user_id').attr('style', 'box-shadow: inset 0 0 0 0.0625rem #dc3545, 0 0 0 0.25rem #e0e3e9')
            $('#input_user_id').append(
                '<div class="input_error" id="error">Please enter user ID.</div>'
            )

            return false;
        }

        $('.loader').show();

        let dateFrom = $('#event_date_from').val(),
            dateTo = $('#event_date_to').val(),
            convertDateFrom = convertDate(dateFrom),
            convertDateTo = convertDate(dateTo);

        $.ajax({
            'async': false,
            'method': "GET",
            'url': "/api/v1/user-info/" + userId,
            'headers': {
                'Authorization': window.shortToken,
            },
            'success': function (response) {
                let entry = response['data']['attributes'],
                    createdAt = entry['created_at'],
                    browser = entry['browser'] ?? '',
                    platform = entry['platform'] ?? '',
                    countryName = entry['country_name'] ?? '',
                    date = getFullDate(createdAt);

                if (createdAt !== null) {
                    $('#add_user').show();
                    $('#empty_user_info').remove();

                    $('.new_user').append(
                        '<div class="new_user_label" id="results">Results:</div>' +
                        '<div class="new_user_title" id="user_info_title">User info</div>' +
                        '<div class="new_user_info" id="user_info"></div>' +
                        '<div class="new_user_title" id="experiments_title">Experiments</div>' +
                        '<div class="new_user_experiment" id="new_user_experiment"></div>' +
                        '<div class="new_user_title" id="user_events_title">User events</div>' +
                        '<div class="new_user_event" id="new_user_event">' +
                            '<label class="new_user_event_input">' +
                                '<span class="lab">' +
                                    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" ' +
                                         'xmlns="http://www.w3.org/2000/svg">' +
                                        '<path ' +
                                            'd="M19 4H18V2H16V4H8V2H6V4H5C3.89 4 3.01 4.9 3.01 6L3 20C3 21.1 3.89 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V10H19V20ZM19 8H5V6H19V8ZM9 14H7V12H9V14ZM13 14H11V12H13V14ZM17 14H15V12H17V14ZM9 18H7V16H9V18ZM13 18H11V16H13V18ZM17 18H15V16H17V18Z" ' +
                                            'fill="#9699AB"/>' +
                                    '</svg>' +
                                    '<span>Date Range: </span>' +
                                '</span>' +
                                '<input class="input" type="text" value="' + dateFrom + ' - ' + dateTo + '" id="event_date">' +
                            '</label>' +
                        '</div>'
                    )

                    $('.new_user_info').append(
                        '<div class="new_user_info_li">' +
                            '<span>Registered</span>' +
                            '<p>' + date + '</p>' +
                        '</div>' +
                        '<div class="new_user_info_li">' +
                            '<span>Browser</span>' +
                            '<p>' + browser + '</p>' +
                        '</div>' +
                        '<div class="new_user_info_li">' +
                            '<span>Platform</span>' +
                            '<p>' + platform + '</p>' +
                        '</div>' +
                        '<div class="new_user_info_li">' +
                            '<span>Country</span>' +
                            '<p>' + countryName + '</p>' +
                        '</div>'
                    )
                } else {
                    $('#add_user').hide();

                    $('.new_user').append(
                        '<div class="new_user_label" id="empty_user_info">There is no user data yet</div>'
                    )
                }

            }
        });

        $.ajax({
            'async': false,
            'method': "GET",
            'url': "/api/v1/experiments/have-user/" + userId,
            'headers': {
                'Authorization': window.shortToken,
            },
            'success': function (response) {
                if (response.data.length > 0) {
                    $('.new_user_experiment').append(
                        '<div class="new_user_experiment_net _top">' +
                            '<div class="new_user_experiment_col">Experiment name</div>' +
                            '<div class="new_user_experiment_col">Branch</div>' +
                            '<div class="new_user_experiment_col">Got into the experiment at</div>' +
                        '</div>'
                    )

                    for (let id in response.data) {
                        let entry = response.data[id],
                            experimentName = entry['attributes']['experiment-uid'],
                            branchName = entry['attributes']['branch-uid'],
                            experimentId = entry['relationships']['experiment_id']['data']['id'],
                            branchId = entry['relationships']['experiment_branch_id']['data']['id'],
                            createdAt = entry['attributes']['created_at'],
                            date = getFullDate(createdAt);

                        $('.new_user_experiment').append(
                            '<div class="new_user_experiment_item new_user_experiment_net">' +
                                '<div class="new_user_experiment_col">' +
                                    '<span>Experiment name</span>' +
                                    experimentName +
                                '</div>' +
                                '<div class="new_user_experiment_col">' +
                                    '<span>Branch</span>' +
                                    branchName +
                                '</div>' +
                                '<div class="new_user_experiment_col">' +
                                    '<span>Got into the experiment at</span>' +
                                    date +
                                '</div>' +
                                '<div class="new_user_experiment_col _del" id="remove" ' +
                                    'data-user-id="' + userId + '" ' +
                                    'data-experiment-branch-id="' + branchId + '" ' +
                                    'data-experiment-id="' + experimentId +
                                '">' +
                                        '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" ' +
                                             'xmlns="http://www.w3.org/2000/svg">' +
                                            '<rect width="32" height="32" rx="10" fill="var(--bg)"/>' +
                                            '<path ' +
                                                'd="M10 23C10 24.1 10.9 25 12 25H20C21.1 25 22 24.1 22 23V13C22 11.9 21.1 11 20 11H12C10.9 11 10 11.9 10 13V23ZM13 13H19C19.55 13 20 13.45 20 14V22C20 22.55 19.55 23 19 23H13C12.45 23 12 22.55 12 22V14C12 13.45 12.45 13 13 13ZM19.5 8L18.79 7.29C18.61 7.11 18.35 7 18.09 7H13.91C13.65 7 13.39 7.11 13.21 7.29L12.5 8H10C9.45 8 9 8.45 9 9C9 9.55 9.45 10 10 10H22C22.55 10 23 9.55 23 9C23 8.45 22.55 8 22 8H19.5Z" ' +
                                                'fill="var(--color)"/>' +
                                        '</svg>' +
                                '</div>' +
                            '</div>'
                        )
                    }
                } else {
                    $('.new_user_experiment').append(
                        '<div class="new_user_label" id="empty_experiment">There is no user data yet</div>'
                    )
                }
            }
        });

        $.ajax({
            'async': false,
            'method': "GET",
            'url': "/api/v1/statistics/user/"
                + userId
                + "?filter[date_from]=" + convertDateFrom +"&filter[date_to]="+ convertDateTo,
            'headers': {
                'Authorization': window.shortToken,
            },
            'success': function (response) {
                getUserStats(response, userId)

                events = response.data

                $('#event_date').daterangepicker({
                    singleDatePicker: false,
                    showDropdowns: true,
                    locale: {
                        format: 'MMMM DD, YYYY'
                    }
                })
            },
            'complete': function () {
                window.setTimeout(function () {
                    $('.loader').hide()
                }, 1000)
            },
        });
    })

    $(document).on('click','#add_user_to_experiment', function (event) {
        $.ajax({
            'async': false,
            'method': "GET",
            'url': "/api/v1/experiments?include=branches",
            'headers': {
                'Authorization': window.shortToken,
            },
            'success': function (response) {
                $('#experiments .select select').empty();
                $('#experiments .select .select_dropdown ul').empty();
                $('#experiment_branches .select select').empty();
                $('#experiment_branches .select .select_dropdown ul').empty();

                if (response.data.length > 0) {
                    experimentsBranches = response.included;

                    $('.new_user_add_form').show();
                    $('#experiments .select .current').attr('data-id', response.data[0]['id']);
                    $('#experiments .select .current').html(
                        response.data[0]['attributes']['name']
                    );

                    $('#experiment_branches .select .current').attr('data-id', response.included[0]['id']);
                    $('#experiment_branches .select .current').html(
                        response.included[0]['attributes']['name']
                    );

                    for (let id in response.data) {
                        let entry = response.data[id],
                            experimentId = entry['id'],
                            experimentName = entry['attributes']['name'];

                        $('#experiments .select select').append(
                            '<option ' +
                            'value="' + experimentId +
                            '">' +
                            experimentName +
                            '</option>'
                        )
                        $('#experiments .select .select_dropdown ul').append(
                            '<li ' +
                            'data-value="' + experimentId +
                            '">' +
                            experimentName +
                            '</li>'
                        )
                    }

                    for (let id in response.included) {
                        let entry = response.included[id],
                            branchesId = entry['id'],
                            branchesName = entry['attributes']['name'],
                            experimentsId = entry['relationships']['experiment']['data']['id'];

                        if (experimentsId === response.data[0]['id']) {
                            $('#experiment_branches .select select').append(
                                '<option ' +
                                    'value="' + branchesId +
                                '">' +
                                    branchesName +
                                '</option>'
                            )

                            $('#experiment_branches .select .select_dropdown ul').append(
                                '<li ' +
                                'data-value="' + branchesId +
                                '">' +
                                branchesName +
                                '</li>'
                            )
                        }
                    }
                }
            }
        });
    })

    $(document).on('click','#experiments ul li', function (event) {
        let experimentId = event.currentTarget.getAttribute('data-value'),
            n = 0;
        $('#experiments .select .current').attr('data-id', experimentId);
        $('#experiment_branches .select select').empty();
        $('#experiment_branches .select .select_dropdown ul').empty();

        for (let id in experimentsBranches) {
            if (experimentId === experimentsBranches[id]['relationships']['experiment']['data']['id']) {
                if (n === 0) {
                    $('#experiment_branches .select .current').attr(
                        'data-id', experimentsBranches[id]['id']
                    );
                    $('#experiment_branches .select .current').html(
                        experimentsBranches[id]['attributes']['name']
                    );
                }

                let branchesId = experimentsBranches[id]['id'],
                    branchesName = experimentsBranches[id]['attributes']['name'];

                $('#experiment_branches .select select').append(
                    '<option ' +
                    'value="' + branchesId +
                    '">' +
                        branchesName +
                    '</option>'
                )

                $('#experiment_branches .select .select_dropdown ul').append(
                    '<li ' +
                    'data-value="' + branchesId +
                    '">' +
                    branchesName +
                    '</li>'
                )

                n++
            }
        }
    })

    $(document).on('click','#experiment_branches ul li', function (event) {
        let branchesId = event.currentTarget.getAttribute('data-value');

        for (let id in experimentsBranches) {
            if (branchesId === experimentsBranches[id]['id']) {
                $('#experiment_branches .select .current').attr('data-id', branchesId);
            }
        }
    })

    $(document).on('click','#send_user_to_experiment', function (event) {
        event.preventDefault();
        $('.loader').show();

        let experimentId = $('.new_user_add_form #experiments .select .current').attr('data-id'),
            branchesId = $('.new_user_add_form #experiment_branches .select .current').attr('data-id');

        $.ajax({
            'method': "POST",
            'url': "/api/v1/experiments/add-user",
            'headers': {
                'Authorization': window.shortToken,
            },
            'data': {
                'data': {
                    'type': 'experiment_users',
                    'attributes': {
                        'user_signature': userId
                    },
                    'relationships': {
                        'experiments': {
                            'data': {
                                'id': experimentId,
                                'type': 'experiments'
                            }
                        },
                        'branches': {
                            'data': {
                                'id': branchesId,
                                'type': 'experiment_branches'
                            }
                        }
                    }
                }
            },
            'success': function (response) {
                $('.loader').hide();
                $('#empty_experiment').remove();

                let entry = response.data,
                    createdAt = entry.attributes.created_at,
                    experimentName = entry.attributes['experiment-uid'],
                    branchName = entry.attributes['branch-uid'],
                    experimentId = entry.relationships['experiment_id']['data']['id'],
                    branchId = entry.relationships['experiment_branch_id']['data']['id'],
                    date = getFullDate(createdAt);

                let experiments = $('.new_user_experiment_item ._del'),
                    userHasExperiments = true;

                let experimentsFilter = experiments.filter((id, experiment) =>
                    experiment.getAttribute('data-experiment-id') === experimentId
                );

                if (experimentsFilter.length === 0) {
                    userHasExperiments = false
                }

                if (!userHasExperiments) {
                    $('.new_user_add_form').hide();

                    $('.new_user_experiment').append(
                        '<div class="new_user_experiment_item new_user_experiment_net">' +
                            '<div class="new_user_experiment_col">' +
                                '<span>Experiment name</span>' +
                                experimentName +
                            '</div>' +
                            '<div class="new_user_experiment_col">' +
                                '<span>Branch</span>' +
                                branchName +
                            '</div>' +
                            '<div class="new_user_experiment_col">' +
                                '<span>Got into the experiment at</span>' +
                                date +
                            '</div>' +
                            '<div class="new_user_experiment_col _del" id="remove_user_from_experiment" ' +
                                'data-user-id="' + userId + '" ' +
                                'data-experiment-branch-id="' + branchId + '" ' +
                                'data-experiment-id="' + experimentId +
                            '">' +
                                '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" ' +
                                'xmlns="http://www.w3.org/2000/svg">' +
                                    '<rect width="32" height="32" rx="10" fill="var(--bg)"/>' +
                                    '<path ' +
                                    'd="M10 23C10 24.1 10.9 25 12 25H20C21.1 25 22 24.1 22 23V13C22 11.9 21.1 11 20 11H12C10.9 11 10 11.9 10 13V23ZM13 13H19C19.55 13 20 13.45 20 14V22C20 22.55 19.55 23 19 23H13C12.45 23 12 22.55 12 22V14C12 13.45 12.45 13 13 13ZM19.5 8L18.79 7.29C18.61 7.11 18.35 7 18.09 7H13.91C13.65 7 13.39 7.11 13.21 7.29L12.5 8H10C9.45 8 9 8.45 9 9C9 9.55 9.45 10 10 10H22C22.55 10 23 9.55 23 9C23 8.45 22.55 8 22 8H19.5Z" ' +
                                    'fill="var(--color)"/>' +
                                '</svg>' +
                            '</div>' +
                        '</div>'
                    )

                    toastr.options.positionClass = 'toast-top-left';
                    toastr.success('User added');
                }

                if (userHasExperiments) {
                    toastr.options.positionClass = 'toast-top-left';
                    toastr.warning('User already added');
                }
            }
        });
    })

    $(document).on('click','#cancel', function (event) {
        $('.new_user_add_form').hide();
        $('#experiments .select select').empty();
        $('#experiments .select .select_dropdown ul').empty();
        $('#experiment_branches .select select').empty();
        $('#experiment_branches .select .select_dropdown ul').empty()
    })

    $(document).on('click', '#remove', function (event) {
        $('.loader').show()

        let userId = event.currentTarget.getAttribute('data-user-id'),
            experimentId = event.currentTarget.getAttribute('data-experiment-id'),
            branchId = event.currentTarget.getAttribute('data-experiment-branch-id'),
            experimentItem = event.currentTarget.closest('.new_user_experiment_item');

        $.ajax({
            'method': "DELETE",
            'url': "/api/v1/experiments/user/delete",
            'headers': {
                'Authorization': window.shortToken,
            },
            'data': {
                'data': {
                    'type': 'experiment_users',
                    'attributes': {
                        'user_signature': userId
                    },
                    'relationships': {
                        'experiments': {
                            'data': {
                                'id': experimentId,
                                'type': 'experiments'
                            }
                        },
                        'branches': {
                            'data': {
                                'id': branchId,
                                'type': 'experiment_branches'
                            }
                        }
                    }
                }
            },
            'success': function () {
                experimentItem.remove();

                $('.loader').hide();

                if ($('.new_user_experiment_item').length < 1) {
                    $('.new_user_experiment').append(
                        '<div class="new_user_label" id="empty_experiment">There is no user data yet</div>'
                    )
                }

                toastr.options.positionClass = 'toast-top-left';
                toastr.success('User has been deleted');
            }
        })
    })

    $(document).on('click', '.new_user_event_button', function (event) {
        let n = $('tr#event_tr').last().data('id'),
            i = n + 1,
            loadEvents = n + 3;

        if (loadEvents === events.length || loadEvents > events.length) {
            $('.new_user_event_button').remove();
        }

        for (i; i < loadEvents; i++) {
            if (events[i] === undefined) {
                continue;
            }

            let entry = events[i],
                user = entry['attributes']['user_id'] ?? '',
                event = entry['attributes']['event'] ?? '',
                date = getFullDate(entry['attributes']['created_at']) ?? '',
                ip = entry['attributes']['ip'] ?? '',
                country = entry['attributes']['meta']['country_name']
                    ?? entry['attributes']['country_code']
                    ?? '';

            if (user.length === 0) {
                user = userId
            }

            $('#events').append(
                '<tr id="event_tr" data-id="' + i + '">' +
                    '<td>' +
                        '<span class="mobile">User ID</span>' +
                        user +
                    '</td>' +
                    '<td>' +
                        '<span class="mobile">Event name</span>' +
                        event +
                    '</td>' +
                    '<td>' +
                        '<span class="mobile">IP</span>' +
                        ip +
                    '</td>' +
                    '<td>' +
                        '<span class="mobile">Country</span>' +
                        country +
                    '</td>' +
                    '<td>' +
                        '<span class="mobile">Date</span>' +
                        date +
                    '</td>' +
                '</tr>'
            )
        }

    })

    $(document).on('change', '#event_date', function (event) {
        let dateInterval = event.currentTarget.value,
            dateSplit = dateInterval.split('-'),
            dateFrom = convertDate(dateSplit[0]),
            dateTo = convertDate(dateSplit[1]);

        $('.new_user_event_button').remove();
        $('#empty_events').remove();
        $('#events_table').remove();

        $.ajax({
            'async': false,
            'method': "GET",
            'url': "/api/v1/statistics/user/"
                + userId
                + "?filter[date_from]=" + dateFrom +"&filter[date_to]="+ dateTo,
            'headers': {
                'Authorization': window.shortToken,
            },
            'success': function (response) {
                getUserStats(response, userId);

                events = response.data;
            }
        });
    })
})

$('#event_date_from').daterangepicker({
    singleDatePicker: true,
    showDropdowns: true,
    startDate: getStartDate(),
    locale: {
        format: 'MMMM DD, YYYY'
    }
})

$('#event_date_to').daterangepicker({
    singleDatePicker: true,
    showDropdowns: true,
    startDate: getEndDate(),
    locale: {
        format: 'MMMM DD, YYYY'
    }
})

function getStartDate() {
    let dateNow = Date.now(),
        date = new Date(dateNow),
        month = date.getMonth();

    date.setMonth(month - 1);

    return String(
        date.toLocaleString('en',{month: 'short' }) + '/' +
        date.getDate() + '/' +
        date.getFullYear()
    );
}

function getEndDate() {
    let dateNow = Date.now(),
        date = new Date(dateNow),
        day = date.getDate();

    date.setDate(day + 1);

    return String(
        date.toLocaleString('en',{month: 'short' }) + '/' +
        date.getDate() + '/' +
        date.getFullYear()
    );
}

function getFullDate (dateCreation) {
    let date = new Date(dateCreation),
        day = addNull('' + date.getDate()),
        month = addNull('' + (date.getMonth() + 1)),
        year = date.getFullYear(),
        hours = addNull('' + date.getHours()),
        minutes = addNull('' + date.getMinutes()),
        seconds = addNull('' + date.getSeconds()),
        convertDate = [year, month, day].join('-'),
        time = [hours, minutes, seconds].join(':');

    return [convertDate, time].join(' ');
}

function addNull (item) {
    if (item.length < 2) {

        return '0' + item
    }

    return item;
}

function getUserStats (response, userId) {
    if (response.data.length > 0) {
        $('.new_user_event').append(
            '<table id="events_table">' +
                '<thead>' +
                    '<tr>' +
                        '<th>User ID</th>' +
                        '<th>Event name</th>' +
                        '<th>IP</th>' +
                        '<th>Country</th>' +
                        '<th>Date</th>' +
                    '</tr>' +
                '</thead>' +
                '<tbody id="events"></tbody>' +
            '</table>'
        )

        for (let i = 0; i < 50; i++) {
            if (response.data[i] === undefined) {
                break;
            }

            let entry = response.data[i],
                user = entry['attributes']['user_id'] ?? '',
                event = entry['attributes']['event'] ?? '',
                date = getFullDate(entry['attributes']['created_at']) ?? '',
                ip = entry['attributes']['ip'] ?? '',
                country = entry['attributes']['meta']['country_name']
                    ?? entry['attributes']['country_code']
                    ?? '';

            if (user.length === 0) {
                user = userId
            }

            $('#events').append(
                '<tr id="event_tr" data-id="' + i + '">' +
                    '<td>' +
                        '<span class="mobile">User ID</span>' +
                        user +
                    '</td>' +
                    '<td>' +
                        '<span class="mobile">Event name</span>' +
                        event +
                    '</td>' +
                    '<td>' +
                        '<span class="mobile">IP</span>' +
                        ip +
                    '</td>' +
                    '<td>' +
                        '<span class="mobile">Country</span>' +
                        country +
                    '</td>' +
                    '<td>' +
                        '<span class="mobile">Date</span>' +
                        date +
                    '</td>' +
                '</tr>'
            )
        }

        if (response.data.length > 2) {
            $('.new_user_event').append(
                '<div class="new_user_event_button">' +
                    '<button class="button">Load more</button>' +
                '</div>'
            )
        }
    } else {
        $('.new_user_event').append(
            '<div class="new_user_label" style="margin-top: 10px" id="empty_events">There is no user data yet</div>'
        )
    }
}