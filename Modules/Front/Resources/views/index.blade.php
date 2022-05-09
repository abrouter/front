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
                        Making A/B tests is challenging. We make it easy
                    </h1>
                    <div class="main-block__text">
                        <p> - Multiple clicks to create an experiment, single request to run</p>
                        <p> - Ideal solution for startups and mid-size business</p>
                    </div>
                    <a href="/en/signup" class="button main-block__button">Get Started</a>
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
                                            The single place for all your product experiments
                                        </h2>
                                    </div>
                                    <div class="tabs-meet__items">
                                        <div class="tabs-meet__item">
                                            <div class="tabs-meet__img">
                                                <img src="img/svg/meet01.svg?_v=1641102802883" alt="">
                                            </div>
                                            <p>Run experiment by passing your internal user id.</p>
                                        </div>
                                        <div class="tabs-meet__item">
                                            <div class="tabs-meet__img">
                                                <img src="img/svg/meet02.svg?_v=1641102802883" alt="">
                                            </div>
                                            <p>ABRouter will define a branch based on branches percentage.</p>
                                        </div>
                                        <div class="tabs-meet__item">
                                            <div class="tabs-meet__img">
                                                <img src="img/svg/meet03.svg?_v=1641102802883" alt="">
                                            </div>
                                            <p>The system will remember the branch for further requests.</p>
                                        </div>
                                        <div class="tabs-meet__item">
                                            <div class="tabs-meet__img">
                                                <img src="img/svg/meet04.svg?_v=1641102802883" alt="">
                                            </div>
                                            <p>Curl and postman collection included</p>
                                        </div>
                                        <div class="tabs-meet__item tabs-meet__item_big">
                                            <div class="tabs-meet__img">
                                                <img src="img/svg/meet05.svg?_v=1641102802883" alt="">
                                            </div>
                                            <p>We will show you insights for every experiment based on data that you allow us to
                                                use.
                                            </p>
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
                                            The single place for all your product experiments
                                        </h2>
                                    </div>
                                    <div class="tabs-meet__items">
                                        <div class="tabs-meet__item">
                                            <div class="tabs-meet__img">
                                                <img src="img/svg/meet01.svg?_v=1641102802883" alt="">
                                            </div>
                                            <p>Run experiment by passing your internal user id.</p>
                                        </div>
                                        <div class="tabs-meet__item">
                                            <div class="tabs-meet__img">
                                                <img src="img/svg/meet02.svg?_v=1641102802883" alt="">
                                            </div>
                                            <p>ABRouter will define a branch based on branches percentage.</p>
                                        </div>
                                        <div class="tabs-meet__item">
                                            <div class="tabs-meet__img">
                                                <img src="img/svg/meet03.svg?_v=1641102802883" alt="">
                                            </div>
                                            <p>The system will remember the branch for further requests.</p>
                                        </div>
                                        <div class="tabs-meet__item">
                                            <div class="tabs-meet__img">
                                                <img src="img/svg/meet04.svg?_v=1641102802883" alt="">
                                            </div>
                                            <p>Curl and postman collection included</p>
                                        </div>
                                        <div class="tabs-meet__item tabs-meet__item_big">
                                            <div class="tabs-meet__img">
                                                <img src="img/svg/meet05.svg?_v=1641102802883" alt="">
                                            </div>
                                            <p>We will show you insights for every experiment based on data that you allow us to
                                                use.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="tabs-meet__right">
                                    <div class="tabs-meet__img">
                                        <picture><source srcset="/img/examples/postman-screen.png" type="image/webp"><img src="/img/examples/postman-screen.png" alt=""></picture>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="tabs-meet__bottom">
                        <a href="/en/signup" class="tabs meet__button">
                            <span>Explore ABRouter</span>
                            <svg class="tabs-meet__icon">
                                <use href="img/icons/icons.svg#arrow-button"></use>
                            </svg>
                        </a>
                        <nav data-tabs-titles class="tabs-meet__navigation">
                            <button type="submit" class="tabs-meet__title _tab-active">Management interface</button>
                            <button type="submit" class="tabs-meet__title">API Interface</button>
                        </nav>
                    </div>
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
                        Benefits from using ABRouter
                    </h2>
                </div>
                <div class="benefit__subtitle">
                    Customize your project using the ABRouter
                </div>
                <div class="benefit__items">
                    <div class="benefit__item item-benefit">
                        <div class="item-benefit__img">
                            <img src="img/svg/benefit01.svg?_v=1641102802883" alt="">
                        </div>
                        <div class="item-benefit__title">Automation</div>
                        <div class="item-benefit__text">
                            No one line code needs to create new experiments except request to run experiment.
                        </div>
                    </div>
                    <div class="benefit__item item-benefit">
                        <div class="item-benefit__img">
                            <img src="img/svg/benefit02.svg?_v=1641102802883" alt="">
                        </div>
                        <div class="item-benefit__title">One place</div>
                        <div class="item-benefit__text">
                            Manage all your experiments <br> anytime on any device.


                        </div>
                    </div>
                    <div class="benefit__item item-benefit">
                        <div class="item-benefit__img">
                            <img src="img/svg/benefit03.svg?_v=1641102802883" alt="">
                        </div>
                        <div class="item-benefit__title">Reporting</div>
                        <div class="item-benefit__text">
                            The system will create reports for every branch of your experiment to help you make the right
                            decision.


                        </div>
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
                                        ABRouter provides the system to run ab-tests/experiments on the back-end side of your product.
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
                                    <a href="/en/docs" class="tabs-what__button">
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
        <section class="price page_price">
            <div class="price__container" id="pricing">
                <div class="price__head head">
                    <div class="head__top">
                        Pricing
                    </div>
                    <h2 class="head__title">
                        Plans scale with your growth
                    </h2>
                </div>
                <div class="price__items">
                    <div class="price__item item-price">
                        <div class="item-price__top">
                            <div class="item-price__title">
                                Free
                            </div>
                            <div class="item-price__cost">
                                0 USD / month
                            </div>
                            <div class="item-price__block">
                                <div class="item-price__question">
                                    What you can do?
                                </div>
                                <ul class="item-price__list">
                                    <li>
                                        Up to 20 000 unique users id's in experiments
                                    </li>
                                    <li>Unlimited feature flags</li>
                                </ul>
                            </div>
                        </div>
                        <div class="item-price__bottom"> <a href="/en/signup" class="item-price__btn button button_grey">Start free
                                trial</a>
                        </div>
                    </div>
                    <div class="price__item item-price">
                        <div class="item-price__top">
                            <div class="item-price__title">
                                Team
                            </div>
                            <div class="item-price__cost">
                                20 USD / month
                            </div>
                            <div class="item-price__block">
                                <div class="item-price__question">
                                    What you can do?
                                </div>
                                <ul class="item-price__list">
                                    <li>
                                        All from the previous plan
                                    </li>
                                    <li>Up to 50 000 unique users id's in experiments</li>
                                </ul>
                            </div>
                        </div>
                        <div class="item-price__bottom"> <a href="/en/signup" class="item-price__btn button button_grey">Start free
                                trial</a>
                        </div>
                    </div>
                    <div class="price__item item-price">
                        <div class="item-price__top">
                            <div class="item-price__title">
                                Premium
                            </div>
                            <div class="item-price__cost">
                                119 USD / month
                            </div>
                            <div class="item-price__block">
                                <div class="item-price__question">
                                    What you can do?
                                </div>
                                <ul class="item-price__list">
                                    <li>
                                        All from the previous plan
                                    </li>
                                    <li>Up to 3M unique users id's in experiments</li>
                                    <li>Experiments health and alerting</li>
                                </ul>
                            </div>
                        </div>
                        <div class="item-price__bottom"> <a href="/en/signup" class="item-price__btn button button_grey">Start free
                                trial</a>
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
                <a href="/en/signup" class="start__button button">Start free trial</a>
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
