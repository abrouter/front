<?php

namespace Modules\Front\Http\Controllers;

use Modules\Front\Http\Traits\EnforceAuthTrait;

class DashboardController
{
    use EnforceAuthTrait;

    public function dashboard()
    {
        $this->enforceAuth();
        return view('front::dashboard/dashboard');
    }

    public function featureToggle()
    {
        $this->enforceAuth();
        return view('front::dashboard/feature-toggle');
    }

    public function docs()
    {
        return view('front::dashboard/docs');
    }

    public function stats()
    {
        $this->enforceAuth();
        return view('front::dashboard/stats');
    }

    public function experimentStats()
    {
        $this->enforceAuth();
        return view('front::dashboard/experiment-stats');
    }

    public function runExperiment()
    {
        $this->enforceAuth();
        return view('front::dashboard/run-experiment');
    }

    public function runFeatureFlag()
    {
        $this->enforceAuth();
        return view('front::dashboard/run-feature-flag');
    }
}
