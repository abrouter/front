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
            window.mode='resetpassword';
        </script>

    <div>
        <div class="alert alert-warning" id="errormessage" role="alert" style="display: none;"></div>
        <div class="alert alert-success" id="successmessage" role="alert" style="display: none;"></div>
        <form>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" placeholder="Password">
            </div>
            <div class="form-group">
                <label for="password-password">Password confirm</label>
                <input type="password" class="form-control" id="password-repeat" placeholder="Repeat password">
            </div>
            <div style="display: none">
            <input type="text" id="token" value="{{$token}}">
            <input type="text" id="email" value="{{$email['email']}}">
            </div>
            <button type="submit" onclick="return false" class="btn btn-primary" id="reset">Reset password</button>
        </form>
    </div>

    <?=Puller::injectBuild('signup')?>

    </div>
        </div>
    </section>
    <script src="/js/ResetPassword.js"></script>
@endsection