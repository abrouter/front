function getEvents (counters, percentage = []) {
    let eventsFromCounters = Object
        .keys(counters)
        .filter(
            event => counters[event] instanceof Object
        )

    let percent;

    if (eventsFromCounters.length > 0) {
        let events = {};

        for (let event in eventsFromCounters) {
            events[eventsFromCounters[event]] = 0

            for (let date in counters[eventsFromCounters[event]]) {
                events[eventsFromCounters[event]] += counters[eventsFromCounters[event]][date];
            }
        }

        eventsFromCounters.forEach(
            event => [
                percent = percentage[event] ?? 0,
                $('#stats').append(
                    '<tr class="table__row">' +
                    '<td class="table__column" data-label="Event name">' + event +
                    '</td>' +
                    '<td class="table__column" data-label="Persentage">' + percent +'%</td>' +
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
            $('div.dashboard__grid').children().remove();
            $('#referrers').children().remove();
            $('#emptyReferrers').remove();

            let percentage = response.percentage,
                counters = response.counters,
                referrersCounters = response.referrersCounters,
                referrersPercentage = response.referrersPercentage;

            if (
                counters.incremental.length < 1 &&
                counters.incrementalUnique.length < 1 &&
                counters.summarizable.length < 1
            ) {
                $('.table__thead').hide();
                $('.table__body').hide();
                $('#stats_info').append(
                    '<div class="top-setting__info" id="emptyStats">Nothing found in this date range.</div>'
                )

                $('div.dashboard__grid').append(
                    '<div class="top-setting__info" id="emptyDashboard">Nothing found in this date range.</div>'
                )
            }

            for (let i in counters) {
                let percentages;

                if (counters[i].length < 1) {
                    continue;
                }

                if (i === 'incrementalUnique') {
                    percentages = percentage;
                }

                getEvents(
                    counters[i],
                    percentages
                )

                addChartStats(
                    counters[i],
                    i,
                    dateIntervals
                )
            }

            if (referrersCounters.length < 1) {
                $('#head_top_referrers').hide();
                $('#top_referrers').append(
                    '<div class="top-setting__info" id="emptyReferrers">Nothing found in this date range.</div>'
                )
            }

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
}

function getExperimentStats (
    experimentId,
    datesIntervals,
    dateFrom,
    dateTo,
    backgroundBranchColors,
    tag = ''
) {
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
            $('.loader').hide();
            $('.dashboard__labels').children().remove();
            $('.dashboard__grid').children().remove();
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
            $('#is_running').empty();
            $('span.breadcrumb__current').empty();
            $('#experiment_name').empty();
            $('#total_users').empty();
            $('#days_running').empty();

            let percentage = response.percentage,
                counters = response.counters,
                experiment = response.experiment;

            for (let branchName in counters.incrementalUnique) {
                if (counters.incrementalUnique[branchName].length < 1) {
                    delete percentage[branchName];
                    delete counters.incrementalUnique[branchName];
                }
            }

            $('span.breadcrumb__current').html(experiment.name);
            $('#experiment_name').append(experiment.name);
            $('#total_users').append(experiment.total_users);

            if (experiment.is_enabled) {
                $('#is_running').append('Running');
                $('.statistic-setting__status').attr('style', 'background: #32AD67;')
                $('#days_running').append(experiment.days_running);
            } else {
                $('#is_running').append('Stopped');
                $('.statistic-setting__status').attr('style', 'background: #524f4f;');
                $('#days_running').append('0 days');
            }

            if (Object.keys(percentage).length === 0 && Object.keys(counters.incrementalUnique).length === 0) {
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
                    if (events.includes(event)) {
                        continue;
                    }

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
                counters.incrementalUnique,
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
    counters,
    eventType,
    dateIntervals
) {
    for (let i in counters) {
        let numberEvent = [];

        for (let n = 0; n < dateIntervals.length; n++) {
            numberEvent.push(counters[i][dateIntervals[n]] ?? 0)
        }

        $('div.dashboard__grid').append(
            '<div class="dashboard__item">' +
                '<div class="dashboard__diagram">' +
                    '<canvas id="' + i + '_' + eventType + '"></canvas>' +
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

        const e = document.getElementById(i + '_' + eventType);

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
    }
}

function addChartExperimentsStats (
    counters,
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

    for (let i in counters) {
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
                if (counters[branch[n]][uniqueEvents[i]]) {
                    numberEvent.push(
                        counters[branch[n]][uniqueEvents[i]][datesIntervals[m]] ?? 0
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

function getDateIntervals(id, startDate, endDate) {
    $(id).daterangepicker({
        startDate: moment(startDate).format('MMM DD, YYYY'),
        endDate: moment(endDate).format('MMM DD, YYYY'),
        locale: {
            format: 'MMM DD, YYYY'
        },
        ranges: {
            Today: [moment(), moment()],
            Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
            "Last 7 Days": [moment().subtract(6, "days"), moment()],
            "Last 30 Days": [moment().subtract(29, "days"), moment()],
            "This Month": [moment().startOf("month"), moment().endOf("month")],
            "Last Month": [moment().subtract(1, "month").startOf("month"), moment().subtract(1, "month").endOf("month")]
        }
    })
}

$(document).ready(function () {
    getDateIntervals(
        '.date-range[name="dates"]',
        moment().subtract(6, "days").format('MMM DD, YYYY'),
        moment().format('MMM DD, YYYY')
    )

    let dateInterval = $('#date_filter_experiment').val() ?? $('#date_stats').val(),
        dateSplit = dateInterval.split('-'),
        dateFrom = convertDate(dateSplit[0]),
        dateTo = convertDate(dateSplit[1]),
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
        ],
        load = 0;

    window.mode === 'stats'
        ? getFunnelStats(
            dateFrom,
            dateTo,
            dateIntervals
        )
        : (
            getTags(),
            getExperimentStats(
                experimentId,
                dateIntervals,
                dateFrom,
                dateTo,
                backgroundBranchColors
            )
        )

    $(document).on('click', '#date_stats', function(event) {
        load = 1;
    });

    $(document).on('change', '#date_stats', function(event) {
        if (load === 0) {
            return
        }

        $('.loader').show();

        let dateInterval = event.currentTarget.value,
            dateSplit = dateInterval.split('-'),
            dateFrom = convertDate(dateSplit[0]),
            dateTo = convertDate(dateSplit[1]),
            dateIntervals = getDateInterval(dateFrom, dateTo);

        getFunnelStats(
            dateFrom,
            dateTo,
            dateIntervals
        )

        load = 0;

        getDateIntervals('#date_filter_funnel_dashboard', dateSplit[0], dateSplit[1])
    });

    $(document).on('click', '#date_filter_funnel_dashboard', function(event) {
        load = 1;
    });

    $(document).on('change', '#date_filter_funnel_dashboard', function(event) {
        if (load === 0) {
            return
        }

        $('.loader').show();

        let dateInterval = event.currentTarget.value,
            dateSplit = dateInterval.split('-'),
            dateFrom = convertDate(dateSplit[0]),
            dateTo = convertDate(dateSplit[1]),
            dateIntervals = getDateInterval(dateFrom, dateTo);

        getFunnelStats(
            dateFrom,
            dateTo,
            dateIntervals
        )

        load = 0;

        getDateIntervals('#date_stats', dateSplit[0], dateSplit[1])
    });

    $(document).on('click', '#date_filter_experiment', function (event) {
        load = 1
    })

    $(document).on('change', '#date_filter_experiment', function (event) {
        if (load === 0) {
            return;
        }

        window.onload = $('.loader').show();

        let dateInterval = event.currentTarget.value,
            dateSplit = dateInterval.split('-'),
            dateFrom = convertDate(dateSplit[0]),
            dateTo = convertDate(dateSplit[1]),
            dateIntervals = getDateInterval(dateFrom, dateTo);

        getExperimentStats(
            experimentId,
            dateIntervals,
            dateFrom,
            dateTo,
            backgroundBranchColors
        )

        load = 0;

        getDateIntervals('#date_filter_dashboard', dateSplit[0], dateSplit[1])
    })

    $(document).on('click', '#date_filter_dashboard', function (event) {
        load = 1;
    })

    $(document).on('change', '#date_filter_dashboard', function (event) {
        if (load === 0) {
            return;
        }

        window.onload = $('.loader').show();

        let dates = event.currentTarget.value,
            dateSplit = dates.split('-'),
            dateFrom = convertDate(dateSplit[0]),
            dateTo = convertDate(dateSplit[1]),
            dateIntervals = getDateInterval(dateFrom, dateTo);

        getExperimentStats(
            experimentId,
            dateIntervals,
            dateFrom,
            dateTo,
            backgroundBranchColors
        )

        load = 0;

        getDateIntervals('#date_filter_experiment', dateSplit[0], dateSplit[1])
    })

    $(document).on('click', '.track__item-tag', function (event) {
        window.onload = $('.loader').show();

        let dateInterval = $('#date_filter_experiment')[0].value,
            dateSplit = dateInterval.split('-'),
            dateFrom = convertDate(dateSplit[0]),
            dateTo = convertDate(dateSplit[1]),
            dateIntervals = getDateInterval(dateFrom, dateTo),
            tag = event.currentTarget.innerText;

        getExperimentStats(
            experimentId,
            dateIntervals,
            dateFrom,
            dateTo,
            backgroundBranchColors,
            tag
        )
    })
});
