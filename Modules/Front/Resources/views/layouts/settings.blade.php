<?php
use Modules\Front\Internal\User;
?>
@extends('front::layouts.master')

@section('header')
    <header class="header header-profile">
        <div class="header-profile__container-big">
            <a href="/" class="header-profile__logo">
                <picture><source srcset="/img/logo.svg" type="image/webp"><img src="/img/logo.svg" alt="Logo"></picture>
            </a>
            <button type="button" class="menu__icon icon-menu"><span></span></button>
            <div class="header-profile__menu">
                <div class="header-profile__token token-header">
                    <div class="token-header__body">
                        <span>Your Token </span>
                    </div>
                    <div class="token-header__bottom">
                        <div class="token-header__value">
                            <?=substr(User::getShortToken(), 0, 15)?>
                        </div>
                        <svg class="token-header__icon">
                            <use href="/img/icons/icons.svg#copy"></use>
                        </svg>
                    </div>
                </div>
                <!-- <div class="header-profile__actions">
                    <div class="header-profile__search search-header">
                        <a href="" class="search-header__button">
                            <svg class="search-header__icon">
                                <use href="/img/icons/icons.svg#search"></use>
                            </svg>
                        </a>
                    </div>
                    <div class="header-profile__message message-header message-header_active">
                        <a href="" class="message-header__button">
                            <svg class="message-header__icon">
                                <use href="/img/icons/icons.svg#message"></use>
                            </svg>
                        </a>
                    </div>
                </div> -->
                <div class="header-profile profile">
                    <a href="/en/board" class="profile__image-ibg">
                        {{--                        <picture><source srcset="/img/jpg/avatar.webp" type="image/webp"><img src="/img/jpg/avatar.jpg?_v=1641102802883" alt="Avatar"></picture>--}}
                    </a>
                    <div class="profile__body">
                        <button class="profile__name"><?=User::me()['data']['attributes']['username'];?></button>
                        <svg class="profile__icon">
                            <use href="/img/icons/icons.svg#arrow-menu"></use>
                        </svg>
                    </div>
                    <div class="profile__menu menu-profile">
                        {{--                        <div class="menu-profile__item">--}}
                        {{--                            <a href="" class="menu-profile__link">Edit profile</a>--}}
                        {{--                        </div>--}}
                        {{--                        <div class="menu-profile__item">--}}
                        {{--                            <a href="" class="menu-profile__link">Help</a>--}}
                        {{--                            <a href="" class="menu-profile__link">Settings</a>--}}
                        {{--                        </div>--}}
                        <div class="menu-profile__item">
                            <a href="/en/logout" class="menu-profile__link">Sign out</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
@endsection

@section('content')
    <main class="page page_setting">
        <div class="setting">
            <div class="setting__container">
                <div class="setting__body">
                    <div class="setting__left">
                        <div class="setting__menu menu-setting">
                            <ul class="menu-setting__items">
                                <li class="menu-setting__item">
                                    <a href="/en/board" class="menu-setting__link">
                                        <svg class="menu-setting__icon">
                                            <use href="/img/icons/icons.svg#menu01"></use>
                                        </svg>
                                        <span>Experiments</span>
                                    </a>
                                </li>
                                <li class="menu-setting__item">
                                    <a href="/en/user-page" class="menu-setting__link">
                                        <svg class="menu-setting__icon">
                                            <use href="/img/icons/icons.svg#user"></use>
                                        </svg>
                                        <span>User page</span>
                                    </a>
                                </li>
                                <li class="menu-setting__item">
                                    <a href="/en/stats" class="menu-setting__link">
                                        <svg class="menu-setting__icon">
                                            <use href="/img/icons/icons.svg#menu02"></use>
                                        </svg>
                                        <span>Statistics</span>
                                    </a>
                                </li>
                                <li class="menu-setting__item">
                                    <a href="/en/feature-toggle" class="menu-setting__link">
                                        <svg class="menu-setting__icon">
                                            <use href="/img/icons/icons.svg#menu03"></use>
                                        </svg>
                                        <span>Feature flags</span>
                                    </a>
                                </li>


                                <!-- <li class="menu-setting__item">
                                    <a href="" class="menu-setting__link">
                                        <svg class="menu-setting__icon">
                                            <use href="/img/icons/icons.svg#menu04"></use>
                                        </svg>
                                        <span>Help</span>
                                    </a>
                                </li> -->
                                <li class="menu-setting__item">
                                    <a href="https://docs.abrouter.com/docs/intro/" target="_blank" class="menu-setting__link">
                                        <svg class="menu-setting__icon">
                                            <use href="/img/icons/icons.svg#menu05"></use>
                                        </svg>
                                        <span>Docs</span>
                                    </a>
                                </li>


                                @if (\Modules\Front\Internal\Paywall::isEnabled())
                                <li class="menu-setting__item">
                                    <a href="/en/payment" class="menu-setting__link">
                                        <svg class="menu-setting__icon">
                                            <use href=""></use>
                                        </svg>
                                        <span>Billing</span>
                                    </a>
                                </li>
                                @endif

                            </ul>
                        </div>
                    </div>

                    @yield('settings')

                </div>
            </div>
        </div>
    </main>

@endsection