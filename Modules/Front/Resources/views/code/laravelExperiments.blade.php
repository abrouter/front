&lt;?php

use Abrouter\Client\Client;

class ExampleController
{
    public function __invoke(Client $client)
    {
        $buttonColor = $client->experiments()->run(uniqid(), '{{ $requestId }}');

        return view('button', [
            'color' => $buttonColor->getBranchId(),
        ]);
    }

}
