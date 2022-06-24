$(document).ready(function () {

    let pathName = window.location.pathname,
        regex = /^(\/[a-z]+\/[a-z-]+)(\/[a-z-]+)?$/;

    /* Slice token */
    $(".token-header__body").click(function () {
        let sliceToken = shortToken.slice(0, 15) + '...';
        $(".token-header__value")[0].innerHTML = sliceToken;
    });

    /* Copy token */
    $(".token-header__icon").click(function () {
        window.navigator.clipboard.writeText(shortToken);
        toastr.options.positionClass = 'toast-top-left';
        toastr.options.showMethod = 'slideDown';
        toastr.options.hideMethod = 'slideUp';
        toastr.success('Token has been successfully copied');
    });

    /* Copy token */
    $(".code_step_copy").click(function () {
        toastr.options.positionClass = 'toast-top-left';
        toastr.options.showMethod = 'slideDown';
        toastr.options.hideMethod = 'slideUp';
        toastr.success('Code has been successfully copied');
    });



    /* Add class active */
    $(".menu-setting__link").click(function () {
        $(".menu-setting__link").removeClass("active");
        $(this).addClass("active");
    });
    
    $(".menu-setting__link").each(function () {
        let href = $(this).attr('href'),
            check = pathName.match(regex);

        if (href === check[1]) {
            $(this).addClass("active");
        }
    });

    /* Delete class active menu link */
    $(".menu__link").each(function () {
        if (window.location.pathname !== '/') {
            $(".menu__link").removeClass("active");
        }
    });
});
