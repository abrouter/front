<?php
use Modules\Front\Assets\FrontConfig;use Modules\Front\Assets\Puller;
?>
@extends('front::layouts.master')

@section('content')
    <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossorigin="anonymous"
    >
    <section class="faq">
        <div class="container2" style="background: white; padding:15px;">

            <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h1 class="display-4">Sign in</h1>
            </div>


            <div class="container">

                <script>
                    window.api="<?=FrontConfig::apiHost()?>/api/v1/";
                    window.mode='signin';
                </script>
                <div id="root"></div>
                @include('front::react/react-common')

                <?=Puller::injectBuild('signup')?>

                <br>
                <p style="font-size: 13px;">Don’t have an account? <a href="/en/signup">Sign up</a></p>
                <p style="font-size: 13px;"><a href="/en/forgotpassword">Forgot password?</a></p>
            </div>
        </div>
    </section>

    <script src="/js/SignUpWithGoogle.js"></script>
@endsection
