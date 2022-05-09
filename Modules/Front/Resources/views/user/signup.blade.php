<?php
use Modules\Front\Assets\Puller;
?>
@extends('front::layouts.master')

@section('content')
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <section class="faq">
        <div class="container2" style="background: white; padding:15px;">

            <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h1 class="display-4">Sign up</h1>
            </div>

            <div class="container">

                <script>
                    window.api="<?=\Modules\Front\Assets\FrontConfig::apiHost()?>/api/v1/";
                    window.mode='signup';

                </script>
                <div id="root"></div>
                @include('front::react/react-common')

                <?=Puller::injectBuild('signup')?>
                <br>
                <p style="font-size: 13px;">Already have an account? <a href="/en/signin">Sign in</a></p>
            </div>
        </div>
    </section>
    <script src="/js/SignUpWithGoogle.js"></script>
@endsection
