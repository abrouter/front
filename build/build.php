<?php

$assets = [];
$bundles = [
    'signup',
    'experiments',
];

foreach ($bundles as $bundle) {
    $config = json_decode(file_get_contents("/app/react/{$bundle}/build/asset-manifest.json"), true);
    unset($config['entrypoints'][0]);
    foreach ($config['entrypoints'] as $file) {
        file_put_contents(
            "/app/public/js/{$bundle}/" . basename($file),
            file_get_contents("/app/react/{$bundle}/build/" . $file)
        );
        $assets[$bundle][] = basename($file);
    }
}

file_put_contents('/app/front-config/global.json', json_encode($assets));
echo "Success Build\n";
