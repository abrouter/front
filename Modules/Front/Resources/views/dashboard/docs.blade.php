@extends('front::layouts.master')

@section('content')
    <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossorigin="anonymous"
    >
    <section class="faq">
        <div class="container" style="background: white; padding: 15px;">

            <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h1 class="display-4">Docs</h1>
            </div>

            <div class="container">



                <h4 class="display-4">Get started</h4>

    <p class="lead">
        Welcome to ABRouter docs. It's a tool for AB-testing your application on the back-end side.
<br/>
        Running experiments is performs through simple HTTPS-request to ABRouter server.
    </p>

                <h4 class="display-4">Preparing</h4>

                <p class="lead">
                    Before making a request you need to prepare the following:
            </p>
                <ol style="margin-left: 30px;">
                    <li><b>User id</b>. It's your internal id or even session id. If your user is not signed up you can generate it on demand. </li>
                    <li>  <b>Experiment id</b>. You can get in at your <a href="/en/board" target="_blank">dashboard</a>.</li>
                    <li> <b>Authorization token</b>. You're can also get it in your personal dashboard. Token will protect your app from unauthorized access.</li>
                </ol>

                <p class="lead">Also you can find request template in <a href="/en/board" target="_blank">your personal dashboard</a>.
                    Choose experiment, then click "Edit", scroll down and copy "Try link"</p>



                <h4 class="display-4">Request Example</h4>
                <p class="lead">
                    So, after preparing we're ready to make a request. Requesting to run experiment for user is pretty simple. Let's make it:
<br/>

                <pre>POST https://abrouter.com/api/v1/experiment/run</pre>

                With
                <br>

                <pre>Authorization 2c0d967a245c04b5f67ccc059af91257ba0249acdcb0d65b8583b9588227fb709dae3c043a313e71</pre>
                <br>
                And payload:
                <pre>
{
	"data": {
		"type": "experiment-run",
		"attributes": {
            "userSignature": "asds21"
    	},
        "relationships": {
            "experiment": {
                "data": {
                    "id": "B95AC000-0000-0000-00005030",
                    "type": "experiments"
                }
            }
        }
	}
}
                </pre>

Will respond the following:

                <pre>
                    {
    "data": {
        "type": "experiment_branch_users",
        "id": "26DAA100-0000-0000-00006E5F",
        "attributes": {
            "run-uid": "button-green",
            "branch-uid": "green",
            "experiment-uid": "button"
        },
        "relationships": {
            "experiment_user": {
                "data": {
                    "type": "experiment_user",
                    "id": "9A187100-0000-0000-0000CC34"
                }
            },
            "experiment_id": {
                "data": {
                    "type": "users",
                    "id": "B95AC000-0000-0000-00005030"
                }
            },
            "experiment_branch_id": {
                "data": {
                    "type": "users",
                    "id": "BD950100-0000-0000-00007B95"
                }
            }
        }
    }
}
                </pre>

                </p>

                <h4 class="display-4">Ready to use ? </h4>
                <p class="lead">Review our guide how to ABRouter use with PHP clients:</p>


                <div>
                    <a href="/en/php-how-to-launch-ab-tests-in-5-minutes"  style="font-size: 25px">Launch your first A/B test on ABRouter with PHP without target to any framework</a>
                </div>
                <div>
                    <a href="/en/laravel-ab-tests"  style="font-size: 25px">Get started using ABRouter with Laravel framework</a>
                </div>


            </div>
        </div>

    </section>

@endsection
