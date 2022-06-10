@extends('front::layouts.settings')

@section('settings')
    <link rel="stylesheet" href="/css/loader.css">
    <div class="loader">
        <svg class="spinner" viewBox="0 0 50 50">
            <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="2"></circle>
        </svg>
    </div>
    <div class="setting__right">
        <div class="setting__content">
            <h1 class="setting__title">
                Statistics
            </h1>
            <div class="setting__track track">
                <div class="track__head" id="event_track">
                    <form action="#" class="track__form form-track">
                        <div class="form-track__date date">
                            <div class="date__icon">
                                <img src="/img/statistic/calendar.svg?_v=1644581884261" alt="Icon">
                            </div>
                            <span>Date Range: </span>
                            <input
                                    autocomplete="off"
                                    type="text"
                                    data-error="Ошибка"
                                    placeholder=""
                                    class="date__input"
                                    id="date_stats"
                                    name="dates"
                            >
                        </div>
                    </form>
                    <a href="/en/stats/customization-event" class="track__add">
                        Add events <svg class="track__add-icon">
                            <use href="/img/icons/icons.svg#arrow-blue"></use>
                        </svg>
                    </a>
                </div>

                <table class="table table_info">
                    <thead class="table__thead">
                        <tr class="table__thead-tr">
                            <th class="table__thead-th" scope="col">Event name
                            </th>
                            <th class="table__thead-th" scope="col">Persentage
                            </th>
                            <th class="table__thead-th" scope="col">Counters
                            </th>
                        </tr>
                    </thead>
                    <tbody class="table__body" id="stats">

                    </tbody>
                </table>
            </div>
            <div class="setting__dashboard dashboard">
                <div class="dashboard__head">
                    <div class="dashboard__title">
                        Dashboard
                    </div>
                    <div class="form-track__date date">
                        <div class="date__icon">
                            <img src="/img/statistic/calendar.svg?_v=1644581884261" alt="Icon">
                        </div>
                        <span>Date Range: </span>
                        <input
                                autocomplete="off"
                                type="text"
                                data-error="Ошибка"
                                placeholder=""
                                class="date__input date-range"
                                id="date_filter_funnel_dashboard"
                                name="dates"
                        >
                    </div>
                </div>
                <div class="dashboard__grid"></div>
            </div>
            <div class="setting__track track" id="top_referrers">
                <div class="track__title">
                    Top referres
                </div>
                <table class="table table_info" id="head_top_referrers">
                    <thead class="table__thead">
                    <tr class="table__thead-tr">
                        <th class="table__thead-th" scope="col">
                            Referrer
                        </th>
                        <th class="table__thead-th" scope="col">
                            Users
                        </th>
                        <th class="table__thead-th" scope="col">
                        </th>
                    </tr>
                    </thead>
                    <tbody class="table__body" id="referrers">

                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chartjs-adapter-date-fns/dist/chartjs-adapter-date-fns.bundle.min.js">
    </script>
    <script
            src="https://cdnjs.cloudflare.com/ajax/libs/moment-range/4.0.2/moment-range.js"
            integrity="sha512-XKgbGNDruQ4Mgxt7026+YZFOqHY6RsLRrnUJ5SVcbWMibG46pPAC97TJBlgs83N/fqPTR0M89SWYOku6fQPgyw=="
            crossorigin="anonymous"
            referrerpolicy="no-referrer"
    >
    </script>
    <script>
        window['moment-range'].extendMoment(moment);
        window.token='Bearer <?=request()->cookie('token')?>';
        window.onload = $('.loader').show();
        window.mode = 'stats';
    </script>
    <script src="/js/Stats.js"></script>
@endsection
