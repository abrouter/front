&lt;?php

use Abrouter\Client\Client;

class ExampleController
{
    public function __invoke(Client $client)
    {
        $isEnabledButton = $client->featureFlags()->run('{{ $requestId }}');

        return view('featureFlags', [
            'enabledButtonFeatureFlag' => $isEnabledButton,
        ]);
    }

}
