<?php

namespace Modules\Front\Http\Controllers;

use Illuminate\Http\Request;
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
        return response()->redirectTo('https://docs.abrouter.com')->send();
    }

    public function stats(Request $request)
    {
        if ($request->hasValidSignature()){
            return view('front::dashboard/stats');
        }

        $this->enforceAuth();
        return view('front::dashboard/stats');
    }

    public function experimentStats()
    {
        $this->enforceAuth();
        return view('front::dashboard/experiment-stats');
    }

    public function userPage()
    {
        $this->enforceAuth();
        return view('front::dashboard/userPage');
    }

    public function runExperiment(Request $request)
    {
        $this->enforceAuth();
        return view('front::dashboard/run-experiment', [
            'requestId' => $request->query->get('id')
        ]);
    }

    public function runFeatureFlag(Request $request)
    {
        $this->enforceAuth();
        return view('front::dashboard/run-feature-flag',[
            'requestId' => $request->query->get('id')
        ]);
    }
}
