<?php
use Modules\Front\Internal\User;
use Modules\Front\Assets\Puller;
?>
@extends('front::layouts.settings')

@section('settings')
    <div class="setting__right">
        <div class="setting__content">
            <div class="code">
                <a class="global__back" href="#">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 11H6.83L10.41 7.41L9 6L3 12L9 18L10.41 16.59L6.83 13H21V11Z" fill="var(--color)"/>
                    </svg>
                    Back to Experiments
                </a>
                <div class="global__subtitle">Run experiment</div>

                <div class="setting__top top-setting code_tabs">
                    <div class="top-setting__filters">
                        <div class="top-setting__filter code_tab active" onclick="steps(this, 'code')">PHP</div>
                        <div class="top-setting__filter code_tab" onclick="steps(this, 'code')">Laravel</div>
                        <div class="top-setting__filter code_tab" onclick="steps(this, 'code')">Symfony</div>
                        <div class="top-setting__filter code_tab" onclick="steps(this, 'code')">NodeJS</div>
                    </div>
                    <span class="line"></span>
                </div>

                <div class="code_steps">
                    <div class="code_step active">
                        <div class="code_step_copy">
                            <div class="button">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="20" height="20" fill="#32AD67"/>
                                    <path d="M5.83333 4.99984V2.49984C5.83333 2.27882 5.92113 2.06686 6.07741 1.91058C6.23369 1.7543 6.44565 1.6665 6.66667 1.6665H16.6667C16.8877 1.6665 17.0996 1.7543 17.2559 1.91058C17.4122 2.06686 17.5 2.27882 17.5 2.49984V14.1665C17.5 14.3875 17.4122 14.5995 17.2559 14.7558C17.0996 14.912 16.8877 14.9998 16.6667 14.9998H14.1667V17.4998C14.1667 17.9598 13.7917 18.3332 13.3275 18.3332H3.33917C3.22927 18.3338 3.12033 18.3128 3.0186 18.2712C2.91687 18.2296 2.82436 18.1684 2.74638 18.0909C2.6684 18.0135 2.60649 17.9214 2.56421 17.82C2.52193 17.7185 2.50011 17.6097 2.5 17.4998L2.5025 5.83317C2.5025 5.37317 2.8775 4.99984 3.34167 4.99984H5.83333ZM4.16917 6.6665L4.16667 16.6665H12.5V6.6665H4.16917ZM7.5 4.99984H14.1667V13.3332H15.8333V3.33317H7.5V4.99984Z" fill="white"/>
                                </svg>
                                Copy
                            </div>
                        </div>
                        <textarea readonly>&lt;?php
declare(strict_types = 1);

namespace App\Http\Controllers;

use Abrouter\Client\Client;

class ExampleFeatureFlagsController
{
    public function __invoke(Client $client)
    {
        $enabledButtonFeatureFlag = $client->featureFlags()
            ->run('enabled_button_feature_flag');
        $disabledButtonFeatureFlag = $client->featureFlags()
            ->run('disabled_button_feature_flag');

        return view('featureFlags', ['enabledButtonFeatureFlag' => $enabledButtonFeatureFlag, 'disabledButtonFeatureFlag' => $disabledButtonFeatureFlag, ]);
    }
											</textarea>
                    </div>
                    <div class="code_step">
                        <div class="code_step_copy">
                            <div class="button">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="20" height="20" fill="#32AD67"/>
                                    <path d="M5.83333 4.99984V2.49984C5.83333 2.27882 5.92113 2.06686 6.07741 1.91058C6.23369 1.7543 6.44565 1.6665 6.66667 1.6665H16.6667C16.8877 1.6665 17.0996 1.7543 17.2559 1.91058C17.4122 2.06686 17.5 2.27882 17.5 2.49984V14.1665C17.5 14.3875 17.4122 14.5995 17.2559 14.7558C17.0996 14.912 16.8877 14.9998 16.6667 14.9998H14.1667V17.4998C14.1667 17.9598 13.7917 18.3332 13.3275 18.3332H3.33917C3.22927 18.3338 3.12033 18.3128 3.0186 18.2712C2.91687 18.2296 2.82436 18.1684 2.74638 18.0909C2.6684 18.0135 2.60649 17.9214 2.56421 17.82C2.52193 17.7185 2.50011 17.6097 2.5 17.4998L2.5025 5.83317C2.5025 5.37317 2.8775 4.99984 3.34167 4.99984H5.83333ZM4.16917 6.6665L4.16667 16.6665H12.5V6.6665H4.16917ZM7.5 4.99984H14.1667V13.3332H15.8333V3.33317H7.5V4.99984Z" fill="white"/>
                                </svg>
                                Copy
                            </div>
                        </div>
                        <textarea readonly>code Laravel

Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio nihil sequi aut repellat tempore,
sint, quisquam doloremque, facere enim, animi officiis neque. Fugit alias eaque officia unde corrupti
ipsa suscipit.
											</textarea>
                    </div>
                    <div class="code_step">
                        <div class="code_step_copy">
                            <div class="button">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="20" height="20" fill="#32AD67"/>
                                    <path d="M5.83333 4.99984V2.49984C5.83333 2.27882 5.92113 2.06686 6.07741 1.91058C6.23369 1.7543 6.44565 1.6665 6.66667 1.6665H16.6667C16.8877 1.6665 17.0996 1.7543 17.2559 1.91058C17.4122 2.06686 17.5 2.27882 17.5 2.49984V14.1665C17.5 14.3875 17.4122 14.5995 17.2559 14.7558C17.0996 14.912 16.8877 14.9998 16.6667 14.9998H14.1667V17.4998C14.1667 17.9598 13.7917 18.3332 13.3275 18.3332H3.33917C3.22927 18.3338 3.12033 18.3128 3.0186 18.2712C2.91687 18.2296 2.82436 18.1684 2.74638 18.0909C2.6684 18.0135 2.60649 17.9214 2.56421 17.82C2.52193 17.7185 2.50011 17.6097 2.5 17.4998L2.5025 5.83317C2.5025 5.37317 2.8775 4.99984 3.34167 4.99984H5.83333ZM4.16917 6.6665L4.16667 16.6665H12.5V6.6665H4.16917ZM7.5 4.99984H14.1667V13.3332H15.8333V3.33317H7.5V4.99984Z" fill="white"/>
                                </svg>
                                Copy
                            </div>
                        </div>
                        <textarea readonly>code Symfony

Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis quod et quidem tempora
exercitationem vero, a optio ipsum ea saepe fugit hic commodi eligendi unde impedit. Recusandae ut mollitia laboriosam!
											</textarea>
                    </div>
                    <div class="code_step">
                        <div class="code_step_copy">
                            <div class="button">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="20" height="20" fill="#32AD67"/>
                                    <path d="M5.83333 4.99984V2.49984C5.83333 2.27882 5.92113 2.06686 6.07741 1.91058C6.23369 1.7543 6.44565 1.6665 6.66667 1.6665H16.6667C16.8877 1.6665 17.0996 1.7543 17.2559 1.91058C17.4122 2.06686 17.5 2.27882 17.5 2.49984V14.1665C17.5 14.3875 17.4122 14.5995 17.2559 14.7558C17.0996 14.912 16.8877 14.9998 16.6667 14.9998H14.1667V17.4998C14.1667 17.9598 13.7917 18.3332 13.3275 18.3332H3.33917C3.22927 18.3338 3.12033 18.3128 3.0186 18.2712C2.91687 18.2296 2.82436 18.1684 2.74638 18.0909C2.6684 18.0135 2.60649 17.9214 2.56421 17.82C2.52193 17.7185 2.50011 17.6097 2.5 17.4998L2.5025 5.83317C2.5025 5.37317 2.8775 4.99984 3.34167 4.99984H5.83333ZM4.16917 6.6665L4.16667 16.6665H12.5V6.6665H4.16917ZM7.5 4.99984H14.1667V13.3332H15.8333V3.33317H7.5V4.99984Z" fill="white"/>
                                </svg>
                                Copy
                            </div>
                        </div>
                        <textarea readonly>code NodeJS

Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium dolor ad provident sint,
maxime molestias saepe laboriosam neque itaque odit libero inventore dignissimos dolore quis,
maiores ipsam nobis temporibus consequuntur.
											</textarea>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('js')
    <script src="/js/RunExperiment.js"></script>
@endsection
