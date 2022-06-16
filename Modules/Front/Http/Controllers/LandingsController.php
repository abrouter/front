<?php
declare(strict_types = 1);

namespace Modules\Front\Http\Controllers;

class LandingsController
{
    public function abTestsPhp()
    {
        return view('front::landings/abTestsPhp', [
            'title' => 'ABRouter - launch a/b test on PHP',
            'metaDescription' => 'We are providing clear web interface to manage experiments and powerful API to run. Easy to implement with clean PHP or any framework. Let\'s look on the example with button color. ABRouter is available for free.',
        ]);
    }
    
    public function featureFlagPhp()
    {
        return view('front::landings/featureFlagPhp');
    }
    
    public function abTestsLaravel()
    {
        return view('front::landings/abTestsLaravel', [
            'title' => 'ABRouter: Implementing a/b test with Laravel guide',
            'metaDescription' => 'Completely guide for running A/B tests with Laravel framework via ABRouter. Start running A/B tests with easy to use composer package.',
            'keywords' => 'Run A/B tests laravel, implement A/B tests laravel, laravel ab tests, ab tests laravel, Implement split tests laravel, split tests laravel'
        ]);
    }

    public function abTestsSymfony()
    {
        return view('front::landings/abTestsSymfony', [
            'title' => 'ABRouter: Implementing a/b test with Symfony guide',
            'metaDescription' => 'Completely guide for running A/B tests with Symfony framework via ABRouter. Start running A/B tests with easy to use composer package.',
            'keywords' => 'Run A/B tests symfony, implement A/B tests symfony, symfony ab tests, ab tests symfony, Implement split tests symfony, split tests symfony'
        ]);
    }

    public function abTestsLaravelRedirect()
    {
        return response()->redirectTo('/en/laravel-ab-tests', 301)->send();
    }
    
    public function featureFlagLaravel()
    {
        return view('front::landings/featureFlagLaravel');
    }

    public function privacyPolicy()
    {
        return view('front::other/privacyPolicy');
    }

    public function termsService()
    {
        return view('front::other/termsService');
    }

    public function testLaravelFeatureFlags()
    {
        return view('front::landings/testFeatureFlagsLaravel');
    }

    public function laravelFeatureFlags()
    {
        return view('front::landings/featureFlagsLaravel');
    }
}
