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
<div class="wrapper @yield('wrapper_class')">

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
                                    <a href="/#owerview" class="top-footer__link">Product overview</a>
                                </li>
                                <li class="top-footer__item">
                                    <a href="/#why_us" class="top-footer__link">Why us</a>
                                </li>
                                <li class="top-footer__item">
                                    <a href="/#pricing" class="top-footer__link">Pricing</a>
                                </li>
                                <li class="top-footer__item">
                                    <a href="https://docs.abrouter.com/docs/intro/" target="_blank" class="top-footer__link">Docs</a>
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
<script src="/js/app.min.js?_v=20220211141804"></script>

<!--require toastr-->
<script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>
@yield('js')
</body>