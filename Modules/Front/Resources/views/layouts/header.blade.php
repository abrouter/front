<?php
use Modules\Front\Internal\User;
?>

    <header <?php if (!User::isAuthorized()): ?>
            class="header"
            <?php else: ?>
            class="header header_white"
            <?php endif; ?>
    >
    <div class="header__container">
        <div class="header__body">
            <?php if (!User::isAuthorized()): ?>
                <a href="/" class="header__logo">
                    <picture>
                        <source srcset="/img/logo-white.svg" type="image/webp">
                        <img src="/img/logo.svg" alt="Logo">
                    </picture>
                </a>
            <?php else: ?>
                <a href="/" class="header__logo">
                    <img src="/img/logo.svg?" alt="Logo">
                </a>
            <?php endif; ?>
            <button type="button" class="menu__icon icon-menu"><span></span></button>
            <div class="header__menu menu">
                <nav class="menu__body">
                    <?php if (env('MARKETING_ENABLED') === 'enabled'): ?>
                    <ul class="menu__list">

                        <li class="menu__item">
                            <a href="/#owerview" class="menu__link active">
                                Product tour
                            </a>
                        </li>
                        <li class="menu__item">
                            <a href="/#why_us" class="menu__link">
                                Why us
                            </a>
                        </li>
                        <li class="menu__item">
                            <a href="/en/pricing" class="menu__link">
                                Pricing
                            </a>
                        </li>
                        <li class="menu__item">
                            <a href="https://github.com/abrouter/abrouter" target="_blank" class="menu__link">
                                Deploy now
                            </a>
                        </li>


                    </ul>
                    <?php endif;?>
                </nav>
            </div>
        </div>
        <div data-da=".menu,768,2" class="header__buttons">
            <?php if (!User::isAuthorized()): ?>
                <a href="/en/signin" class="header__signin">Sign in</a>
                <a href="/en/signup" class="button header__signup">Sign up</a>
            <?php else: ?>
                <a href="/en/board" class="header__btn button button_border">
                    <svg class="header__btn-icon">
                        <use href="/img/icons/icons.svg#user01"></use>
                    </svg>
                    My board
                </a>
            <?php endif; ?>
        </div>
    </div>
</header>
