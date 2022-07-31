<?php
use Modules\Front\Internal\User;
?>
@extends('front::layouts.master')

@section('content')
    <main class="page page_home">
        @if (env('MARKETING_ENABLED') === 'disabled')
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

