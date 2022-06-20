@extends('front::layouts.settings')

@section('settings')
    <link rel="stylesheet" href="/css/new.css">
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
                            <div class="input_wrapper">
                                <input class="input" type="number" id="user_id">
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
                                <input class="input" type="text">
                            </label>
                        </div>
                        <button class="new_user_form_button button" id="search_user_data">Submit</button>
                    </form>
                </div>
                <div class="setting__top top-setting">
                    <div class="new_user_center">
                        <div class="new_user_title">Add user to experiment</div>
                        <button class="new_user_button button _icon _outline">
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="8.5" cy="8.5" r="8.5" fill="#32AD67"/>
                                <path d="M12.3571 9.14286H9.14286V12.3571C9.14286 12.7107 8.85357 13 8.5 13C8.14643 13 7.85714 12.7107 7.85714 12.3571V9.14286H4.64286C4.28929 9.14286 4 8.85357 4 8.5C4 8.14643 4.28929 7.85714 4.64286 7.85714H7.85714V4.64286C7.85714 4.28929 8.14643 4 8.5 4C8.85357 4 9.14286 4.28929 9.14286 4.64286V7.85714H12.3571C12.7107 7.85714 13 8.14643 13 8.5C13 8.85357 12.7107 9.14286 12.3571 9.14286Z" fill="white"/>
                            </svg>
                            Add user to experiment
                        </button>
                    </div>
                    <form class="new_user_add_form">
                        <div class="new_user_add_wrapper">
                            <div class="new_user_add_label">Experiment</div>
                            <div class="select">
                                <select name="Experiment">
                                    <option value="0">Button color</option>
                                    <option value="1">Button color 2</option>
                                    <option value="1">Button color 3</option>
                                </select>
                            </div>
                        </div>
                        <div class="new_user_add_wrapper">
                            <div class="new_user_add_label">Branches</div>
                            <div class="select">
                                <select name="Experiment">
                                    <option value="0">Blue color</option>
                                    <option value="1">Blue color 2</option>
                                    <option value="1">Blue color 3</option>
                                </select>
                            </div>
                        </div>
                        <div class="new_user_add_bottom">
                            <button class="button">Add to experiment</button>
                            <div class="new_user_add_cancel">Cancel</div>
                        </div>
                    </form>
                </div>
                <div class="new_user_label">Results:</div>
                <div class="new_user_title">User info</div>
                <div class="new_user_info">
                    <div class="new_user_info_li">
                        <span>Experiment ID</span>
                        <p class="code">
                            <span class="code">B95AC000-0000-0000-00005030</span>,
                            <span class="code">B95AC000-0000-0000-00005030</span>
                        </p>
                    </div>
                    <div class="new_user_info_li">
                        <span>Registered</span>
                        <p>2022-04-27 08:42:25</p>
                    </div>
                    <div class="new_user_info_li">
                        <span>Browser</span>
                        <p>Chrome</p>
                    </div>
                    <div class="new_user_info_li">
                        <span>Platform</span>
                        <p>macintosh</p>
                    </div>
                    <div class="new_user_info_li">
                        <span>Country</span>
                        <p>Europe</p>
                    </div>
                </div>
                <div class="new_user_title">Experiments</div>
                <div class="new_user_experiment">
                    <div class="new_user_experiment_net _top">
                        <div class="new_user_experiment_col">Experiment name</div>
                        <div class="new_user_experiment_col">Branch</div>
                        <div class="new_user_experiment_col">Got into the experiment at</div>
                    </div>
                    <div class="new_user_experiment_item new_user_experiment_net">
                        <div class="new_user_experiment_col">
                            <span>Experiment name</span>
                            Button color
                        </div>
                        <div class="new_user_experiment_col">
                            <span>Branch</span>
                            Branch#1
                        </div>
                        <div class="new_user_experiment_col">
                            <span>Got into the experiment at</span>
                            2022-04-27 08:42:25
                        </div>
                        <div class="new_user_experiment_col _del">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="32" height="32" rx="10" fill="var(--bg)"/>
                                <path d="M10 23C10 24.1 10.9 25 12 25H20C21.1 25 22 24.1 22 23V13C22 11.9 21.1 11 20 11H12C10.9 11 10 11.9 10 13V23ZM13 13H19C19.55 13 20 13.45 20 14V22C20 22.55 19.55 23 19 23H13C12.45 23 12 22.55 12 22V14C12 13.45 12.45 13 13 13ZM19.5 8L18.79 7.29C18.61 7.11 18.35 7 18.09 7H13.91C13.65 7 13.39 7.11 13.21 7.29L12.5 8H10C9.45 8 9 8.45 9 9C9 9.55 9.45 10 10 10H22C22.55 10 23 9.55 23 9C23 8.45 22.55 8 22 8H19.5Z" fill="var(--color)"/>
                            </svg>
                        </div>
                    </div>
                    <div class="new_user_experiment_item new_user_experiment_net">
                        <div class="new_user_experiment_col">
                            <span>Experiment name</span>
                            Free trial
                        </div>
                        <div class="new_user_experiment_col">
                            <span>Branch</span>
                            Branch#2
                        </div>
                        <div class="new_user_experiment_col">
                            <span>Got into the experiment at</span>
                            2022-04-27 08:42:25
                        </div>
                        <div class="new_user_experiment_col _del">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="32" height="32" rx="10" fill="var(--bg)"/>
                                <path d="M10 23C10 24.1 10.9 25 12 25H20C21.1 25 22 24.1 22 23V13C22 11.9 21.1 11 20 11H12C10.9 11 10 11.9 10 13V23ZM13 13H19C19.55 13 20 13.45 20 14V22C20 22.55 19.55 23 19 23H13C12.45 23 12 22.55 12 22V14C12 13.45 12.45 13 13 13ZM19.5 8L18.79 7.29C18.61 7.11 18.35 7 18.09 7H13.91C13.65 7 13.39 7.11 13.21 7.29L12.5 8H10C9.45 8 9 8.45 9 9C9 9.55 9.45 10 10 10H22C22.55 10 23 9.55 23 9C23 8.45 22.55 8 22 8H19.5Z" fill="var(--color)"/>
                            </svg>
                        </div>
                    </div>
                    <div class="new_user_experiment_item new_user_experiment_net">
                        <div class="new_user_experiment_col">
                            <span>Experiment name</span>
                            Feature toggle: price lower
                        </div>
                        <div class="new_user_experiment_col">
                            <span>Branch</span>
                            Branch#2
                        </div>
                        <div class="new_user_experiment_col">
                            <span>Got into the experiment at</span>
                            2022-04-27 08:42:25
                        </div>
                        <div class="new_user_experiment_col _del">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="32" height="32" rx="10" fill="var(--bg)"/>
                                <path d="M10 23C10 24.1 10.9 25 12 25H20C21.1 25 22 24.1 22 23V13C22 11.9 21.1 11 20 11H12C10.9 11 10 11.9 10 13V23ZM13 13H19C19.55 13 20 13.45 20 14V22C20 22.55 19.55 23 19 23H13C12.45 23 12 22.55 12 22V14C12 13.45 12.45 13 13 13ZM19.5 8L18.79 7.29C18.61 7.11 18.35 7 18.09 7H13.91C13.65 7 13.39 7.11 13.21 7.29L12.5 8H10C9.45 8 9 8.45 9 9C9 9.55 9.45 10 10 10H22C22.55 10 23 9.55 23 9C23 8.45 22.55 8 22 8H19.5Z" fill="var(--color)"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="new_user_title">User events</div>
                <div class="new_user_event">
                    <label class="new_user_event_input">
                                                <span class="lab">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M19 4H18V2H16V4H8V2H6V4H5C3.89 4 3.01 4.9 3.01 6L3 20C3 21.1 3.89 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V10H19V20ZM19 8H5V6H19V8ZM9 14H7V12H9V14ZM13 14H11V12H13V14ZM17 14H15V12H17V14ZM9 18H7V16H9V18ZM13 18H11V16H13V18ZM17 18H15V16H17V18Z" fill="#9699AB"/>
                                                    </svg>
                                                    <span>Date Range: </span>
                                                </span>
                        <input class="input" type="text" value="Jan 09, 2022 - Jan 20, 2022">
                    </label>
                    <table>
                        <thead>
                        <tr>
                            <th>User ID</th>
                            <th>Event name</th>
                            <th>Tag</th>
                            <th>IP</th>
                            <th>Country</th>
                        </tr>
                        </thead>
                        <tr>
                            <td>
                                <span class="mobile">User ID</span>
                                4A1A87F0-0000-0000-00009BC6
                            </td>
                            <td>
                                <span class="mobile">Event name</span>
                                visited_almost_done_page
                            </td>
                            <td>
                                <span class="mobile">Tag</span>
                                <span class="tag">newFormFlow25Jan2022</span>
                            </td>
                            <td>
                                <span class="mobile">IP</span>
                                192.168.123.132.
                            </td>
                            <td>
                                <span class="mobile">Country</span>
                                Ukraine
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span class="mobile">User ID</span>
                                4A1A87F0-0000-0000-00009BC6
                            </td>
                            <td>
                                <span class="mobile">Event name</span>
                                visit_form_filler
                            </td>
                            <td>
                                <span class="mobile">Tag</span>
                                <span class="tag">newFormFlow25Jan2022</span>
                            </td>
                            <td>
                                <span class="mobile">IP</span>
                                192.168.123.132.
                            </td>
                            <td>
                                <span class="mobile">Country</span>
                                Greece
                            </td>
                        </tr>
                    </table>
                    <div class="new_user_event_button">
                        <button class="button">Load more</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <script src="/js/UserPage.js"></script>
@endsection