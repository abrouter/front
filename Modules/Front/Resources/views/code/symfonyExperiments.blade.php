&lt;?php

use Abrouter\Client\Client;

class ExampleController
{
    public function __invoke(Client $client)
    {
        $experimentId = '<?=request('id')?>';

        return new Response(json_encode([
            'button_color' => $client
                ->experiments()
                ->run(uniqid(), $experimentId)
        ]));
    }

}
