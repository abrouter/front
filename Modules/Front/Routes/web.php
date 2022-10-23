<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Routing\Router;

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
    $router->get('/en/feature-toggle/run-feature-flag', 'DashboardController@runFeatureFlag');
    $router->get('/en/docs', 'DashboardController@docs');
    $router->get('/en/stats', 'DashboardController@stats')->name('stats');
    $router->get('/en/stats/customization-event', 'CustomizationEventController@index');
    $router->get('/en/board/experiment-stats', 'DashboardController@experimentStats')
        ->name('experiment-stats');
    $router->get('/en/board/run-experiment', 'DashboardController@runExperiment');
    $router->get('/en/user-page', 'DashboardController@userPage');

    $router->get('/en/php-managed-feature-toggle', 'LandingsController@featureFlagPhp');
    $router->get('/en/laravel-managed-feature-toggle', 'LandingsController@featureFlagLaravel');
    $router->get('/en/laravel-how-to-easily-run-ab-tests', 'LandingsController@abTestsLaravelRedirect');


    $router->get('/en/test-laravel-feature-flags', 'LandingsController@testLaravelFeatureFlags');

    $router->get('/en/privacy-policy', 'LandingsController@privacyPolicy');
    $router->get('/en/terms-service', 'LandingsController@termsService');

});
