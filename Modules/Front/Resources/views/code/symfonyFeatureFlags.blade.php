&lt;?php

use Abrouter\Client\Client;

class ExampleController
{
    public function __invoke(Client $client)
    {
        $featureFlagId = '{{ $requestId }}';

        return new Response(json_encode([
            'enabled_button_feature_flag' => $client
                ->featureFlags()
                ->run($featureFlagId)
        ]));
    }

}
