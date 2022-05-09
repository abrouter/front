<?php
declare(strict_types=1);

namespace Modules\Front\Assets;

class Puller
{
    public static function injectBuild(string $bundle)
    {
        $config = json_decode(file_get_contents('/app/front-config/global.json'), true);
        $jss = $config[$bundle];
        return join('', array_reduce($jss, function (array $acc, $file) use ($bundle) {
            $acc[] = '<script src="/js/'.$bundle.'/'.$file.'"></script>';
            return $acc;
        }, []));
    }
}
