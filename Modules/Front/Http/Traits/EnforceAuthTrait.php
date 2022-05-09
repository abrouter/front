<?php
declare(strict_types=1);

namespace Modules\Front\Http\Traits;

use Modules\Front\Internal\User;

trait EnforceAuthTrait
{
    public function enforceAuth(): void
    {
        $user = User::me();
        if (empty($user)) {
            header('location: /en/signin');
            exit;
        }
    }

    public function enforceNotAuth(): void
    {
        $user = User::me();
        if (!empty($user)) {
            header('location: /en/board');
        }
    }
}
