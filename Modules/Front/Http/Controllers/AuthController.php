<?php

namespace Modules\Front\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\URL;

class AuthController
{
    public function redirect(Request $request)
    {
        $token = $request->get('token');
        $to = $request->get('to');

        request()->server->set('HTTPS', true);
        URL::forceScheme('https');

        return response()->redirectTo($to)->withCookie(cookie('token', $token))->send();
    }

    public function logout(Request $request)
    {
        return response()->redirectTo('/')->withCookie(cookie('token', ''))->send();
    }


    public function cookie(Request $request)
    {
//        die(var_dump($request->cookie('token')));
    }
}
