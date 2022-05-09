<?php
declare(strict_types=1);

namespace Modules\Front\Internal;

use GuzzleHttp\Client;

class User
{
    public static function client(): Client
    {
        return new Client();
    }

    public static function host(): string
    {
        return env('API_INTERNAL_HOST');
    }

    public static function me()
    {
        $token = request()->cookie('token');
        if (empty($token)) {
            return [];
        }

        $cacheKey = 'users-me-token-' . $token;
        if ($cache = UserCache::instance()->get($cacheKey)) {
            return $cache;
        }

        try {
            $request = self::client()->request(
                'GET',
                self::host() . '/api/v1/users/me',
                self::buildOptions()
            );
        } catch (\Throwable $e) {
            return [];
        }

        $value = json_decode($request->getBody()->getContents(), true);
        UserCache::instance()->set($cacheKey, $value);
        return $value;
    }

    public static function getShortToken(): string
    {
        $token = request()->cookie('token');

        if (empty($token)) {
            return '';
        }

        return self::me()['meta']['short_token'];
    }

    public static function isAuthorized(): bool
    {
        return !empty(self::me());
    }

    private static function buildOptions(): array
    {
        return [
            'headers' => self::buildHeaders()
        ];
    }

    private static function buildHeaders(): array
    {
        return [
            'Authorization' => 'Bearer ' . request()->cookie('token'),
            'Content-Type' =>'application/json',
            'Accept' => 'application/json, application/vnd.api+json',
        ];
    }
}
