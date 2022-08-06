<?php
use Modules\Front\Internal\User;
use Modules\Front\Assets\Puller;
?>
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
            <div class="setting__breadcrumb breadcrumb">
                <ul class="breadcrumb__list">
                    <li class="breadcrumb__item">
                        <a href="/en/board" class="breadcrumb__link">Experiment list</a>
                    </li>
                    <li class="breadcrumb__item">
                        <span class="breadcrumb__current"></span>
                    </li>
                </ul>
            </div>
            <div class="setting__statistic statistic-setting">
                <div class="statistic-setting__items">
                    <div class="statistic-setting__item">
                        <div class="statistic-setting__icon">
                            <img src="/img/statistic/01.svg?_v=1644581884261" alt="Icon">
                        </div>
                        <div class="statistic-setting__content">
                            <div class="statistic-setting__title">
                                Status
                            </div>
                            <div class="statistic-setting__bottom" id="is_running">
                                <span style="" class="statistic-setting__status">
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="statistic-setting__item">
                        <div class="statistic-setting__icon">
                            <img src="/img/statistic/02.svg?_v=1644581884261" alt="Icon">
                        </div>
                        <div class="statistic-setting__content">
                            <div class="statistic-setting__title">
                                Days running
                            </div>
                            <div class="statistic-setting__bottom" id="days_running"></div>
                        </div>
                    </div>
                    <div class="statistic-setting__item">
                        <div class="statistic-setting__icon">
                            <img src="/img/statistic/03.svg?_v=1644581884261" alt="Icon">
                        </div>
                        <div class="statistic-setting__content">
                            <div class="statistic-setting__title">
                                Total users
                            </div>
                            <div class="statistic-setting__bottom" id="total_users"></div>
                        </div>
                    </div>
                    <div class="statistic-setting__item">
                        <div class="statistic-setting__icon">
                            <img src="/img/statistic/04.svg?_v=1644581884261" alt="Icon">
                        </div>
                        <div class="statistic-setting__content">
                            <div class="statistic-setting__title">
                                Sources
                            </div>
                            <div class="statistic-setting__bottom" id="experiment_name"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="setting__track track">
                <div class="track__title">
                    Track events
                </div>
                <div class="track__head">
                    <form action="#" class="track__form form-track" id="">
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
                                name="dates"
                                id="date_filter_experiment"
                            >
                        </div>
                        <button class="form-track__add" style="display: none">
                            <svg class="form-track__icon">
                                <use href="/img/icons/icons.svg#plus1"></use>
                            </svg>
                            Add a tag
                        </button>
                    </form>
                    <a href="/en/stats/customization-event" class="track__add">
                        Add events
                        <svg class="track__add-icon">
                            <use href="/img/icons/icons.svg#arrow-blue"></use>
                        </svg>
                    </a>
                </div>
                <div class="track__tags">

                </div>
                <table class="table table_ap">
                    <thead class="table__thead">
                        <tr class="table__thead-tr">

                        </tr>
                    </thead>
                    <tbody class="table__body">

                    </tbody>
                </table>
            </div>
            <div class="setting__dashboard dashboard">
                <div class="dashboard__head">
                    <div class="dashboard__title">
                        Dashboard
                    </div>
                    <div class="dashboard__labels">

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
                            value="Last 7 days"
                            class="date__input date-range"
                            name="dates"
                            id="date_filter_dashboard"
                        >
                    </div>
                </div>
                <div class="dashboard__grid">

                </div>
            </div>
{{--            <div class="setting__track track">--}}
{{--                <div class="track__title">--}}
{{--                    Top referres--}}
{{--                </div>--}}
{{--                <table class="table table_info">--}}
{{--                    <thead class="table__thead">--}}
{{--                    <tr class="table__thead-tr">--}}
{{--                        <th class="table__thead-th" scope="col">Referrer--}}
{{--                        </th>--}}
{{--                        <th class="table__thead-th" scope="col">Users--}}
{{--                        </th>--}}
{{--                        <th class="table__thead-th" scope="col">--}}
{{--                        </th>--}}
{{--                    </tr>--}}
{{--                    </thead>--}}
{{--                    <tbody class="table__body">--}}
{{--                    <tr class="table__row">--}}
{{--                        <td class="table__column" data-label="Referrer">--}}
{{--                            www.quora.com--}}
{{--                        </td>--}}
{{--                        <td class="table__column" data-label="Users">21</td>--}}
{{--                        <td class="table__column" data-label="">50%</td>--}}
{{--                    </tr>--}}
{{--                    <tr class="table__row">--}}
{{--                        <td class="table__column" data-label="Referrer">--}}
{{--                            www. goggle.com--}}
{{--                        </td>--}}
{{--                        <td class="table__column" data-label="Users">12</td>--}}
{{--                        <td class="table__column" data-label="">29%</td>--}}
{{--                    </tr>--}}
{{--                    <tr class="table__row">--}}
{{--                        <td class="table__column" data-label="Referrer">--}}
{{--                            www.linkedin.com--}}
{{--                        </td>--}}
{{--                        <td class="table__column" data-label="Users">3</td>--}}
{{--                        <td class="table__column" data-label="">7%</td>--}}
{{--                    </tr>--}}
{{--                    <tr class="table__row">--}}
{{--                        <td class="table__column" data-label="Referrer">--}}
{{--                            www.djinni.co--}}
{{--                        </td>--}}
{{--                        <td class="table__column" data-label="Users">2</td>--}}
{{--                        <td class="table__column" data-label="">5%</td>--}}
{{--                    </tr>--}}
{{--                    </tbody>--}}
{{--                </table>--}}
{{--            </div>--}}
            </div>
        </div>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chartjs-adapter-date-fns/dist/chartjs-adapter-date-fns.bundle.min.js">
    </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment-range/4.0.2/moment-range.js"
            integrity="sha512-XKgbGNDruQ4Mgxt7026+YZFOqHY6RsLRrnUJ5SVcbWMibG46pPAC97TJBlgs83N/fqPTR0M89SWYOku6fQPgyw=="
            crossorigin="anonymous"
            referrerpolicy="no-referrer"
    >
    </script>
    <script>
        window['moment-range'].extendMoment(moment);
        window.token='Bearer <?=request()->cookie('token')?>';
        window.onload = $('.loader').show();
        window.mode = 'experiment_stats';
    </script>
    <script src="/js/Stats.js"></script>
@endsection
