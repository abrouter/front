<?php

namespace Modules\Front\Http\Traits;

trait SslForwarderTrait
{
    public function enforceSSL(): void
    {
        $proto = request()->server('HTTP_X_FORWARDED_PROTO');
        if ($proto !== 'https') {
            header('location: https://' . request()->server('HTTP_X_FORWARDED_HOST'));
        }
    }
}
