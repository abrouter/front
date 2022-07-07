<?php
use Modules\Front\Internal\User;
?>
<footer <?php if (!User::isAuthorized()):?>
        class="footer"
        <?php else: ?>
        class="footer footer_dark"
<?php endif; ?>
>
    <div class="footer__container">
        <div class="footer__top top-footer">
            <a href="#" class="top-footer__logo">
                <picture>
                    <source srcset="<?=User::isAuthorized() ? '/img/logo-white.svg' : '/img/logo.svg'?>"
                            type="image/webp">
                    <img src="<?=User::isAuthorized() ? '/img/logo-white.svg' : '/img/logo.svg'?>" alt="logo"></picture>
            </a>
            <div class="top-footer__menu">
                <?php if (env('MARKETING_ENABLED') === 'enabled'): ?>

                <div class="top-footer__column">
                    <div class="top-footer__title">
                        Product
                    </div>
                    <ul class="top-footer__list">

{{--                        <li class="top-footer__item">--}}
{{--                            <a href="/#owerview" class="top-footer__link">--}}
{{--                                Product tour--}}
{{--                            </a>--}}
{{--                        </li>--}}
                        <li class="top-footer__item">
                            <a href="https://docs.abrouter.com" target="_blank" class="top-footer__link">
                                Docs
                            </a>
                        </li>
                        <li class="top-footer__item">
                            <a href="/en/pricing" class="top-footer__link">
                                Pricing
                            </a>
                        </li>
                        <li class="top-footer__item">
                            <a href="https://github.com/abrouter/abrouter" target="_blank" class="top-footer__link">
                                GitHub
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
                <?php if (env('MARKETING_ENABLED') === 'enabled'): ?>
                <div class="ask">
                    <button class="ask_button button">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.29101 20.824L2.00001 22L3.17601 16.709C2.40154 15.2604 1.99754 13.6426 2.00001 12C2.00001 6.477 6.47701 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C10.3574 22.0025 8.73963 21.5985 7.29101 20.824ZM7.58101 18.711L8.23401 19.061C9.39256 19.6801 10.6864 20.0027 12 20C13.5823 20 15.129 19.5308 16.4446 18.6518C17.7602 17.7727 18.7855 16.5233 19.391 15.0615C19.9965 13.5997 20.155 11.9911 19.8463 10.4393C19.5376 8.88743 18.7757 7.46197 17.6569 6.34315C16.538 5.22433 15.1126 4.4624 13.5607 4.15372C12.0089 3.84504 10.4004 4.00346 8.93854 4.60896C7.47674 5.21447 6.22731 6.23984 5.34825 7.55544C4.4692 8.87103 4.00001 10.4177 4.00001 12C4.00001 13.334 4.32501 14.618 4.94001 15.766L5.28901 16.419L4.63401 19.366L7.58101 18.711ZM7.00001 12H9.00001C9.00001 12.7956 9.31608 13.5587 9.87869 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7957 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12H17C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40216 16.4732 8.46448 15.5355C7.5268 14.5979 7.00001 13.3261 7.00001 12Z"
                                  fill="white"/>
                        </svg>
                        <svg class="_close" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.0007 10.5857L16.9507 5.63574L18.3647 7.04974L13.4147 11.9997L18.3647 16.9497L16.9507 18.3637L12.0007 13.4137L7.05072 18.3637L5.63672 16.9497L10.5867 11.9997L5.63672 7.04974L7.05072 5.63574L12.0007 10.5857Z"
                                  fill="white"/>
                        </svg>
                        Ask us
                    </button>
                    <form id="askForm" class="ask_form">
                        <div class="ask_form_title">Let us help you. Ask a question or if you need a help
                        </div>
                        <div class="ask_form_wrapper">
                            <div class="ask_form_label">Name</div>
                            <input type="text" class="input" name="name" id="name" placeholder="Enter your name"
                                   required>
                        </div>
                        <div class="ask_form_wrapper">
                            <div class="ask_form_label">Email Address</div>
                            <input type="email" class="input" name="email" id="email" placeholder="example@gmail.com"
                                   required>
                        </div>
                        <div class="ask_form_wrapper">
                            <div class="ask_form_label">Message</div>
                            <textarea class="input" name="message" id="message"
                                      placeholder="Please, leave a message" required></textarea>
                        </div>
                        <button type="submit" name="submit" class="ask_form_button button">
                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.61974 8.26213C1.18474 8.11713 1.18057 7.88296 1.62807 7.73379L17.5339 2.43213C17.9747 2.28546 18.2272 2.53213 18.1039 2.96379L13.5589 18.8688C13.4339 19.3096 13.1797 19.3246 12.9931 18.9063L9.99808 12.1663L14.9981 5.49963L8.33141 10.4996L1.61974 8.26213Z"
                                      fill="white"/>
                            </svg>
                            Send
                        </button>
                    </form>
                    <div class="ask_thank">
                        <div class="ask_thank_icon">
                            <svg width="75" height="75" viewBox="0 0 75 75" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle cx="37.5" cy="37.5" r="37.5" fill="#D0ECDC"/>
                                <path d="M36.0017 41.1721L45.1937 31.9791L46.6087 33.3931L36.0017 44.0001L29.6377 37.6361L31.0517 36.2221L36.0017 41.1721Z"
                                      fill="#32AD67"/>
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
