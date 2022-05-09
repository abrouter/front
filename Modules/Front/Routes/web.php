<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Routing\Router;
use Modules\Front\Http\Controllers\LandingsController;

$group = [
    'middleware' => [
        'web',
    ],
];

Route::group($group, function (Router $router) {
    $router->get('/', 'FrontController@index');

    $router->get('/no-fs-enable', 'FrontController@FSIgnore');
    $router->get('/no-fs-status', 'FrontController@FSStatus');

    $router->get('/en/redirect', 'AuthController@redirect');
    $router->get('/en/logout', 'AuthController@logout');

    $router->get('/cookie', 'AuthController@cookie');


    $router->get('/en/signin', 'UserController@signin');
    $router->get('/en/signup', 'UserController@signup');
    $router->get('/en/forgotpassword', 'ForgotPasswordController@forgotPassword');
    $router->get('/en/resetpassword/{hash}', 'ResetPasswordController@reset');
    $router->get('/en/board', 'DashboardController@dashboard');
    $router->get('/en/feature-toggle', 'DashboardController@featureToggle');
    $router->get('/en/docs', 'DashboardController@docs');
    $router->get('/en/stats', 'DashboardController@stats');
    $router->get('/en/stats/customization-event', 'CustomizationEventController@index');
    $router->get('/en/board/experiment-stats', 'DashboardController@experimentStats');
    
    $router->get('/en/php-how-to-launch-ab-tests-in-5-minutes', 'LandingsController@abTestsPhp');

    $router->get('/en/php-managed-feature-toggle', 'LandingsController@featureFlagPhp');
    $router->get('/en/laravel-managed-feature-toggle', 'LandingsController@featureFlagLaravel');
    $router->get('/en/laravel-how-to-easily-run-ab-tests', 'LandingsController@abTestsLaravelRedirect');


    $router->get('/en/test-laravel-feature-flags', 'LandingsController@testLaravelFeatureFlags');

    $router->get('/en/laravel-ab-tests', 'LandingsController@abTestsLaravel');
    $router->get('/en/symfony-ab-tests', 'LandingsController@abTestsSymfony');

    $router->get('/sitemap.xml', 'SitemapController');

    $router->get('/en/privacy-policy', 'LandingsController@privacyPolicy');
    $router->get('/en/terms-service', 'LandingsController@termsService');

});
