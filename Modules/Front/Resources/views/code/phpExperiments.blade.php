<?php
use Modules\Front\Internal\User;
?>
&lt;?php

use Abrouter\Client\Config\Config;
use DI\ContainerBuilder;
use Abrouter\Client\Client;

require '/app/vendor/autoload.php';

$containerBuilder = new ContainerBuilder();
$di = $containerBuilder->build();

$token = '<?=User::getShortToken()?>';

$di->set(Config::class, new Config($token, 'https://abrouter.com'));
/** @var Client $client */
$client = $di->make(Abrouter\Client\Client::class);
$userSignature = uniqid();
$experimentId = '{{ $requestId }}';

$runExperimentResult = $client->experiments()->run($userSignature, $experimentId);
$experimentId = $runExperimentResult->getExperimentId();
$branchId = $runExperimentResult->getBranchId();

echo '<button style="color: '. $branchId .'">Hello</button>';
