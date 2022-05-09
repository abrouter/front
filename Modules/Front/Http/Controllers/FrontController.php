<?php

namespace Modules\Front\Http\Controllers;

use Illuminate\Http\Response;
use Illuminate\Routing\Controller;
use Modules\Front\Http\Traits\EnforceAuthTrait;
use Modules\Front\Http\Traits\SslForwarderTrait;

class FrontController extends Controller
{
    use SslForwarderTrait;
    use EnforceAuthTrait;


    /**
     * Display a listing of the resource.
     * @return Response
     */
    public function index()
    {
        $this->enforceSSL();

        return view('front::index');
    }

    public function FSIgnore()
    {
        \request()->session()->put('no-fs', true);
        return response()->json([
            'status' => true,
        ]);
    }

    public function FSStatus()
    {
        return response()->json([
            'status' => \request()->session()->get('no-fs'),
        ]);
    }
}
