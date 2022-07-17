<?php
declare(strict_types=1);

namespace Modules\Front\Assets;

class FrontConfig
{
    public static function apiHost(): string
    {
        $host = (string) config('app.api_host');
        $proto = request()->server('HTTP_X_FORWARDED_PROTO');
        $host = $proto === 'https' ? strtr($host, [
            'http://' => 'https://',
        ]) : $host;
        
        return $host;
    }
}
