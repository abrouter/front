<?php
use Modules\Front\Internal\User;
?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="utf-8" />
    <title><?=$title ?? 'ABRouter - AB-tests on backend service'?></title>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <script>
        window['_fs_debug'] = false;
        window['_fs_host'] = 'fullstory.com';
        window['_fs_script'] = 'edge.fullstory.com/s/fs.js';
        window['_fs_org'] = '168KTQ';
        window['_fs_namespace'] = 'FS';
        (function(m,n,e,t,l,o,g,y){
            if (e in m) {if(m.console && m.console.log) { m.console.log('FullStory namespace conflict. Please set window["_fs_namespace"].');} return;}
            g=m[e]=function(a,b,s){g.q?g.q.push([a,b,s]):g._api(a,b,s);};g.q=[];
            o=n.createElement(t);o.async=1;o.crossOrigin='anonymous';o.src='https://'+_fs_script;
            y=n.getElementsByTagName(t)[0];y.parentNode.insertBefore(o,y);
            g.identify=function(i,v,s){g(l,{uid:i},s);if(v)g(l,v,s)};g.setUserVars=function(v,s){g(l,v,s)};g.event=function(i,v,s){g('event',{n:i,p:v},s)};
            g.anonymize=function(){g.identify(!!0)};
            g.shutdown=function(){g("rec",!1)};g.restart=function(){g("rec",!0)};
            g.log = function(a,b){g("log",[a,b])};
            g.consent=function(a){g("consent",!arguments.length||a)};
            g.identifyAccount=function(i,v){o='account';v=v||{};v.acctId=i;g(o,v)};
            g.clearUserCookie=function(){};
            g.setVars=function(n, p){g('setVars',[n,p]);};
            g._w={};y='XMLHttpRequest';g._w[y]=m[y];y='fetch';g._w[y]=m[y];
            if(m[y])m[y]=function(){return g._w[y].apply(this,arguments)};
            g._v="1.3.0";
        })(window,document,window['_fs_namespace'],'script','user');
    </script>
    <script src="https://accounts.google.com/gsi/client" async defer></script>
    <script>
        google_client_id = "<?php echo env('GOOGLE_CLIENT_ID'); ?>"
    </script>
    <script src="/assets/jquery/jquery.min.js"></script>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/momentjs/latest/moment.min.js"></script>

    <link rel="stylesheet" href="/css/style.min.css">
    <link rel="stylesheet" href="/css/ask.css">
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css?_v=20220211141804" />
    <link href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css" rel="stylesheet"/>

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-M750FJFSKP"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-M750FJFSKP');
    </script>

    <link rel="apple-touch-icon" sizes="76x76" href="/fav/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/fav/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/fav/favicon-16x16.png">
    <link rel="manifest" href="/fav/site.webmanifest">
    <link rel="mask-icon" href="/fav/safari-pinned-tab.svg" color="#fff">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="theme-color" content="#ffffff">

    <meta property="og:title" content="<?= $title ?? 'ABRouter'?>"/>
    <meta property="og:url" content="https://abrouter.com"/>
    <meta property="og:type" content="website"/>
    <meta property="og:image" content="https://abrouter.com/img/logo2.svg"/>
    <meta property="og:description" content="<?= $metaDescription ?? 'ABRouter is the platform to perform ab-tests on the back-end side.'?>"/>
    <meta name="description" content="<?= $metaDescription ?? 'ABRouter is the platform to perform ab-tests on the back-end side.'?>"/>
    <?php if (!empty($keywords)):?>
    <meta name="keywords" content="<?=$keywords?>" />
    <?php endif;?>
</head>
<body>
    <div class="wrapper">

        @hasSection('header')
            @yield('header')
        @else
            @include('front::layouts.header')
        @endif

        @yield('content')

    <footer <?php if (!User::isAuthorized()):?>
                class="footer"
            <?php else: ?>
                class="footer footer_dark"
            <?php endif; ?>
    >
        <div class="footer__container">
            <div class="footer__top top-footer">
                <a href="#" class="top-footer__logo">
                    <picture><source srcset="<?=User::isAuthorized() ? '/img/logo-white.svg' : '/img/logo.svg'?>" type="image/webp"><img src="<?=User::isAuthorized() ? '/img/logo-white.svg' : '/img/logo.svg'?>" alt="logo"></picture>
                </a>
                <div class="top-footer__menu">
                    <?php if (env('MARKETING_ENABLED') === 'enabled'): ?>

                    <div class="top-footer__column">
                        <div class="top-footer__title">
                            Product
                        </div>
                            <ul class="top-footer__list">

                                <li class="top-footer__item">
                                    <a href="/#owerview" class="top-footer__link">
                                        Product tour
                                    </a>
                                </li>
                                <li class="top-footer__item">
                                    <a href="/#why_us" class="top-footer__link">
                                        Why us
                                    </a>
                                </li>
                                <li class="top-footer__item">
                                    <a href="/#pricing" class="top-footer__link">
                                        Cloud Pricing
                                    </a>
                                </li>
                                <li class="top-footer__item">
                                    <a href="https://github.com/abrouter/abrouter" target="_blank" class="top-footer__link">
                                        Deploy now
                                    </a>
                                </li>


                            </ul>
                        </div>
                     <?php endif; ?>
                        <?php if (env('MARKETING_ENABLED') === 'enabled'): ?>
                            <div class="top-footer__column">
                                <div class="top-footer__title">
                                    Guides
                                </div>
                                <ul class="top-footer__list">
                                    <li class="top-footer__item">
                                        <a href="/en/laravel-ab-tests" class="top-footer__link">
                                            Implement A/B tests with Laravel
                                        </a>
                                    </li>
                                    <li class="top-footer__item">
                                        <a href="/en/symfony-ab-tests" class="top-footer__link">
                                            Implement A/B tests with Symfony
                                        </a>
                                    </li>
                                    <li class="top-footer__item">
                                        <a href="/en/php-how-to-launch-ab-tests-in-5-minutes" class="top-footer__link">
                                            Implement A/B tests with PHP
                                        </a>
                                    </li>
                                    <li class="top-footer__item">
                                        <a href="/en/laravel-feature-flags" class="top-footer__link">
                                            Implement feature flags with Laravel
                                        </a>
                                    </li>
                                </ul>
                            </div>
                    <?php endif; ?>
                    <div class="top-footer__column">
                        <div class="top-footer__title">
                            Community
                        </div>
                        <ul class="top-footer__list">

                            <li class="top-footer__item">
                                <a href="https://twitter.com/abrouter" target="_blank" class="top-footer__link">
                                    Twitter
                                </a>
                            </li>

                            <li class="top-footer__item">
                                <a href="https://discord.gg/8hYgMAjAFw" target="_blank" class="top-footer__link">
                                    Discord
                                </a>
                            </li>


                            <li class="top-footer__item">
                                <a href="https://github.com/abrouter/abrouter" target="_blank" class="top-footer__link">
                                    GitHub
                                </a>
                            </li>


                            <li class="top-footer__item">
                                <a href="mailto:abrouter@prixedmail.com" class="top-footer__link">
                                    abrouter@prixedmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                        <?php if (env('MARKETING_ENABLED') !== 'enabled'): ?>
                        <div class="ask">
                            <button class="ask_button button">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.29101 20.824L2.00001 22L3.17601 16.709C2.40154 15.2604 1.99754 13.6426 2.00001 12C2.00001 6.477 6.47701 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C10.3574 22.0025 8.73963 21.5985 7.29101 20.824ZM7.58101 18.711L8.23401 19.061C9.39256 19.6801 10.6864 20.0027 12 20C13.5823 20 15.129 19.5308 16.4446 18.6518C17.7602 17.7727 18.7855 16.5233 19.391 15.0615C19.9965 13.5997 20.155 11.9911 19.8463 10.4393C19.5376 8.88743 18.7757 7.46197 17.6569 6.34315C16.538 5.22433 15.1126 4.4624 13.5607 4.15372C12.0089 3.84504 10.4004 4.00346 8.93854 4.60896C7.47674 5.21447 6.22731 6.23984 5.34825 7.55544C4.4692 8.87103 4.00001 10.4177 4.00001 12C4.00001 13.334 4.32501 14.618 4.94001 15.766L5.28901 16.419L4.63401 19.366L7.58101 18.711ZM7.00001 12H9.00001C9.00001 12.7956 9.31608 13.5587 9.87869 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7957 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12H17C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40216 16.4732 8.46448 15.5355C7.5268 14.5979 7.00001 13.3261 7.00001 12Z" fill="white"/>
                                </svg>
                                <svg class="_close" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.0007 10.5857L16.9507 5.63574L18.3647 7.04974L13.4147 11.9997L18.3647 16.9497L16.9507 18.3637L12.0007 13.4137L7.05072 18.3637L5.63672 16.9497L10.5867 11.9997L5.63672 7.04974L7.05072 5.63574L12.0007 10.5857Z" fill="white"/>
                                </svg>
                                Ask us
                            </button>
                            <form id="askForm" class="ask_form">
                                <div class="ask_form_title">Let us help you. Explain your problem and we will contact you to solve it.</div>
                                <div class="ask_form_wrapper">
                                    <div class="ask_form_label">Name</div>
                                    <input type="text" class="input" name="name" id="name"  placeholder="Enter your name" required>
                                </div>
                                <div class="ask_form_wrapper">
                                    <div class="ask_form_label">Email Adress</div>
                                    <input type="email" class="input" name="email" id="email" placeholder="example@gmail.com" required>
                                </div>
                                <div class="ask_form_wrapper">
                                    <div class="ask_form_label">Message</div>
                                    <textarea class="input" name="message" id="message" placeholder="Please, explain your problem" required></textarea>
                                </div>
                                    <button type="submit" name="submit" class="ask_form_button button">
                                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.61974 8.26213C1.18474 8.11713 1.18057 7.88296 1.62807 7.73379L17.5339 2.43213C17.9747 2.28546 18.2272 2.53213 18.1039 2.96379L13.5589 18.8688C13.4339 19.3096 13.1797 19.3246 12.9931 18.9063L9.99808 12.1663L14.9981 5.49963L8.33141 10.4996L1.61974 8.26213Z" fill="white"/>
                                        </svg>
                                        Send
                                    </button>
                            </form>
                            <div class="ask_thank">
                                <div class="ask_thank_icon">
                                    <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="37.5" cy="37.5" r="37.5" fill="#D0ECDC"/>
                                        <path d="M36.0017 41.1721L45.1937 31.9791L46.6087 33.3931L36.0017 44.0001L29.6377 37.6361L31.0517 36.2221L36.0017 41.1721Z" fill="#32AD67"/>
                                    </svg>
                                </div>
                                <div class="ask_thank_title">Thank you! We’ll contact you soon</div>
                                <div class="ask_thank_text">Our managers will contact you via email to solve the problem</div>
                            </div>
                        </div>
                        <?php endif; ?>
                </div>
            </div>
            <div class="footer__bottom bottom-footer">
                <div class="bottom-footer__copy">
                    © ABROUTER 2022. All rights reserved.
                </div>
                <ul class="bottom-footer__list">
                    <li class="bottom-footer__item">
                        <a href="/en/privacy-policy" class="bottom-footer__link">Privacy Policy</a>
                    </li>
                    <li class="bottom-footer__item">
                        <a href="/en/terms-service" class="bottom-footer__link">Terms & Conditions</a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
</div>
    <?php if (User::isAuthorized()):
    ?>
        <script>
            window.shortToken = '<?=User::getShortToken()?>'
        </script>
    <?php endif; ?>
<!-- require daterangepicker -->
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.min.js"></script>

<!-- build:js js/main.js -->
<script src="/js/JavaScript.js"></script>
<script src="/js/Ask.js"></script>
<script src="/js/app.min.js?_v=20220211141804"></script>

<!--require toastr-->
<script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>
</body>