@extends('front::layouts.master')

@section('content')
    <?php
    $user = \Modules\Front\Internal\User::me();
    ?>


    <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 class="display-4">ProxiedMail</h1>
        <p class="lead">
            Alias for your email. Stay anonymous & independent
        </p>

    </div>
    

    <div class="container">

        <div class="container" style="text-align: center;">
            <div class="row">
                <div class="col-sm">
                    <svg class="bi bi-envelope" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style="font-size:7em;">
                        <path fill-rule="evenodd" d="M14 3H2a1 1 0 00-1 1v8a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1zM2 2a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H2z" clip-rule="evenodd"/>
                        <path fill-rule="evenodd" d="M.071 4.243a.5.5 0 01.686-.172L8 8.417l7.243-4.346a.5.5 0 01.514.858L8 9.583.243 4.93a.5.5 0 01-.172-.686z" clip-rule="evenodd"/>
                        <path d="M6.752 8.932l.432-.252-.504-.864-.432.252.504.864zm-6 3.5l6-3.5-.504-.864-6 3.5.504.864zm8.496-3.5l-.432-.252.504-.864.432.252-.504.864zm6 3.5l-6-3.5.504-.864 6 3.5-.504.864z"/>
                    </svg>
                    <p class="lead">Email</p>

                </div>

                <div class="d-none d-sm-block">
                    <svg class="bi bi-arrow-right-short " width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style="font-size:4em;">
                        <path fill-rule="evenodd" d="M8.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L10.793 8 8.146 5.354a.5.5 0 010-.708z" clip-rule="evenodd"></path>
                        <path fill-rule="evenodd" d="M4 8a.5.5 0 01.5-.5H11a.5.5 0 010 1H4.5A.5.5 0 014 8z" clip-rule="evenodd"></path>
                    </svg>
                </div>

                <div class="col-sm">
                    <svg class="bi bi-shield" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style="font-size:7em;">
                        <path fill-rule="evenodd" d="M5.443 1.991a60.17 60.17 0 00-2.725.802.454.454 0 00-.315.366C1.87 7.056 3.1 9.9 4.567 11.773c.736.94 1.533 1.636 2.197 2.093.333.228.626.394.857.5.116.053.21.089.282.11A.73.73 0 008 14.5c.007-.001.038-.005.097-.023.072-.022.166-.058.282-.111.23-.106.525-.272.857-.5a10.197 10.197 0 002.197-2.093C12.9 9.9 14.13 7.056 13.597 3.159a.454.454 0 00-.315-.366c-.626-.2-1.682-.526-2.725-.802C9.491 1.71 8.51 1.5 8 1.5c-.51 0-1.49.21-2.557.491zm-.256-.966C6.23.749 7.337.5 8 .5c.662 0 1.77.249 2.813.525a61.09 61.09 0 012.772.815c.528.168.926.623 1.003 1.184.573 4.197-.756 7.307-2.367 9.365a11.191 11.191 0 01-2.418 2.3 6.942 6.942 0 01-1.007.586c-.27.124-.558.225-.796.225s-.526-.101-.796-.225a6.908 6.908 0 01-1.007-.586 11.192 11.192 0 01-2.417-2.3C2.167 10.331.839 7.221 1.412 3.024A1.454 1.454 0 012.415 1.84a61.11 61.11 0 012.772-.815z" clip-rule="evenodd"></path>
                    </svg>
                    <p class="lead">ProxiedMail encrypted</p>
                </div>

                <div class="d-none d-sm-block">
                    <svg class="bi bi-arrow-right-short hidden-xs-up" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style="font-size:4em;">
                        <path fill-rule="evenodd" d="M8.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L10.793 8 8.146 5.354a.5.5 0 010-.708z" clip-rule="evenodd"></path>
                        <path fill-rule="evenodd" d="M4 8a.5.5 0 01.5-.5H11a.5.5 0 010 1H4.5A.5.5 0 014 8z" clip-rule="evenodd"></path>
                    </svg>
                </div>

                <div class="col-sm">
                    <svg class="bi bi-person" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style="font-size:7em;">
                        <path fill-rule="evenodd" d="M13 14s1 0 1-1-1-4-6-4-6 3-6 4 1 1 1 1h10zm-9.995-.944v-.002.002zM3.022 13h9.956a.274.274 0 00.014-.002l.008-.002c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664a1.05 1.05 0 00.022.004zm9.974.056v-.002.002zM8 7a2 2 0 100-4 2 2 0 000 4zm3-2a3 3 0 11-6 0 3 3 0 016 0z" clip-rule="evenodd"></path>
                    </svg>
                    <p class="lead">Your real address</p>
                </div>
            </div>
        </div>


        @if(empty($user))
            <hr/>
            <script>
                window.mode='mainpage';
                window.api="<?=\Modules\Front\Assets\FrontConfig::apiHost()?>/api/v1/";
            </script>
            <div class="container">
                <h3 class="display-6" style="text-align: center;">Create Proxy</h3>

                <p class="lead">
                    Enter your real email and invent proxy address to get alias at <i>@proxiedmail.com</i> which allows you to receive emails without showing your real email.
                    We will forward emails from proxy-address to your real immediately after sent.
                    You can disable this email anytime.
                </p>


                <div id="root"></div>
                <script>!function(i){function e(e){for(var t,r,n=e[0],o=e[1],u=e[2],l=0,f=[];l<n.length;l++)r=n[l],Object.prototype.hasOwnProperty.call(p,r)&&p[r]&&f.push(p[r][0]),p[r]=0;for(t in o)Object.prototype.hasOwnProperty.call(o,t)&&(i[t]=o[t]);for(s&&s(e);f.length;)f.shift()();return c.push.apply(c,u||[]),a()}function a(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,o=1;o<r.length;o++){var u=r[o];0!==p[u]&&(n=!1)}n&&(c.splice(t--,1),e=l(l.s=r[0]))}return e}var r={},p={1:0},c=[];function l(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return i[e].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.m=i,l.c=r,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(r,n,function(e){return t[e]}.bind(null,n));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var t=this.webpackJsonptodos=this.webpackJsonptodos||[],n=t.push.bind(t);t.push=e,t=t.slice();for(var o=0;o<t.length;o++)e(t[o]);var s=n;a()}([])</script>
                <?=\Modules\Front\Assets\Puller::injectBuild('experiments')?>
            </div>
            <hr/>
        @endif


        <div class="container">
            <h3 class="display-6" style="text-align: center;">Advantage</h3>
            <p class="lead">
            <li class="lead"><i>Vendor-free</i> from email address provider. You can change forwarding-to anytime, for example - from GMail to ProtonMail or just immediately change forwarding for receiving emails from Apple to other real email address.</li>
            <li class="lead">Protect your data - your personal email. Your email address might be exposed and searchable in search engines like Google. ProxiedMail allows you to keep secure from any investigations of sender.</li>
            <li class="lead">Set up hidden gateway to receive one email to multiple recipients.</li>
            <li class="lead">Have an multiple accounts on sevices which requires email, but you will still have forwarding to the same mailbox.</li>
            </p>
    </div>
        <div class="container">
            <h3 class="display-6" style="text-align: center;">Security</h3>
            <p class="lead">
                The service is absolutely secure.  We store your emails as an encrypted and anonymized data for a short time to have ability to resend it if something went wrong, no one can read it. Trust us and enjoy anonymous & independent mailing.
            </p>
        </div>

        <div class="container" style="text-align: center;">
        @if(empty($user))

        @else
                <a href="/en/board" class="btn btn-light">Proceed to Proxies desk</a>
            @endif
        </div>

        @if(empty($user))
            <div class="container">
                <a href="/en/firefox-relay"><small>Alternative to Firefox Relay</small></a> |
                <a href="/en/webhook-on-email"><small>Callback/Webhook on received email</small></a>
            </div>
        @endif

@endsection
