function convertDate(date) {
    let dateObject = new Date(date),
        day = '' + dateObject.getDate(),
        month = '' + (dateObject.getMonth() + 1),
        year = dateObject.getFullYear()

    if (month.length < 2) {
        month = '0' + month
    }

    if (day.length < 2) {
        day = '0' + day
    }

    return [month, day, year].join('-');
}

function getSummarizableEvent (counters, percentage) {
    let eventsFromCounters = Object
        .keys(counters)
        .filter(
            event => counters[event] instanceof Object
        )

    if (eventsFromCounters.length > 0) {
        let events = {};

        for (let event in eventsFromCounters) {
            events[eventsFromCounters[event]] = 0

            for (let date in counters[eventsFromCounters[event]]) {
                if (date.indexOf('-') !== -1) {
                    events[eventsFromCounters[event]] += counters[eventsFromCounters[event]][date]

                } else {
                    $('#stats').append(
                        '<tr class="table__row">' +
                        '<td class="table__column" data-label="Event name">' + eventsFromCounters[event] +
                        '</td>' +
                        '<td class="table__column" data-label="Persentage">' + percentage[eventsFromCounters[event]] + '%</td>' +
                        '<td class="table__column" data-label="Counters">' + counters[eventsFromCounters[event]][date] + '</td>' +
                        '</tr>'
                    )
                }
            }
        }

        eventsFromCounters.forEach(
            event => [
                $('#stats').append(
                    '<tr class="table__row">' +
                    '<td class="table__column" data-label="Event name">' + event +
                    '</td>' +
                    '<td class="table__column" data-label="Persentage">' + 0 + '%</td>' +
                    '<td class="table__column" data-label="Counters">' + events[event] + '</td>' +
                    '</tr>'
                )
            ]
        )
    }
}

function getFunnelStats (
    dateFrom,
    dateTo,
    dateIntervals
) {
    $.ajax({
        'method': "POST",
        'url': "/api/v1/event/funnel",
        'headers': {
            'Authorization': window.token,
        },
        'success': function (response) {
            $('.loader').hide();

            let percentage = response.percentage,
                counters = response.counters,
                referrersCounters = response.referrersCounters,
                referrersPercentage = response.referrersPercentage,
                eventCountersWithDate = response.eventCountersWithDate;

            if (counters.length < 1) {
                $('.table__thead').hide();
                $('.table__body').hide();
                $('#stats_info').append(
                    '<div class="top-setting__info" id="emptyStats">Nothing found in this date range.</div>'
                )
            }

            for (let i in counters) {
                if (counters[i] instanceof Object) {
                    continue;
                }

                $('#stats').append(
                    '<tr class="table__row">' +
                    '<td class="table__column" data-label="Event name">' + i +
                    '</td>' +
                    '<td class="table__column" data-label="Persentage">' + (percentage[i] ?? 0) + '%</td>' +
                    '<td class="table__column" data-label="Counters">' + (counters[i] ?? 0) + '</td>' +
                    '</tr>'
                );
            }

            getSummarizableEvent(
                counters,
                percentage
            )

            if (eventCountersWithDate.length < 1) {
                $('div.dashboard__grid').append(
                    '<div class="top-setting__info" id="emptyDashboard">Nothing found in this date range.</div>'
                )
            }

            addChartStats(
                eventCountersWithDate,
                counters,
                dateIntervals
            )

            if (referrersCounters.length < 1) {
                $('#head_top_referrers').hide();
                $('#top_referrers').append(
                    '<div class="top-setting__info" id="emptyReferrers">Nothing found in this date range.</div>'
                )
            }

            for (let i in referrersCounters) {
                $('#referrers').append(
                    '<tr class="table__row">' +
                    '<td class="table__column" data-label="Referrer">' +
                    i +
                    '</td>' +
                    '<td class="table__column" data-label="Users">' + (referrersCounters[i] ?? 0) + '</td>' +
                    '<td class="table__column" data-label="">' + referrersPercentage[i] + '% </td>' +
                    '</tr>'
                );
            }
        }
    });
}

function getExperimentStats (
    experimentId,
    datesIntervals,
    backgroundBranchColors
) {
    $.ajax({
        'method': "GET",
        'url': "/api/v1/experiments/stats?filter[experimentId]=" + experimentId,
        'headers': {
            'Authorization': window.token
        },
        'success': function (response) {
            let percentage = response.percentage,
                eventsCountersWithDates = response.eventCountersWithDate,
                experiment = response.experiment;

            $('.loader').hide();
            $('span.breadcrumb__current').html(experiment.name);
            $('#experiment_name').append(experiment.name);
            $('#total_users').append(experiment.total_users);
            $('.table__thead-tr').append(
                '<th class="table__thead-th" scope="col">' +
                'Variation' +
                '</th>'
            );

            if (experiment.is_enabled) {
                $('#is_running').append('Running');
                $('.statistic-setting__status').attr('style', 'background: #32AD67;')
                $('#days_running').append(experiment.days_running);
            } else {
                $('#is_running').append('Stopped');
                $('.statistic-setting__status').attr('style', 'background: #524f4f;');
                $('#days_running').append('0 days');
            }

            if (percentage.length === 0) {
                $('.table.table_ap').hide();
                $('.setting__track.track').append(
                    '<div class="top-setting__info">Nothing found in this date range.</div>'
                );
                $('.dashboard__grid').append(
                    '<div class="top-setting__info">Nothing found in this date range.</div>'
                );
            }

            let n = 0,
                backgroundBranchColorNumber = 0,
                events = [],
                branch = [],
                branchReplace;

            for (let branch in percentage) {
                for (let event in percentage[branch]) {
                    events.push(event);
                }
            }

            for (let branchName in percentage) {
                branch.push(branchName);
                branchReplace = branchName.split(' ').join('_');

                $('tbody.table__body').append(
                    '<tr class="table__row" id=' + branchReplace + '>' +
                        '<td class="table__column" data-label="Variation ">' +
                            '<div class="table__flex">' +
                                '<span ' +
                                'style="background:' +
                                backgroundBranchColors[backgroundBranchColorNumber] + ';" ' +
                                'class="table__color"' +
                                '></span>' +
                                branchName +
                            '</div>' +
                        '</td>' +
                    '</tr>'
                );

                backgroundBranchColorNumber++;

                for (let event in percentage[branchName]) {
                    let eventJoin = event.split('_').join(' '),
                        upperCaseBranch = eventJoin[0].toUpperCase() + eventJoin.substring(1)

                    if (n < events.length) {
                        n++;

                        $('.table__thead-tr').append(
                            '<th class="table__thead-th" scope="col">' +
                            upperCaseBranch +
                            '</th>'
                        );
                    }

                    $('#' + branchReplace).append(
                        '<td class="table__column" data-label="' + event + '">' +
                        percentage[branchName][event] + '%' +
                        '</td>'
                    );
                }
            }

            addChartExperimentsStats(
                eventsCountersWithDates,
                events,
                branch,
                datesIntervals,
                backgroundBranchColors
            )
        },
    });
}

function getTags () {
    $.ajax({
        'method': "GET",
        'url': "/api/v1/user-tags",
        'headers': {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': window.token,
        },
        'success': function(response) {
            let data = response.data

            for (let item in data) {
                $('.track__tags').append(
                    '<button class="track__item-tag">' +
                    data[item].attributes.tag +
                    // '<svg class="track__remove-icon">' +
                    //     '<use href="/img/icons/icons.svg#close"></use>' +
                    // '</svg>' +
                    '</button>'
                )
            }
        }
    });
}

function getDateInterval(dateFrom, dateTo) {
    let startDateInterval = new Date(dateFrom),
        endDateInterval = new Date(dateTo),
        range = moment.range(startDateInterval, endDateInterval),
        dateIntervals = [];

    for (let month of range.by('month')) {
        month.format('YYYY-MM-DD');
    }

    let years = Array.from(range.by('days'));
    years.map(m => dateIntervals.push(m.format('YYYY-MM-DD')));

    return dateIntervals;
}

function addChartStats (
    eventCountersWithDate,
    counters,
    dateIntervals
) {
    for (let i in eventCountersWithDate) {
        let numberEvent = [];

        for (let n = 0; n < dateIntervals.length; n++) {
            numberEvent.push(eventCountersWithDate[i][dateIntervals[n]] ?? 0)
        }

        $('div.dashboard__grid').append(
            '<div class="dashboard__item">' +
                '<div class="dashboard__diagram">' +
                    '<canvas id="' + i + '"></canvas>' +
                '</div>' +
            '</div>'
        )

        const gt = (e) => {
            let t = 0;
            return (
                e.forEach(function (e) {
                    t += e.parsed.y;
                }),
                "Users: " + t
            );
        };

        const e = document.getElementById(i);

        new Chart(e, {
            type: "line",
            data: {
                labels: dateIntervals,
                datasets: [
                    {
                        label: !1,
                        borderWidth: 3,
                        data: numberEvent,
                        borderColor: "#9699AB",
                        pointStyle: "circle",
                        pointBorderColor: "rgba(0,0,0,0)",
                        pointBackgroundColor: "rgba(0,0,0,0)",
                        pointRadius: 7,
                        pointHoverBorderColor: "#9699AB",
                        pointHoverBackgroundColor: "#fff",
                    },
                ],
            },
            options: {
                scales: {
                    x: {
                        type: 'time',
                        time: {
                            unit: 'day'
                        }
                    }
                },
                animations: {
                    radius: {
                        duration: 400,
                        easing: "linear",
                        loop: (e) => e.active
                    }
                },
                responsive: !0,
                plugins: {
                    legend: { display: !1, labels: { font: { color: "#0B0E37", weight: "600" } } },
                    tooltip: { callbacks: { footer: gt } },
                    title: {
                        display: !0,
                        text: i + ' (' + numberEvent.reduce((a,b) => a + b) + ')',
                        align: "start",
                        color: "#0B0E37",
                        font: function (e) {
                            var t = e.chart.width;
                            return { size: Math.round(t / 32), weight: 600 };
                        },
                        padding: { bottom: 30 },
                    }
                },
            },
        });
    };

    let eventsFromCounters = Object
        .keys(counters)
        .filter(
            event => counters[event] instanceof Object
        )

    if (eventsFromCounters.length > 0) {
        for (let event in eventsFromCounters) {
            let numberEvent = [];

            for (let n = 0; n < dateIntervals.length; n++) {
                numberEvent.push(counters[eventsFromCounters[event]][dateIntervals[n]] ?? 0)
            }

            $('div.dashboard__grid').append(
                '<div class="dashboard__item">' +
                    '<div class="dashboard__diagram">' +
                        '<canvas id="' + eventsFromCounters[event] + '_sum' + '"></canvas>' +
                    '</div>' +
                '</div>'
            )

            const gt = (e) => {
                let t = 0;
                return (
                    e.forEach(function (e) {
                        t += e.parsed.y;
                    }),
                    "Users: " + t
                );
            };

            const e = document.getElementById(eventsFromCounters[event] + '_sum');

            new Chart(e, {
                type: "line",
                data: {
                    labels: dateIntervals,
                    datasets: [
                        {
                            label: !1,
                            borderWidth: 3,
                            data: numberEvent,
                            borderColor: "#9699AB",
                            pointStyle: "circle",
                            pointBorderColor: "rgba(0,0,0,0)",
                            pointBackgroundColor: "rgba(0,0,0,0)",
                            pointRadius: 7,
                            pointHoverBorderColor: "#9699AB",
                            pointHoverBackgroundColor: "#fff",
                        },
                    ],
                },
                options: {
                    scales: {
                        x: {
                            type: 'time',
                            time: {
                                unit: 'day'
                            }
                        }
                    },
                    animations: {
                        radius: {
                            duration: 400,
                            easing: "linear",
                            loop: (e) => e.active
                        }
                    },
                    responsive: !0,
                    plugins: {
                        legend: {display: !1, labels: {font: {color: "#0B0E37", weight: "600"}}},
                        tooltip: {callbacks: {footer: gt}},
                        title: {
                            display: !0,
                            text: eventsFromCounters[event]
                                + ' (' + numberEvent.reduce((a, b) => a + b) + ')',
                            align: "start",
                            color: "#0B0E37",
                            font: function (e) {
                                var t = e.chart.width;
                                return {size: Math.round(t / 32), weight: 600};
                            },
                            padding: {bottom: 30},
                        }
                    },
                },
            });
        }
    }
}

function addChartExperimentsStats (
    eventsCountersWithDates,
    events,
    branch,
    datesIntervals,
    backgroundBranchColors
) {
    let backgroundBranchColorNumber = 0;

    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }

    let uniqueEvents = events.filter(onlyUnique);

    const gt = (e) => {
        let t = 0;
        return (
            e.forEach(function (e) {
                t += e.parsed.y;
            }),
            "Users: " + t
        );
    };

    for (let i in eventsCountersWithDates) {
        $('.dashboard__labels').append(
            '<div class="dashboard__label">' +
                '<span style="background:' + backgroundBranchColors[backgroundBranchColorNumber]+';" ' +
                'class="dashboard__color"></span>' +
                i +
            '</div>'
        );

        backgroundBranchColorNumber++;
    }

    for (let i = 0; i < uniqueEvents.length; i++) {
        let data = [];

        $('.dashboard__grid').append(
            '<div class="dashboard__item">' +
                '<div class="dashboard__diagram">' +
                    '<canvas id="' + uniqueEvents[i] + '"></canvas>' +
                '</div>' +
            '</div>'
        );

        for (let n = 0; n < branch.length; n++) {
            let numberEvent = [];

            for (let m = 0; m < datesIntervals.length; m++) {
                if (eventsCountersWithDates[branch[n]][uniqueEvents[i]]) {
                    numberEvent.push(
                        eventsCountersWithDates[branch[n]][uniqueEvents[i]][datesIntervals[m]] ?? 0
                    );
                } else {
                    numberEvent.push(0);
                }
            }

            data.push(
                {
                    label: !1,
                    borderWidth: 3,
                    data: numberEvent,
                    borderColor: backgroundBranchColors[n],
                    pointStyle: "circle",
                    pointBorderColor: "rgba(0,0,0,0)",
                    pointBackgroundColor: "rgba(0,0,0,0)",
                    pointRadius: 7,
                    pointHoverBorderColor: backgroundBranchColors[n],
                    pointHoverBackgroundColor: "#fff"
                }
            )
        }

        let numberVisit = [];

        for (let itemId in data) {
            numberVisit.push(data[itemId].data.reduce((a,b) => a + b))
        }

        const e = document.getElementById(events[i]);

        new Chart(e,{
            type: "line",
            data: {
                labels: datesIntervals,
                datasets: data
            },
            options: {
                scales: {
                    x: {
                        type: 'time',
                        time: {
                            unit: 'day'
                        }
                    }
                },
                animations: {
                    radius: {
                        duration: 400,
                        easing: "linear",
                        loop: e=>e.active
                    }
                },
                responsive: !0,
                plugins: {
                    legend: {
                        display: !1,
                        labels: {
                            font: {
                                color: "#0B0E37",
                                weight: "600"
                            }
                        }
                    },
                    tooltip: {
                        callbacks: {
                            footer: gt,
                        }
                    },
                    title: {
                        display: !0,
                        text: uniqueEvents[i] + ' (' + numberVisit.reduce((a,b) => a + b) + ')',
                        align: "start",
                        color: "#0B0E37",
                        font: function(e) {
                            let t = e.chart.width;
                            return {
                                size: Math.round(t / 32),
                                weight: 600
                            }
                        },
                        padding: {
                            bottom: 30
                        }
                    }
                }
            }
        })
    }
}

$(document).ready(function () {
    let dateFrom = convertDate(new Date()),
        dateFromSplit = dateFrom.split('-'),
        dateCount = Number(dateFromSplit[1]) + 1,
        dateTo = [dateFromSplit[0], dateCount, dateFromSplit[2]].join('-'),
        dateIntervals = getDateInterval(dateFrom, dateTo),
        url = new URL(window.location.href),
        experimentId = url.searchParams.get("experimentId"),
        backgroundBranchColors = [
            '#F07D5F',
            '#9699AB',
            '#8A2BDF',
            '#184D82',
            '#578365',
            '#47C6C1',
            '#495152'
        ];

    window.mode === 'stats'
        ? getFunnelStats(
            dateTo,
            dateFrom,
            dateIntervals
        )
        : (
            getTags(),
            getExperimentStats(
                experimentId,
                dateIntervals,
                backgroundBranchColors
            )
        )

    $(document).on('change', '#date_stats', function(event) {
        $('.loader').show();

        let dateInterval = event.currentTarget.value,
            dateSplit = dateInterval.split('-'),
            dateFrom = convertDate(dateSplit[0]),
            dateTo = convertDate(dateSplit[1]);

        $.ajax({
            'method': "POST",
            'url': "/api/v1/event/funnel?filter[date_from]="+ dateFrom +"&filter[date_to]="+ dateTo,
            'headers': {
                'Authorization': window.token,
            },
            'success': function (response) {
                $('.loader').hide();
                $('.table__thead').show();
                $('.table__body').show();
                $('#emptyStats').remove();
                $('#stats').children().remove()

                let percentage = response.percentage,
                    counters = response.counters;

                if (counters.length < 1) {
                    $('.table__thead').hide();
                    $('.table__body').hide();
                    $('#stats_info').append(
                        '<div class="top-setting__info" id="emptyStats">Nothing found in this date range.</div>'
                    )
                }

                for (let i in counters) {
                    if (counters[i] instanceof Object) {
                        continue;
                    }

                    $('#stats').append(
                        '<tr class="table__row">' +
                            '<td class="table__column" data-label="Event name">' + i +
                            '</td>' +
                            '<td class="table__column" data-label="Persentage">' + (percentage[i] ?? 0) + '%</td>' +
                            '<td class="table__column" data-label="Counters">' + counters[i] + '</td>' +
                        '</tr>'
                    );
                }

                getSummarizableEvent(
                    counters,
                    percentage
                )
            }
        });
    });

    $(document).on('change', '#date_filter_funnel_dashboard', function(event) {
        $('.loader').show();

        let dateInterval = event.currentTarget.value,
            dateSplit = dateInterval.split('-'),
            dateFrom = convertDate(dateSplit[0]),
            dateTo = convertDate(dateSplit[1]),
            dateIntervals = getDateInterval(dateFrom, dateTo);

        $.ajax({
            'method': "POST",
            'url': "/api/v1/event/funnel?filter[date_from]="+ dateFrom +"&filter[date_to]="+ dateTo,
            'headers': {
                'Authorization': window.token,
            },
            'success': function (response) {
                $('.loader').hide();
                $('div.dashboard__grid').children().remove();
                $('#referrers').children().remove();

                let eventCountersWithDate = response.eventCountersWithDate,
                    counters = response.counters,
                    referrersCounters = response.referrersCounters,
                    referrersPercentage = response.referrersPercentage;

                if (eventCountersWithDate.length < 1 && counters.length < 1) {
                    $('div.dashboard__grid').append(
                        '<div class="top-setting__info" id="emptyDashboard">Nothing found in this date range.</div>'
                    )
                }

                if (referrersCounters.length < 1) {
                    $('#head_top_referrers').hide();
                    $('#emptyReferrers').remove();
                    $('#top_referrers').append(
                        '<div class="top-setting__info" id="emptyReferrers">Nothing found in this date range.</div>'
                    )
                }

                addChartStats(
                    eventCountersWithDate,
                    counters,
                    dateIntervals
                )

                for (let i in referrersCounters) {
                    $('#head_top_referrers').show();
                    $('#emptyReferrers').remove();

                    $('#referrers').append(
                        '<tr class="table__row">' +
                            '<td class="table__column" data-label="Referrer">' +
                                i +
                            '</td>' +
                            '<td class="table__column" data-label="Users">' + (referrersCounters[i] ?? 0) + '</td>' +
                            '<td class="table__column" data-label="">' + referrersPercentage[i] + '% </td>' +
                        '</tr>'
                    );
                }
            }
        });
    });

    $(document).on('change', '#date_filter_experiment', function (event) {
        window.onload = $('.loader').show();

        let dateInterval = event.currentTarget.value,
            dateSplit = dateInterval.split('-'),
            dateFrom = convertDate(dateSplit[0]),
            dateTo = convertDate(dateSplit[1]);

        $.ajax({
            'method': "GET",
            'url': "/api/v1/experiments/stats?filter[experimentId]=" + experimentId +
                "&filter[date_from]=" + dateFrom +
                "&filter[date_to]=" + dateTo +
                "&filter[tag]=",
            'headers': {
                'Authorization': window.token,
            },
            'success': function (response) {
                let percentage = response.percentage;

                $('.loader').hide();
                $('.table__row').remove();
                $('.table.table_ap').show();
                $('.table__thead-th').remove();
                $('.setting__dashboard.dashboard').show();
                $('.setting__track.track').children('.top-setting__info').remove();
                $('.table__thead-tr').append(
                    '<th class="table__thead-th" scope="col">' +
                    'Variation' +
                    '</th>'
                );

                if (percentage.length === 0) {
                    $('.table.table_ap').hide();
                    $('.setting__track.track').append(
                        '<div class="top-setting__info" id="empty_track_events">Nothing found in this date range.</div>'
                    );
                }

                let n = 0,
                    backgroundBranchColorNumber = 0,
                    events = {};

                for (let branch in percentage) {
                    for (let event in percentage[branch]) {
                        events[event] = event;
                    }
                }

                for (let i in percentage) {
                    let length = Object.keys(percentage[i]).length,
                        branch = i.split(' ').join('_');

                    if (percentage[i].length === 0) {
                        $('.table.table_ap').hide();

                        if (Object.keys($('#empty_track_events')).length === 0) {
                            $('.setting__track.track').append(
                                '<div class="top-setting__info" id="empty_track_events">Nothing found in this date range.</div>'
                            );
                        }

                        continue;
                    }

                    $('tbody.table__body').append(
                        '<tr class="table__row" id=' + branch + '>' +
                            '<td class="table__column" data-label="Variation ">' +
                                '<div class="table__flex">' +
                                    '<span ' +
                                    'style="background:' +
                                    backgroundBranchColors[backgroundBranchColorNumber] + ';" ' +
                                    'class="table__color"' +
                                    '>' +
                                    '</span>' +
                                    i +
                                '</div>' +
                            '</td>' +
                        '</tr>'
                    );

                    backgroundBranchColorNumber++;

                    for (let eventName in events) {
                        let event = eventName.split('_').join(' '),
                            upperCaseEventName = event[0].toUpperCase() + event.substring(1);

                        if (n < length) {
                            n++;

                            $('.table__thead-tr').append(
                                '<th class="table__thead-th" scope="col">' +
                                upperCaseEventName +
                                '</th>'
                            );
                        }

                        $('#' + branch).append(
                            '<td class="table__column" data-label="' + event + '">' +
                            (percentage[i][events[eventName]] ?? 0) + '%' +
                            '</td>'
                        );
                    }
                }
            }
        });
    })
    $(document).on('change', '#date_filter_dashboard', function (event) {
        window.onload = $('.loader').show();

        let dates = event.currentTarget.value,
            dateSplit = dates.split('-'),
            dateFrom = convertDate(dateSplit[0]),
            dateTo = convertDate(dateSplit[1]),
            datesIntervals = getDateInterval(dateFrom, dateTo);

        $.ajax({
            'method': "GET",
            'url': "/api/v1/experiments/stats?filter[experimentId]=" + experimentId +
                "&filter[date_from]=" + dateFrom +
                "&filter[date_to]=" + dateTo +
                "&filter[tag]=",
            'headers': {
                'Authorization': window.token,
            },
            'success': function (response) {
                $('.loader').hide();

                let percentage = response.percentage,
                    eventsCountersWithDates = response.eventCountersWithDate,
                    events = [],
                    branch = [];

                if (eventsCountersWithDates.length === 0) {
                    $('.dashboard__labels').children().remove();
                    $('.dashboard__grid').children().remove();
                    $('.dashboard__grid').append(
                        '<div class="top-setting__info" id="empty_dashboard">Nothing found in this date range.</div>'
                    );
                } else {
                    $('.dashboard__labels').children().remove();
                    $('.dashboard__grid').children().remove();
                }

                for (let branchName in percentage) {
                    branch.push(branchName);
                    for (let event in percentage[branchName]) {
                        events.push(event);
                    }
                }

                addChartExperimentsStats(
                    eventsCountersWithDates,
                    events,
                    branch,
                    datesIntervals,
                    backgroundBranchColors
                )
            }
        });
    })

    $(document).on('click', '.track__item-tag', function (event) {
        window.onload = $('.loader').show();

        let dateInterval = $('#date_filter_experiment')[0].value,
            dateSplit = dateInterval.split('-'),
            dateFrom = convertDate(dateSplit[0]),
            dateTo = convertDate(dateSplit[1]),
            tag = event.currentTarget.innerText;

        $.ajax({
            'method': "GET",
            'url': "/api/v1/experiments/stats?filter[experimentId]=" + experimentId +
                "&filter[date_from]=" + dateFrom +
                "&filter[date_to]=" + dateTo +
                "&filter[tag]=" + tag,
            'headers': {
                'Authorization': window.token
            },
            'success': function (response) {
                let percentage = response.percentage;

                $('.loader').hide();
                $('.table__row').remove();
                $('.table.table_ap').show();
                $('.table__thead-th').remove();
                $('.setting__dashboard.dashboard').show();
                $('.setting__track.track').children('.top-setting__info').remove();
                $('.table__thead-tr').append(
                    '<th class="table__thead-th" scope="col">' +
                        'Variation' +
                    '</th>'
                );

                if (percentage.length === 0) {
                    $('.table.table_ap').hide();
                    $('.setting__track.track').append(
                        '<div class="top-setting__info" id="empty_track_events">Nothing found in this date range.</div>'
                    );
                }

                let n = 0,
                    backgroundBranchColorNumber = 0;

                for (let i in percentage) {
                    let length = Object.keys(percentage[i]).length,
                        branch = i.split(' ').join('_');

                    if (percentage[i].length === 0) {
                        $('.table.table_ap').hide();
                        console.log()

                        if (Object.keys($('#empty_track_events')).length === 0) {
                            $('.setting__track.track').append(
                                '<div class="top-setting__info" id="empty_track_events">Nothing found in this date range.</div>'
                            );
                        }

                        continue;
                    }

                    $('tbody.table__body').append(
                        '<tr class="table__row" id=' + branch + '>' +
                            '<td class="table__column" data-label="Variation ">' +
                                '<div class="table__flex">' +
                                    '<span ' +
                                    'style="background:' +
                                    backgroundBranchColors[backgroundBranchColorNumber] + ';" ' +
                                    'class="table__color"' +
                                    '>' +
                                    '</span>' +
                                    i +
                                '</div>' +
                            '</td>' +
                        '</tr>'
                    );

                    backgroundBranchColorNumber++;

                    for (let eventName in percentage[i]) {
                        let event = eventName.split('_').join(' '),
                            upperCaseEventName = event[0].toUpperCase() + event.substring(1);

                        if (n < length) {
                            n++;

                            $('.table__thead-tr').append(
                                '<th class="table__thead-th" scope="col">' +
                                upperCaseEventName +
                                '</th>'
                            );
                        }

                        $('#' + branch).append(
                            '<td class="table__column" data-label="' + eventName + '">' +
                            percentage[i][eventName] + '%' +
                            '</td>'
                        );
                    }
                }
            },
        });
    })
});
