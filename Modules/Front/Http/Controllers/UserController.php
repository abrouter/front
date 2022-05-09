<?php
declare(strict_types=1);

namespace Modules\Front\Http\Controllers;

use Modules\Front\Http\Traits\EnforceAuthTrait;

class UserController
{
    use EnforceAuthTrait;

    public function signup()
    {
        $this->enforceNotAuth();
        return view('front::user/signup');
    }

    public function signin()
    {
        $this->enforceNotAuth();
        return view('front::user/signin');
    }
}
