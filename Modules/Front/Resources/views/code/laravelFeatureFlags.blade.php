&lt;?php

use Abrouter\Client\Client;

class ExampleController
{
    public function __invoke(Client $client)
    {
        $isEnabledButton = $client->featureFlags()->run('<?=request('id')?>');

        return view('featureFlags', [
            'enabledButtonFeatureFlag' => $isEnabledButton,
        ]);
    }

}