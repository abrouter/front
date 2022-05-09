<?php
use Modules\Front\Internal\User;
?>
@extends('front::layouts.settings')

@section('settings')
    <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
    <div class="loader">
        <svg class="spinner" viewBox="0 0 50 50">
            <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="2"></circle>
        </svg>
    </div>
    <div class="setting__right">
        <div class="setting__content">
            <div class="setting__stat stat">
                <a href="/en/stats" onclick="javascript:history.back(); return false;" class="stat__back">
                    <svg class="stat__icon">
                        <use href="/img/icons/icons.svg#arrow-back"></use>
                    </svg>
                    Back to statistics
                </a>
                <div class="stat__head">
                    <div class="stat__title">
                        Funnel statistics
                    </div>
                    <button class="top-setting__btn">
                        <svg class="top-setting__icon">
                            <use href="/img/icons/icons.svg#plus"></use>
                        </svg>
                        <svg class="top-setting__icon top-setting__icon2">
                            <use href="/img/icons/icons.svg#plus2"></use>
                        </svg>
                        <span>Add event </span>
                    </button>
                </div>
                <div data-edit-flags class="setting__table table-setting table-setting_stat" id="all-events">
                    <div class=" table-setting__head">
                        <div class="table-setting__column2 ">Event name</div>
                        <div class="table-setting__column4 table-setting__column4_small">
                            Manage
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script>
        window.token='Bearer <?=request()->cookie('token')?>';
        window.userId="<?=User::me()['data']['id']?>";
        window.onload = $('.loader').show();

        $(document).ready(function () {
            $.ajax({
                'method': "GET",
               'url': "/api/v1/user-events",
                'headers': {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': window.token,
                },
                'success': function(response) {
                    $('.loader').hide();
                    for(let i in response.data){
                        let value = response.data[i];
                        let eventName = value.attributes.event_name;
                        let eventId = value.id;

                        $('#all-events').append('<div class="table-setting__wrap">' +
                            '<div class="table-setting__row">' +
                                '<div class="table-setting__name table-setting__column2" data-id="'+ eventId +'">' + eventName + '</div>' +
                                '<div class="table-setting__manage table-setting__column4 table-setting__column4_small">' +
                                    '<div class="table-setting__items">' +
                                        '<button data-correct data-tippy-content="Edit" class="table-setting__item">' +
                                            '<svg class="table-setting__icon">' +
                                                '<use href="/img/icons/icons.svg#correct"></use>' +
                                            '</svg>' +
                                        '</button>' +
                                        '<a href="" data-id="'+ eventId +'" data-tippy-content="Delete" class="table-setting__item">' +
                                            '<svg class="table-setting__icon">' +
                                                '<use href="/img/icons/icons.svg#delete"></use>' +
                                            '</svg>' +
                                        '</a>' +
                                    '</div>' +
                                '</div>' +
                            '</div>' +
                            '<div class="table-setting__row table-setting__row_edit">' +
                                '<form action="#" class="create-setting__form">' +
                                    '<div class="create-setting__item">' +
                                        '<label class="create-setting__label">Edit name</label>' +
                                        '<input autocomplete="off" type="text" data-error="Ошибка" data-id="'+ eventId +'" placeholder="'+ eventName +'" class="input create-setting__input">' +
                                    '</div>' +
                                    '<div class="create-setting__bottom">' +
                                        '<button class="create-setting__cancel">Cancel</button>' +
                                        '<button class="create-setting__update button">Update</button>' +
                                    '</div>' +
                                '</form>' +
                            '</div>' +
                        '</div>')
                    }
                    if(response.data.length === 0){
                        $('#all-events').hide();
                        $('.setting__stat.stat').append('<div class="setting__top top-setting">' +
                            '<div class="top-setting__info">You don\'t have event, yet.</div>' +
                        '</div>' +
                            '<div class="setting__image">' +
                                '<picture><source srcset="/img/png/setting.webp" type="image/webp"><img src="/img/png/setting.png?_v=1644581884261" alt="Image"></picture>' +
                            '</div>');
                    }
                }
            });
            $(document).change('.input', function(e){
                $('.loader').show();
                let method = "PATCH";
                let dataId = e.target.getAttribute('data-id') ?? '';
                let value = e.target.value;

                if(dataId === '') {
                    method = "POST";
                }

                $.ajax({
                    'method': method,
                    'url': "/api/v1/user-events/" + dataId,
                    'headers': {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'Authorization': window.token,
                    },
                    'data': JSON.stringify({
                        "data": {
                        "type": "display_user_events",
                        "attributes": {
                            "id": dataId,
                            "event_name": value
                        },
                        "relationships": {
                            "user": {
                                "data": {
                                    "id": window.userId,
                                    "type": "users"
                                    }
                                }
                            }
                        }
                    }),
                    'success': function(response) {
                        $('.loader').hide();
                        if(method === "PATCH"){
                            for(let i in response.data){
                                let event = response.data[i];
                                let eventName = event.attributes.event_name;
                                let setEditName = $('.table-setting__name.table-setting__column2');

                                for(let n = 0; n < setEditName.length; n++) {
                                    if(setEditName[n].getAttribute('data-id') === dataId) {
                                        setEditName[n].innerHTML = eventName;
                                    }
                                }

                                let getChildrenTag = $('.table-setting__wrap.edit');

                                getChildrenTag.each(function() {
                                    let getDataId = $(this).children()[0].children[0].getAttribute('data-id');
                                        if(getDataId === dataId) {
                                            $(this).removeClass('edit')
                                        }
                                })
                            }
                            toastr.options.positionClass = 'toast-top-left';
                            toastr.success('Event updated');
                        } else if(method === "POST"){
                            let event = response.data;
                            let eventName = event.attributes.event_name;
                            let eventId = event.id;
                            let allEvents = $('#all-events');

                            allEvents.show();
                            $('.setting__create.create-setting').remove();
                            allEvents.append('<div class="table-setting__wrap">' +
                                '<div class="table-setting__row">' +
                                    '<div class="table-setting__name table-setting__column2" data-id="'+ eventId +'">' + eventName + '</div>' +
                                    '<div class="table-setting__manage table-setting__column4 table-setting__column4_small">' +
                                        '<div class="table-setting__items">' +
                                            '<button data-correct data-tippy-content="Edit" class="table-setting__item">' +
                                                '<svg class="table-setting__icon">' +
                                                    '<use href="/img/icons/icons.svg#correct"></use>' +
                                                '</svg>' +
                                            '</button>' +
                                            '<a href="" data-id="'+ eventId +'" data-tippy-content="Delete" class="table-setting__item">' +
                                                '<svg class="table-setting__icon">' +
                                                    '<use href="/img/icons/icons.svg#delete"></use>' +
                                                '</svg>' +
                                            '</a>' +
                                        '</div>' +
                                    '</div>' +
                                '</div>' +
                                '<div class="table-setting__row table-setting__row_edit">' +
                                    '<form action="#" class="create-setting__form">' +
                                        '<div class="create-setting__item">' +
                                            '<label class="create-setting__label">Edit name</label>' +
                                            '<input autocomplete="off" type="text" data-error="Ошибка" data-id="'+ eventId +'" placeholder="'+ eventName +'" class="input create-setting__input">' +
                                        '</div>' +
                                        '<div class="create-setting__bottom">' +
                                            '<button class="create-setting__cancel">Cancel</button>' +
                                            '<button class="create-setting__update button">Update</button>' +
                                        '</div>' +
                                    '</form>' +
                                '</div>' +
                            '</div>');

                            toastr.options.positionClass = 'toast-top-left';
                            toastr.success('Event created');
                        }
                    }
                });
            });
            $(document).on('click', 'a.table-setting__item', function(e) {
                $('.loader').show();
                e.preventDefault();
                let target = e.currentTarget;
                let id = target.getAttribute('data-id');
                let value = target.closest('.table-setting__row').children[0].innerHTML

                $.ajax({
                    'method': "DELETE",
                    'url': "/api/v1/user-events/" + id,
                    'headers': {
                        'Authorization': window.token,
                    },
                    'data': {
                        "data": {
                        "type": "display_user_events",
                        "attributes": {
                            "id": id,
                            "event_name": value
                        },
                        "relationships": {
                            "user": {
                                "data": {
                                    "id": window.userId,
                                    "type": "users"
                                    }
                                }
                            }
                        }
                    },
                    'success': function() {
                        $('.loader').hide();
                        target.closest('.table-setting__wrap').remove();
                        $('.setting__create.create-setting').remove();

                        if($('.table-setting__wrap').length === 0) {
                            $('.setting__stat.stat').append('<div class="setting__top top-setting">' +
                                '<div class="top-setting__info">You don\'t have event, yet.</div>' +
                                '</div>' +
                                '<div class="setting__image">' +
                                    '<picture><source srcset="/img/png/setting.webp" type="image/webp"><img src="/img/png/setting.png?_v=1644581884261" alt="Image"></picture>' +
                                '</div>');
                            $('#all-events').hide();
                        }
                        toastr.options.positionClass = 'toast-top-left';
                        toastr.error('Event has been deleted');
                    }
                });
            });
            $(document).on('click', '.create-setting__cancel', function (e) {
                e.preventDefault();
                let getEditClass = e.currentTarget.closest('.table-setting__wrap.edit');

                if(getEditClass) {
                    getEditClass.classList.remove('edit');
                } else {
                    $('.table-setting__wrap').length > 0 ? $('#all-events').show() : $('.setting__stat.stat').append('<div class="setting__top top-setting">' +
                            '<div class="top-setting__info">You don\'t have event, yet.</div>' +
                            '</div>' +
                            '<div class="setting__image">' +
                            '<picture><source srcset="/img/png/setting.webp" type="image/webp"><img src="/img/png/setting.png?_v=1644581884261" alt="Image"></picture>' +
                            '</div>');
                    $('.setting__create.create-setting').remove();
                }
            })
            $(document).on('click', 'button.top-setting__btn', function() {
                $('#all-events').hide();
                $('.setting__top.top-setting').remove();
                $('.setting__image').remove();

                let createEventForm = ('<div class="setting__create create-setting">' +
                    '<div class="create-setting__block">' +
                        '<div class="create-setting__title">Сreate a new event</div>' +
                        '<form action="#" class="create-setting__form">' +
                            '<div class="create-setting__item">' +
                                '<label class="create-setting__label">Event name</label>' +
                                '<input autocomplete="off" type="text" data-error="Ошибка" placeholder="open_contact_form" class="input create-setting__input">' +
                            '</div>' +
                            '<div class="create-setting__bottom">' +
                                '<button class="create-setting__cancel">Cancel</button>' +
                                '<button class="create-setting__update button">Create</button>' +
                            '</div>' +
                        '</form>' +
                    '</div>' +
                '</div>');

                $('.setting__create.create-setting').length === 0 ? $('.setting__stat.stat').append(createEventForm) : false;
            })
        });
    </script>
@endsection
