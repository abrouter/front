<?php
declare(strict_types=1);

namespace Modules\Front\Internal;

class Paywall
{
    public static function isEnabled(): bool
    {
        return env('IS_PAYWALL_ENABLED') === 'enabled';
    }
}
