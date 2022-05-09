<?php
declare(strict_types=1);

namespace Modules\Front\Internal;

use Illuminate\Support\Facades\Redis;

class UserCache
{
    /**
     * @var UserCache
     */
    private static $instance = null;

    private static $data = [];

    private function __construct()
    {
    }

    public static function instance()
    {
        if (empty(self::$instance)) {
            self::$instance = new UserCache();
        }

        return self::$instance;
    }

    public function set(string $key, array $value): void
    {
        self::$data[$key] = $value;
        $this->redis()->set(
            self::buildKey($key),
            json_encode($value)
        );
    }

    public function get(string $key): ?array
    {
        if (isset(self::$data[$key])) {
            return self::$data[$key];
        }

        if (!$this->redis()->exists(self::buildKey($key))) {
            return null;
        }

        $data = $this->redis()->get(
            self::buildKey($key)
        );

        return json_decode($data, true);
    }

    private function buildKey(string $key): string
    {
        return 'user-client-cache-' . $key;
    }

    private function redis()
    {
        return Redis::connection()->client();
    }
}
