$(document).ready(function () {
    $('.user_menu, .user_menu-s').click(function () {
        if ($(this).hasClass('open')) {
            $('.parlor_block').addClass('slideOutRight');
            $('.parlor_block').removeClass('slideInRight')
            $(this).removeClass('open');
            $(this).parents('.parlor').removeClass('open-p');
            $('.fon-s').fadeOut(300)

        }
        else {
            $('.parlor_block').css('display','block');
            $('.parlor_block').removeClass('slideOutRight')
            $('.parlor_block').addClass('slideInRight');
            $(this).addClass('open');
            $(this).parents('.parlor').addClass('open-p');
            $('.fon-s').fadeIn(300);

        }
        $('.closet-m').click(function () {
            $('.parlor_block').removeClass('slideInRight');
            $('.parlor_block').addClass('slideOutRight');
            $(this).removeClass('open');
            $(this).parents('.parlor').removeClass('open-p');
            $('.fon-s').fadeOut(300);
            $('.user_menu, .user_menu-s').removeClass('open')

        })

    })
    $('.search_button').click(function () {
        var form=$('.search').find('form');
        if(form.is(':hidden')){
            form.slideDown(400);
        }
        else{
            form.slideUp(400);
        }
    })
    $('.button').click(function () {
        if ($('.navbar').hasClass('open')) {
            $('.navbar').removeClass('open')
            $('.navbar').addClass('slideOutDown')
            $(this).removeClass('close-nav')
            $(this).parents('nav').find('.search').show(300);
            $(this).parents('nav').removeClass('nav-open')
        }
        else {
            $('.navbar').css('display','block');
            $('.navbar').addClass('open')
            $('.navbar').removeClass('slideOutDown')
            $('.navbar').addClass('slideInUp')
            $(this).addClass('close-nav')
            $(this).parents('nav').find('.search').hide(300);
            $(this).parents('nav').addClass('nav-open')
        }
    })
    $('#search').focusout(function(){
        $(this).parents('form').slideUp(300)

    });
    $(window).resize(function () {
        var w_w = $(window).width();

        if (w_w > 760) {
            $('.navbar').css('display', 'block');
            $('.navbar').removeClass('open')
        }
        else {
            $('.navbar').css('display', 'none');
        }

    })





    $('.a_block').find('h3').click(function () {
        var parent = $(this).parent('.a_block');
        if ($(parent).hasClass('open')) {
            $(parent).find('.form_block,.show-block').slideUp(400);
            $(parent).removeClass('open')
        }
        else {

            $(parent).find('.form_block,.show-block').slideDown(400);
            $(parent).addClass('open')

        }
    })
       $('.select').click(function () {
           if ($(this).children('.option').is(":visible")){
               $(this).children('.option').slideUp(300);
               $(this).removeClass('open_s');
               return false
           }
           else {
               $(this).children('.option').slideDown(300);
               $(this).addClass('open_s')
               return false
           }
       })
    $('.option').find('a').click(function () {
        var val=$(this).html();
        $(this).parents('.select').find('input').val(val);

    })
    var heigh_block=$('.foto_block').height();
    var img_height=$('.big_foto').height();
    var margin=(heigh_block-img_height)/2;
    $('.big_foto').css('margin-top',margin);
    $('.miniature_block').find('a').click(function (e) {
        e.preventDefault();
        var src=$(this).attr('href');
        $('.big_foto').find('img').fadeOut(600);
        $('.big_foto').find('img').attr('src',src);

        setTimeout(function () {
            $('.big_foto').find('img').fadeIn(500);
        },600);


    })

        $('.radio').find('label').click(function () {
            $('.radio').find('.activ').removeClass('activ')
            if($(this).hasClass('activ')){
                $(this).removeClass('activ')

            }
            else{
                $(this).addClass('activ');
            }

        })
    $('.checked').find('label').click(function () {

        if($(this).hasClass('activ')){
            $(this).removeClass('activ')
            $(this).find('input').removeAttr("checked");
            if($(this).attr('id')=='option-pass'){
                $('#password').attr("type","password");
            }
            return false

        }
        else{
            $(this).addClass('activ');
            $(this).find('input').attr("checked","checked");
            if($(this).attr('id')=='option-pass'){
                $('#password').attr("type","text");
            }
            return false
        }

    })
    $('.modal-button').click(function () {
        $('.fon').fadeIn(300);
        $('.modal').fadeOut(300);
        var id=$(this).attr('href');
        setTimeout(function () {
            $(id).fadeIn(500);
        },300)

    })
    $('.close').click(function () {
        $('.modal').fadeOut(500);
        setTimeout(function () {
            $('.fon').fadeOut(600);
        },600)
        $('.modal').click(function () {
            return false

        })

    })
    $('.parent').click(function () {
        var win_w=$(window).width();
        if(win_w<760) {
            $(this).addClass('open');
            $(this).find('.pod-menu').css('display','block');
            $(this).find('.pod-menu').removeClass('slideOutDown');
            $(this).find('.pod-menu').addClass('slideInRight');



        }
        else{
            return
        }

    })
    $('.close_m').click(function () {
        $('.pod-menu').removeClass('slideInRight');
        $('.pod-menu').addClass('slideOutDown');
        return false;

    })
})