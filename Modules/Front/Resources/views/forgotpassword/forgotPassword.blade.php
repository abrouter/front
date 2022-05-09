<?php
use Modules\Front\Assets\FrontConfig;use Modules\Front\Assets\Puller;
?>
@extends('front::layouts.master')

@section('content')
    <section class="faq">
        <div class="container2" style="background: white; padding:15px;">

    <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 class="display-4">Password recovery</h1>
    </div>


    <div class="container">

        <script>
            window.api="<?=FrontConfig::apiHost()?>/api/v1/";
            window.mode='forgotpassword';
        </script>

    <div>
        <div class="alert alert-warning" id="errormessage" role="alert" style="display: none;"></div>
        <div class="alert alert-success" id="successmessage" role="alert" style="display: none;"></div>
        <form>
            <div class="form-group">
                <label for="email">Email address</label>
                <input type="text" class="form-control" id="email" placeholder="Email">
            </div>
            <button type="submit" onclick="return false" class="btn btn-primary" id="send">Send</button>
        </form>
    </div>

    <?=Puller::injectBuild('signup')?>

    </div>
        </div>
    </section>
    <script src="/js/ForgotPassword.js"></script>
@endsection