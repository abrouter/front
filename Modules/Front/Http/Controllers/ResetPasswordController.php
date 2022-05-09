<?php

namespace Modules\Front\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;
use Modules\Front\Http\Traits\EnforceAuthTrait;


class ResetPasswordController extends Controller
{
    use EnforceAuthTrait;

    public function reset(Request $request, $token)
    {
        $email = $request->only('email');
        $this->enforceNotAuth();
        return view('front::resetpassword/resetpassword', compact('token', 'email'));
    }
}
