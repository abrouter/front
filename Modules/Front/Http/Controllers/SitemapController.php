<?php
declare(strict_types = 1);

namespace Modules\Front\Http\Controllers;

class SitemapController
{
    public function __invoke()
    {
        $domain = 'https://abrouter.com';
        
        return view('front::sitemap', [
            'links' => [
                [
                    'date' => '2021-04-01',
                    'url' => $domain . '/',
                ],
                [
                    'date' => '2021-04-01',
                    'url' => $domain . '/en/docs',
                ],
                [
                    'date' => '2021-04-01',
                    'url' => $domain . '/en/php-how-to-launch-ab-tests-in-5-minutes',
                ],
                [
                    'date' => '2021-04-01',
                    'url' => $domain . '/en/laravel-ab-tests',
                ],
                [
                    'date' => '2022-04-15',
                    'url' => $domain . '/en/symfony-ab-tests',
                ],
            ],
        ]);
    }
}
