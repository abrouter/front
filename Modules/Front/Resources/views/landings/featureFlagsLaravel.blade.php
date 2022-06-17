<?php
use Modules\Front\Internal\User;
?>
@extends('front::layouts.master')

@section('wrapper_class', 'knot')

@section('content')
    <main>
        <section class="page__main-block main-block">
            <div class="main-block__container">
                <div class="main-block__body">
                    <div class="head__top">Guide</div>
                    <h1 class="main-block__title">How to bring the feature flags to your Laravel project?</h1>
                    <div class="main-block__text">
                        <p>ABRouter is a platform that solves products problems and helps to improve conversions and
                            user experience. We focused on the developer experience, finite user experience, and of
                            course, on your business. In this post, we'll talk about the implementation of <b>feature
                                flags in Laravel</b>.</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="what page_what">
            <div class="what__container">
                <div class="what__tabs tabs-what _tab-init">
                    <div class="tabs-what__content">
                        <div class="tabs-what__body">
                            <div class="tabs-what__wrap">
                                <div class="tabs-what__left-2">
                                    <div class="tabs-what__head head">
                                        <div class="head__top">
                                            Definition
                                        </div>
                                        <h2 class="head__title">
                                            Common feature flags definition
                                        </h2>
                                    </div>
                                    <div class="tabs-what__label">
                                        Feature flags are also known as feature toggles. The feature flags are
                                        configurations that allow you to enable or disable some part of your code in
                                        your application. So, you can control the specific feature in your app in any
                                        environment.
                                    </div>
                                    <div class="tabs-what__text">
                                        Usually, enabling or disabling is working fast, and changes will take effect
                                        immediately, and that's critical nowadays. Technically feature flag looks like a
                                        true or false value received by the HTTPS(internet) call or via another
                                        transport with the remote server.
                                    </div>
                                    <a href="" class="tabs-what__button">
                                        <span>Start for free</span>
                                        <svg width="27" height="27" viewBox="0 0 27 27" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.8183 13.4998L9.24951 7.93108L10.8403 6.34033L17.9998 13.4998L10.8403 20.6593L9.24951 19.0686L14.8183 13.4998Z"
                                                  fill="#32AD67"/>
                                        </svg>
                                    </a>
                                </div>
                                <div class="tabs-what__right">
                                    <div class="tabs-what__img">
                                        <img src="/img/step/k1.png" alt
                                             srcset="/img/step/k1.png 1x, /img/step/k1@2x.png 2x">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="knot_feature">
            <div class="knot_feature__container">
                <div class="knot_feature_label head__top">Use cases</div>
                <h2 class="knot_feature_title head__title">Feature flags use-cases</h2>
                <div class="knot_feature_text">I hope you're interested in using feature flags. There are the following
                    <br/>reasons to bring it to your Laravel application:
                </div>
                <div class="knot_feature_items">
                    <div class="knot_feature_item">
                        <div class="knot_feature_item_name">Faster delivery to production.</div>
                        <p>Sometimes it's the only way to deliver the feature in production. If you're waiting for
                            someone, front end, for example, you have to wait. </p>
                        <p>While your feature branch is waiting for the deployment, the code could be broken by someone,
                            or someone from your team will change it and throw you into the work with VCS conflicts.
                            Based on my experience, it's better to deploy when your code is fresh. </p>
                        <p>Only one thing which you and your team have to test carefully when you release the feature
                            flag is the correct isolation of the new code. With the right level of code isolation, you
                            can sleep well and disable your feature flag anytime and then fix it and enable it
                            again.</p>
                    </div>
                    <div class="knot_feature_items_right">
                        <div class="knot_feature_item">
                            <div class="knot_feature_item_name">Change of the highly-important part of the application
                                that always should be controlled.
                            </div>
                            <p>When you change part of your application the mistake can be too expensive, so the right
                                decision is to care about it early and make the change under the feature flag. Feature
                                flags do not imply any measurement of payments or conversions for the changed code, so
                                it will work faster and perfectly fits this goal.</p>
                        </div>
                        <div class="knot_feature_item">
                            <div class="knot_feature_item_name">And the last, but not least is code which shell works
                                time-to-time.
                            </div>
                            <div class="knot_feature_item_text">
                                <p>For example, it can be a captcha, rate liming, or email confirmation on the sign-up
                                    step. You can enable something from it when your Laravel application is experiencing
                                    some kind of additional load.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="knot_task">
            <div class="knot_task__container">
                <div class="knot_task_label head__top">Task</div>
                <h2 class="knot_task_title head__title">Plan your first Laravel feature flag</h2>
                <div class="knot_task_item">
                    <div class="knot_task_item_label">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 22H4C3.73478 22 3.48043 21.8946 3.29289 21.7071C3.10536 21.5196 3 21.2652 3 21V3C3 2.73478 3.10536 2.48043 3.29289 2.29289C3.48043 2.10536 3.73478 2 4 2H20C20.2652 2 20.5196 2.10536 20.7071 2.29289C20.8946 2.48043 21 2.73478 21 3V21C21 21.2652 20.8946 21.5196 20.7071 21.7071C20.5196 21.8946 20.2652 22 20 22ZM19 20V4H5V20H19ZM8 7H16V9H8V7ZM8 11H16V13H8V11ZM8 15H13V17H8V15Z"
                                  fill="#32AD67"/>
                        </svg>
                        Task definition:
                    </div>
                    <div class="knot_task_item_name">Our task for today is to wrap the two HTML buttons to the feature
                        flag, one enabled and one - disabled.
                    </div>
                    <p>So, we can turn on or turn off one of the buttons or both anytime. Just the usual if-statements
                        with some additional preparation to start working on the ABRouter platform and basic wiring the
                        client in your Laravel project codebase.</p>
                </div>
            </div>
        </section>
        <section class="knot_form">
            <div class="knot_form__container">
                <div class="knot_form_net">
                    <div class="knot_form_items">
                        <h2 class="knot_form_title head__title">From words to work</h2>
                        <div class="knot_form_text">Follow the steps, it's easy:</div>
                        <div class="knot_form_items_wrapper">
                            <div class="knot_form_item">
                                <div class="knot_form_item_label"><span>Step 1:</span> Sign-up by the <a
                                            href="#">link</a></div>
                            </div>
                            <div class="knot_form_item">
                                <div class="knot_form_item_label"><span>Step 2:</span> Create your feature flags.</div>
                                <div class="knot_form_item_img">
                                    <img src="/img/examples/feature-flag.png" alt srcset="/img/examples/feature-flag.png 1x, /img/examples/feature-flag.png 2x">
                                </div>
                            </div>
                            <div class="knot_form_item">
                                <div class="knot_form_item_label"><span>Step 3:</span> Grab the data</div>
                                <p>After creating the A/B test you can to get the important data to run it.</p>
                                <div class="knot_form_item_img">
                                    <img src="/img/step/02.png" alt srcset="/img/step/02.png 1x, /img/step/02.png 2x">
                                </div>
                            </div>
                            <div class="knot_form_item">
                                <div class="knot_form_item_label"><span>Step 4:</span> Install</div>
                                <div class="knot_form_item_net _twoo">
                                    <p>
                                        Install the library to your codebase on PHP:
                                        <br/><a href="https://github.com/abrouter/laravel-abtest" target="_blank">https://github.com/abrouter/laravel-abtest</a>
                                    </p>
                                    <p>
                                        This library based on main ABRouter client:
                                        <br/><a href="https://github.com/abrouter/abrouter-php-client" target="_blank">https://github.com/abrouter/abrouter-php-client</a>
                                    </p>
                                </div>
                                <p class="small">This library includes ab-tests and feature flags managing on
                                    ABRouter.</p>
                                <ul>
                                    <li>
                                        <div class="knot_form_item_li_name">Install the package:</div>
                                        <code>composer require abrouter/laravel-abtest</code>
                                        <div class="knot_form_item_i">
                                            <p>
                                                This package provide auto discovery for service provider. If Symfony
                                                package auto-discovery is disabled, add service providers manually in
                                                your <span class="code">/app/app.php</span> of your repository.
                                            </p>
                                            <p>There are service providers you must add:</p>
                                            <p><span class="code">\Abrouter\<wbr>LaravelClient\<wbr>Providers\<wbr>AbrouterServiceProvider::class</span>
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="knot_form_item_li_name">Publish client configuration:</div>
                                        <code>php artisan vendor:publish --tag=abrouter</code>
                                    </li>
                                    <li>
                                        <div class="knot_form_item_li_name">Configure the client:</div>
                                        <p>There you have to put your ABRouter token from your dashboard which is
                                            described in the third point.</p>
                                        <div class="knot_form_item_img _not">
                                            <img src="/img/step/03.png" alt
                                                 srcset="/img/step/03.png 1x, /img/step/03.png 2x">
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="knot_form_item">
                                <div class="knot_form_item_label"><span>Step 5:</span> Code</div>
                                <p>
                                    Now we are ready to code. Also, you can check an example of fully completed code on
                                    GitHub:
                                    <a href="https://github.com/abrouter/laravel-example" target="_blank">https://github.com/abrouter/laravel-example</a>
                                </p>
                                <div class="knot_form_item_img _not">
                                    <img src="/img/step/f4.jpg" alt srcset="/img/step/f4.jpg 1x, /img/step/f4@2x.jpg 2x">
                                </div>
                                <div class="knot_form_item_img _not">
                                    <img src="/img/step/f5.jpg" alt srcset="/img/step/f5.jpg 1x, /img/step/f5@2x.jpg 2x">
                                </div>
                            </div>
                            <div class="knot_form_item">
                                <div class="knot_form_item_label"><span>Step 6:</span> There is our result</div>
                                <div class="knot_form_item_img _not" style="max-width: 400px;">
                                    <img src="/img/examples/feature-flags-result.png" alt srcset="/img/examples/feature-flags-result.png 1x, /img/examples/feature-flags-result.png 2x">
                                </div>
                                <p>One of the button is displayed and one is hidden under the if statement with turned
                                    of feature flag.</p>
                            </div>
                        </div>
                    </div>
                    <div class="knot_form_nav_wrapper">
                        <div class="knot_form_nav">
                            <div class="knot_form_nav_label">On this page</div>
                            <div class="knot_form_nav_items">
                                <div class="knot_form_nav_item" onclick="scroll_to($('.knot_form_item').eq(0))">Step 1:
                                    Sign-up by the link
                                </div>
                                <div class="knot_form_nav_item" onclick="scroll_to($('.knot_form_item').eq(1))">Step 2:
                                    Create your feature flags.
                                </div>
                                <div class="knot_form_nav_item" onclick="scroll_to($('.knot_form_item').eq(2))">Step 3:
                                    Grab the data
                                </div>
                                <div class="knot_form_nav_item" onclick="scroll_to($('.knot_form_item').eq(3))">Step 4:
                                    Install
                                </div>
                                <div class="knot_form_nav_item" onclick="scroll_to($('.knot_form_item').eq(4))">Step 5:
                                    Code
                                </div>
                                <div class="knot_form_nav_item" onclick="scroll_to($('.knot_form_item').eq(5))">Step 6:
                                    There is our result
                                </div>
                            </div>
                            <span class="line"></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="start page_start">
            <div class="start__container">
                <div class="start__head head">
                    <h2 class="head__title">
                        Getting started is easy
                    </h2>
                </div>
                <div class="start__subtitle">
                    Find key retention drivers with ABRouter
                </div>
                <a href="" class="start__button button">Create your first A/B test</a>
            </div>
        </section>
        <section class="knot_summary">
            <div class="knot_summary__container">
                <h2 class="knot_summary_title head__title">Summary</h2>
                <q class="knot_summary_q">
                    <p>I have shown you how to <b>implement the feature flag</b> with <b>Laravel</b> framework via
                        ABRouter. Looks like it's quite simple. Please, remember, that huge or uncertain changes, that
                        couldn't be tested with <span class="_blue">a/b test</span> should be implemented via feature
                        flag to prevent unpredictable situations and save your business.</p>
                    <p>If you have any questions, feel free to ask me at <a href="mailto:abrouter@proxiedmail.com"
                                                                            class="_blue">abrouter@proxiedmail.com</a>
                    </p>
                </q>
                <div class="knot_summary_user">
                    <div class="knot_summary_user_ava">
                        <img src="/img/easy/03.jpg" alt srcset="/img/easy/03.jpg 1x, /img/easy/03.jpg 2x">
                    </div>
                    <div class="knot_summary_user_info">
                        <div class="knot_summary_user_name">Alex Yatsenko</div>
                        <div class="knot_summary_user_pos">Senior Developer at ABRouter</div>
                    </div>
                </div>
            </div>
        </section>
    </main>
@endsection

@section('js')
    <script src="/js/FeatureFlagsLaravel.js"></script>
@endsection