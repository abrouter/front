@extends('front::layouts.settings')

@section('settings')
    <link rel="stylesheet" href="/css/new.css">
    <link rel="stylesheet" href="/css/loader.css">
    <div class="loader">
        <svg class="spinner" viewBox="0 0 50 50">
            <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="2"></circle>
        </svg>
    </div>
    <div class="setting__right">
        <div class="setting__content">
            <h1 class="setting__title">
                User page
            </h1>
            <div class="new_user">
                <div class="new_user_title">Search user data for</div>
                <div class="setting__top top-setting">
                    <form class="new_user_form">
                        <div class="new_user_input">
                            <div class="new_user_input_label">User organization identifier</div>
                            <div class="input_wrapper" id="input_user_id">
                                <input class="input" type="text" id="user_id">
                            </div>
                        </div>
                        <div class="new_user_input">
                            <div class="new_user_input_label">Events from</div>
                            <label class="input_wrapper">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 4H18V2H16V4H8V2H6V4H5C3.89 4 3.01 4.9 3.01 6L3 20C3 21.1 3.89 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V10H19V20ZM19 8H5V6H19V8ZM9 14H7V12H9V14ZM13 14H11V12H13V14ZM17 14H15V12H17V14ZM9 18H7V16H9V18ZM13 18H11V16H13V18ZM17 18H15V16H17V18Z" fill="#9699AB"/>
                                </svg>
                                <input class="input" type="text" id="event_date_from">
                            </label>
                        </div>
                        <div class="new_user_input">
                            <div class="new_user_input_label">To</div>
                            <label class="input_wrapper">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 4H18V2H16V4H8V2H6V4H5C3.89 4 3.01 4.9 3.01 6L3 20C3 21.1 3.89 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V10H19V20ZM19 8H5V6H19V8ZM9 14H7V12H9V14ZM13 14H11V12H13V14ZM17 14H15V12H17V14ZM9 18H7V16H9V18ZM13 18H11V16H13V18ZM17 18H15V16H17V18Z" fill="#9699AB"/>
                                </svg>
                                <input class="input" type="text" id="event_date_to">
                            </label>
                        </div>
                        <button class="new_user_form_button button" id="search_user_data">Submit</button>
                    </form>
                </div>
                <div class="setting__top top-setting" id="add_user" style="display: none">
                    <div class="new_user_center">
                        <div class="new_user_title">Add user to experiment</div>
                        <button class="new_user_button button _icon _outline" id="add_user_to_experiment">
                            <svg class="tag" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="8.5" cy="8.5" r="8.5" fill="#32AD67"/>
                                <path d="M12.3571 9.14286H9.14286V12.3571C9.14286 12.7107 8.85357 13 8.5 13C8.14643 13 7.85714 12.7107 7.85714 12.3571V9.14286H4.64286C4.28929 9.14286 4 8.85357 4 8.5C4 8.14643 4.28929 7.85714 4.64286 7.85714H7.85714V4.64286C7.85714 4.28929 8.14643 4 8.5 4C8.85357 4 9.14286 4.28929 9.14286 4.64286V7.85714H12.3571C12.7107 7.85714 13 8.14643 13 8.5C13 8.85357 12.7107 9.14286 12.3571 9.14286Z" fill="white"/>
                            </svg>
                            Add user to experiment
                        </button>
                    </div>
                    <form class="new_user_add_form" style="display: none">
                        <div class="new_user_add_wrapper" id="experiments">
                            <div class="new_user_add_label">Experiment</div>
                            <div class="select">
                                <select name="Experiment"></select>
                            </div>
                        </div>
                        <div class="new_user_add_wrapper" id="experiment_branches">
                            <div class="new_user_add_label">Branches</div>
                            <div class="select">
                                <select name="Experiment"></select>
                            </div>
                        </div>
                        <div class="new_user_add_bottom">
                            <button class="button" id="send_user_to_experiment">Add to experiment</button>
                            <div class="new_user_add_cancel" id="cancel">Cancel</div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <script src="/js/UserPage.js"></script>
@endsection