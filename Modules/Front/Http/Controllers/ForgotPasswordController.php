<?php
declare(strict_types=1);

namespace Modules\Front\Http\Controllers;

use Modules\Front\Http\Traits\EnforceAuthTrait;

class ForgotPasswordController
{
    use EnforceAuthTrait;
    
    public function forgotPassword()
    {
        $this->enforceNotAuth();
        return view('front::forgotpassword/forgotPassword');
    }
}
