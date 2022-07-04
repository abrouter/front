<?php
use Modules\Front\Internal\User;
?>
@extends('front::layouts.master')

@section('content')
    <main class="page page_home">
        @if (env('MARKETING_ENABLED') === 'enabled')
        <section class="page__main-block main-block">
            <div class="main-block__container">
                <div class="main-block__body">
                    <h1 class="main-block__title">
                        Making A/B tests is challenging. We make it easy with open-source tool.
                    </h1>
                    <div class="main-block__text">
                        <p> - High level of support for <a href="https://github.com/abrouter/abrouter-php-client"><b>PHP</b></a>, <a href="https://github.com/abrouter/laravel-abtest"><b>Laravel</b></a>, <a href="https://github.com/abrouter/symfony-abtest"><b>Symfony</b></a></p>
                        <p> - Developer-oriented. </p>
                        <p> - Built-in statistics to track funnel and revenue depending on the experiment</p>
                        <p> - Open-source code. It's your choice - reliable cloud solution or your own server.</p>
                        <p> - <b>Parallel running</b>. Run A/B test <b>asynchronously</b> in your code. Don't wait the server response.</p>
                        <br/>
                        <div class="main-block__bottom">
                            <div class="main-block__partners">
                                <b>✓ A/B tests</b>
                                <b>✓ Feature flags</b>
                                <b>✓ Built-in statistics</b>
                            </div>
                        </div>

{{--                        <a class="github-button" href="https://github.com/abrouter/abrouter" data-color-scheme="no-preference: light; light: light; dark: dark;" data-size="large" aria-label="Star abrouter/abrouter on GitHub">Star</a>--}}


                    </div>
                    <a href="/en/signup" class="button main-block__button">Get Started for free</a>



{{--                    <div class="main-block__bottom">--}}
{{--                        <div class="main-block__label">You are in good company:</div>--}}
{{--                        <div class="main-block__partners">--}}
{{--                            <a href="https://holyeat.com/" target="_blank" class="main-block__link">--}}
{{--                                <picture><source srcset="/img/png/partner01.png" type="image/webp"><img src="/img/png/partner01.png?_v=1641102802883" alt=""></picture>--}}
{{--                            </a>--}}
{{--                            <a href="https://proxiedmail.com/" target="_blank" class="main-block__link">--}}
{{--                                <picture><source srcset="/img/png/partner02.png" type="image/webp"><img src="/img/png/partner02.png?_v=1641102802883" alt=""></picture>--}}
{{--                            </a>--}}
{{--                        </div>--}}
{{--                    </div>--}}
                </div>
                <div class="main-block__right">
                    <div class="main-block__image">
                        <picture><source srcset="/img/png/banner.webp" type="image/webp"><img src="/img/png/banner.png?_v=1641102802883" alt=""></picture>
                    </div>
                </div>
            </div>
        </section>

            <section class="page_benefit benefit">
                <div class="benefit__container">
                    <div class="benefit__head head">
                        <h2 class="head__title">
                            Open-source platform to improve your product
                        </h2>
                    </div>
                    <div class="benefit__items">
                        <div class="benefit__item item-benefit">
                            <div class="item-benefit__img">
                                <img src="img/icons/deploy-conf.png" alt="">
                            </div>
                            <div class="item-benefit__title">Deploy confidently</div>
                            <div class="item-benefit__text">
                                Deploy new code anytime under the feature flags.
                                It's important to merge the code from feature branch to your master branch as soon as possible.
                                Turn it on when everything ready.
                                <br/>If it's new to users make it via A/B test.
                            </div>
                        </div>
                        <div class="benefit__item item-benefit">
                            <div class="item-benefit__img">
                                <img src="img/icons/metric.png" alt="">
                            </div>
                            <div class="item-benefit__title">See the impact of your changes</div>
                            <div class="item-benefit__text">
                                Track the new features via A/B tests.
                                You need to understand how new feature impact your user flow and revenue. <br/>
                                Make sure you're going in the right direction with matching the statistics with experiment branch.
                            </div>
                        </div>

                        <div class="benefit__item item-benefit">
                            <div class="item-benefit__img">
                                <img src="img/icons/circle.png" alt="">
                            </div>
                            <div class="item-benefit__title">Set up once</div>
                            <div class="item-benefit__text">
                                Set up ABRouter and metrics to track once and scale your A/B tests within the multiple lines of code for every A/B test.
                                Delegate the experiments preparing to the product manager role.
                            </div>
                        </div>

                    </div>
                </div>
            </section>



            <section class="meet page_meet">
            <div class="meet__container" id="owerview">
                <div data-tabs class="meet__tabs tabs-meet">
                    <div data-tabs-body class="tabs-meet__content">
                        <div class="tabs-meet__body">
                            <div class="tabs-meet__wrap">
                                <div class="tabs-meet__info">
                                    <div class="tabs-meet__head head">
                                        <div class="head__top">
                                            Meet the product
                                        </div>
                                        <h2 class="head__title">
                                            Your experiments and feature flags are in the good hands
                                        </h2>
                                    </div>
                                    <div class="tabs-meet__items">
                                        <div class="tabs-meet__item">
                                            <div class="tabs-meet__img">
                                                <img src="img/svg/meet01.svg?_v=1641102802883" alt="">
                                            </div>
                                            <p>Create and manage in few clicks: A/B tests and feature flags.</p>
                                        </div>
                                        <div class="tabs-meet__item">
                                            <div class="tabs-meet__img">
                                                <img src="img/svg/meet02.svg?_v=1641102802883" alt="">
                                            </div>
                                            <p>Easily integrate ABR into your system, then run experiments in a few lines of code and get the branch with the right distribution.</p>
                                        </div>
                                        <div class="tabs-meet__item">
                                            <div class="tabs-meet__img">
                                                <img src="img/svg/meet03.svg?_v=1641102802883" alt="">
                                            </div>
                                            <p>The system will remember the branch for further requests and keep it into account for statistics.</p>
                                        </div>
                                        <div class="tabs-meet__item">
                                            <div class="tabs-meet__img">
                                                <img src="img/svg/meet04.svg?_v=1641102802883" alt="">
                                            </div>
                                            <p>Open-source product. Feel free to use as you want. Life is good without vendor-lock</p>
                                        </div>
                                        <div class="tabs-meet__item tabs-meet__item_big">
                                            <div class="tabs-meet__img">
                                                <img src="img/svg/meet05.svg?_v=1641102802883" alt="">
                                            </div>
                                            <p>Easy-to-setup built-in statistics will help you to make decisions by experiments.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="tabs-meet__right">
                                    <div class="tabs-meet__img">
                                        <picture><source srcset="/img/examples/mainpage-new-checkout.png" type="image/webp"><img src="/img/examples/mainpage-new-checkout.png" alt=""></picture>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tabs-meet__body">
                            <div class="tabs-meet__wrap">
                                <div class="tabs-meet__info">
                                    <div class="tabs-meet__head head">
                                        <div class="head__top">
                                            Meet the product
                                        </div>
                                        <h2 class="head__title">
                                            Ready-to-use Laravel, Symfony, PHP packages
                                        </h2>
                                    </div>
                                    <div class="tabs-meet__items">
                                        <div class="tabs-meet__item">
                                            <div class="tabs-meet__img">
                                                <img src="img/svg/meet01.svg?_v=1641102802883" alt="">
                                            </div>
                                            <p>Best packages. Run composer install and relax. We already did everything. </p>
                                        </div>
                                        <div class="tabs-meet__item">
                                            <div class="tabs-meet__img">
                                                <img src="img/svg/meet02.svg?_v=1641102802883" alt="">
                                            </div>
                                            <p>Directly integrated to your language and framework. Built by developers for developers.</p>
                                        </div>
                                        <div class="tabs-meet__item">
                                            <div class="tabs-meet__img">
                                                <img src="img/svg/meet03.svg?_v=1641102802883" alt="">
                                            </div>
                                            <p>Focus on the core of your product, not on the A/B tests and feature-flags</p>
                                        </div>
                                        <div class="tabs-meet__item">
                                            <div class="tabs-meet__img">
                                                <img src="img/svg/meet04.svg?_v=1641102802883" alt="">
                                            </div>
                                            <p>Parallel running. Use built-in non-blocking running to run the experiments and feature flags.</p>
                                        </div>
                                        <div class="tabs-meet__item tabs-meet__item_big">
                                            <div class="tabs-meet__img">
                                                <img src="img/svg/meet05.svg?_v=1641102802883" alt="">
                                            </div>
                                            <p>Open-source. Useful documentation and great support. Take cloud version, deploy locally or on the remote server</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="tabs-meet__right">
                                    <div class="tabs-meet__img">
                                        <picture><source srcset="/img/examples/integration.png" type="image/webp"><img src="/img/examples/postman-screen.png" alt=""></picture>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="tabs-meet__bottom">
                        <a href="/en/signup" class="tabs meet__button">
                            <span>Get started for free</span>
                            <svg class="tabs-meet__icon">
                                <use href="img/icons/icons.svg#arrow-button"></use>
                            </svg>
                        </a>
                        <nav data-tabs-titles class="tabs-meet__navigation">
                            <button type="submit" class="tabs-meet__title _tab-active">Managing</button>
                            <button type="submit" class="tabs-meet__title">Integration</button>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
        <section class="what page_what">
            <div class="what__container" id="why_us">
                <div data-tabs class="what__tabs tabs-what">
                    <div data-tabs-body class="tabs-what__content">
                        <div class="tabs-what__body">
                            <div class="tabs-what__wrap">
                                <div class="tabs-what__left">
                                    <div class="tabs-what__head head">
                                        <div class="head__top">
                                            Features
                                        </div>
                                        <h2 class="head__title">
                                            What is ABRouter?
                                        </h2>
                                    </div>
                                    <div class="tabs-what__text">
                                        ABRouter is the open-source platform for running and tracking A/B tests, implementing and managing feature-flags with high level of support of <a href="https://github.com/abrouter/abrouter-php-client"><b>PHP</b></a>, <a href="https://github.com/abrouter/laravel-abtest"><b>Laravel</b></a>, <a href="https://github.com/abrouter/symfony-abtest"><b>Symfony</b></a>.
                                    </div>
                                    <a href="/en/signup" class="tabs-what__button">
                                        <span>Create a free account</span>
                                        <svg class="tabs-what__icon">
                                            <use href="img/icons/icons.svg#arrow-button"></use>
                                        </svg>
                                    </a>
                                </div>
                                <div class="tabs-what__right">
                                    <div class="tabs-what__img">
                                        <picture><source srcset="/img/mp/whatisabr.png" type="image/webp"><img src="/img/mp/whatisabr.png" alt=""></picture>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tabs-what__body">
                            <div class="tabs-what__wrap">
                                <div class="tabs-what__left">
                                    <div class="tabs-what__head head">
                                        <div class="head__top">
                                            Features
                                        </div>
                                        <h2 class="head__title">
                                            A/B Tests
                                        </h2>
                                    </div>
                                    <div class="tabs-what__text">
                                        A/B tests are your best friend for cases when you need to optimize your customer journey, improve conversions and increase revenue. All changes, that you are making to the application, should be tested with an A/B test. It doesn't matter - some refactoring or new features. Sometimes, changes break the conversions. ABRouter provides a completed system to create, run and manage A/B tests for your app.
                                    </div>
                                    <a href="/en/signup" class="tabs-what__button">
                                        <span>Explore ABRouter</span>
                                        <svg class="tabs-what__icon">
                                            <use href="img/icons/icons.svg#arrow-button"></use>
                                        </svg>
                                    </a>
                                </div>
                                <div class="tabs-what__right">
                                    <div class="tabs-what__img">
                                        <picture><source srcset="/img/mp/abtest-min.png" type="image/webp"><img src="/img/mp/abtest-min.png" alt=""></picture>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tabs-what__body">
                            <div class="tabs-what__wrap">
                                <div class="tabs-what__left">
                                    <div class="tabs-what__head head">
                                        <div class="head__top">
                                            Features
                                        </div>
                                        <h2 class="head__title">
                                            Feature flags
                                        </h2>
                                    </div>
                                    <div class="tabs-what__text">
                                        Feature flags are frequently used for improving feature delivery velocity. When you want to deliver a feature to the production of your application, but it can't be tested via A/B test the right solution is the feature flag. Feature flag allows you to disable or enable your feature anytime without deploying your app. At the same time, you can reduce the dependencies on the feature development of your teams - don't wait for the other team, deploy now with the feature flag, and enable when the others are ready. Every delayed-release is increasing your app complexity.
                                    </div>
                                    <a href="" class="tabs-what__button">
                                        <span>Explore ABRouter</span>
                                        <svg class="tabs-what__icon">
                                            <use href="img/icons/icons.svg#arrow-button"></use>
                                        </svg>
                                    </a>
                                </div>
                                <div class="tabs-what__right">
                                    <div class="tabs-what__img">
                                        <picture><source srcset="/img/mp/flag-min.png" type="image/webp"><img src="/img/mp/flag-min.png" alt=""></picture>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tabs-what__body">
                            <div class="tabs-what__wrap">
                                <div class="tabs-what__left">
                                    <div class="tabs-what__head head">
                                        <div class="head__top">
                                            Features
                                        </div>
                                        <h2 class="head__title">
                                            Statistics
                                        </h2>
                                    </div>
                                    <div class="tabs-what__text">
                                        Creating A/B tests is an amazing idea, but how to finally decide what branch is performing better? Of course, we are talking about the statistics. We have a complex statistics system. You can collect information about your users and compare this information between the branches. Although, you can collect overall statistics about your funnel to find the way to improve it. And, of course, you can use our statistics to collect some metrics of your application like an errors counter, then you can compare your system metrics between branches.
                                    </div>
                                    <a href="" class="tabs-what__button">
                                        <span>Explore ABRouter</span>
                                        <svg class="tabs-what__icon">
                                            <use href="img/icons/icons.svg#arrow-button"></use>
                                        </svg>
                                    </a>
                                </div>
                                <div class="tabs-what__right">
                                    <div class="tabs-what__img">
                                        <picture><source srcset="/img/mp/stats-min.png" type="image/webp"><img src="/img/mp/stats-min.png" alt=""></picture>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tabs-what__body">
                            <div class="tabs-what__wrap">
                                <div class="tabs-what__left">
                                    <div class="tabs-what__head head">
                                        <div class="head__top">
                                            Features
                                        </div>
                                        <h2 class="head__title">
                                            Easy to manage
                                        </h2>
                                    </div>
                                    <div class="tabs-what__text">
                                        Our team has a lot of development and business experience. And we know what you need. We have created the best user interface to create, run and manage A/B tests or the feature flags, the best interface to see statistics.
                                        All processes can be done via our UI. Compared to managing in code it's faster.
                                    </div>
                                    <a href="" class="tabs-what__button">
                                        <span>Explore ABRouter</span>
                                        <svg class="tabs-what__icon">
                                            <use href="img/icons/icons.svg#arrow-button"></use>
                                        </svg>
                                    </a>
                                </div>
                                <div class="tabs-what__right">
                                    <div class="tabs-what__img">
                                        <picture><source srcset="/img/mp/manage-min.png" type="image/webp"><img src="/img/mp/manage-min.png" alt=""></picture>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tabs-what__body">
                            <div class="tabs-what__wrap">
                                <div class="tabs-what__left">
                                    <div class="tabs-what__head head">
                                        <div class="head__top">
                                            Features
                                        </div>
                                        <h2 class="head__title">
                                            Best price
                                        </h2>
                                    </div>
                                    <div class="tabs-what__text">
                                        Our goal is a be closer to you, your company, and the product. We're orienting on the startups to start together and be successful together. However, we are also ready to work with a big business and ready to allocate dedicated persons to support your company. Our goal is to make your startup a big company to share success. So, we can offer you the best price to start with us and the best price to focus on your own business and development, rather than developing your A/B test system.                                     </div>
                                    <a href="" class="tabs-what__button">
                                        <span>Explore ABRouter</span>
                                        <svg class="tabs-what__icon">
                                            <use href="img/icons/icons.svg#arrow-button"></use>
                                        </svg>
                                    </a>
                                </div>
                                <div class="tabs-what__right">
                                    <div class="tabs-what__img">
                                        <picture><source srcset="/img/mp/price-min.png" type="image/webp"><img src="/img/mp/price-min.png" alt=""></picture>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <nav data-tabs-titles class="tabs-what__navigation">
                        <button type="submit" class="tabs-what__title _tab-active">What is ABRouter?</button>
                        <button type="submit" class="tabs-what__title">A/B Tests</button>
                        <button type="submit" class="tabs-what__title">Feature flags</button>
                        <button type="submit" class="tabs-what__title">Statistics</button>
                        <button type="submit" class="tabs-what__title">Easy to manage</button>
                        <button type="submit" class="tabs-what__title">Best price</button>
                    </nav>
                </div>
            </div>
        </section>
            <section class="page_benefit benefit">
                <div class="benefit__container">
                    <div class="benefit__head head">
                        <div class="head__top">
                            Features
                        </div>
                        <h2 class="head__title">
                            Bring ABRouter to your product
                        </h2>
                    </div>
                    <div class="benefit__subtitle">
                        Improve your product using the ABRouter open-source platform
                    </div>
                    <div class="benefit__items">
                        <div class="benefit__item item-benefit">
                            <div class="item-benefit__img">
                                <img src="img/svg/benefit01.svg?_v=1641102802883" alt="">
                            </div>
                            <div class="item-benefit__title">Built for your product</div>
                            <div class="item-benefit__text">
                                No one line code needed to create new experiments except request to run experiment. Wire our packages for: <a href="https://github.com/abrouter/abrouter-php-client"><b>PHP</b></a>, <a href="https://github.com/abrouter/laravel-abtest"><b>Laravel</b></a>, <a href="https://github.com/abrouter/symfony-abtest"><b>Symfony</b></a>.
                            </div>
                        </div>
                        <div class="benefit__item item-benefit">
                            <div class="item-benefit__img">
                                <img src="img/svg/parallelRunning.png?_v=1641102802883" alt="">
                            </div>
                            <div class="item-benefit__title">Parallel(non-blocking) running</div>
                            <div class="item-benefit__text">
                                Our packages has support for running A/B tests and feature flags locally, then sync the result with ABRouter server in the scheduled job.
                            </div>
                        </div>

                        <div class="benefit__item item-benefit">
                            <div class="item-benefit__img">
                                <img src="img/svg/benefit03.svg?_v=1641102802883" alt="">
                            </div>
                            <div class="item-benefit__title">Built-in statistics</div>
                            <div class="item-benefit__text">
                                Set up the statistics, wait a couple of weeks and you're ready to make the decision on your next experiment.


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
                    Start using ABRouter for free and see how it can improve your application.
                </div>
                <a href="/en/signup" class="start__button button">Get started for free</a>
            </div>
        </section>
       @else
            <section class="page__main-block main-block">

            <div class="main-block__container">
                <div class="main-block__body">
                    <h1 class="main-block__title">
                        Welcome to ABRouter
                    </h1>
                    <a href="/en/signup" class="button main-block__button">Login</a>
                    <div class="main-block__bottom">
                        <div class="main-block__label">You are in good company:</div>
                        <div class="main-block__partners">
                            <a href="https://holyeat.com/" target="_blank" class="main-block__link">
                                <picture><source srcset="/img/png/partner01.webp" type="image/webp"><img src="/img/png/partner01.png?_v=1641102802883" alt=""></picture>
                            </a>
                            <a href="https://proxiedmail.com/" target="_blank" class="main-block__link">
                                <picture><source srcset="/img/png/partner02.webp" type="image/webp"><img src="/img/png/partner02.png?_v=1641102802883" alt=""></picture>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="main-block__right">
                    <div class="main-block__image">
                        <picture><source srcset="/img/png/banner.webp" type="image/webp"><img src="/img/png/banner.png?_v=1641102802883" alt=""></picture>
                    </div>
                </div>
            </div>
            </section>

        @endif
    </main>
@endsection
<!-- Place this tag in your head or just before your close body tag. -->
<script async defer src="https://buttons.github.io/buttons.js"></script>
