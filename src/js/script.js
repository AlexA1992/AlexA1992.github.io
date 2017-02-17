$(document).ready(function(){

    //подсказки
    $('[title]').tooltip({
    });

    //увеличение картинки товара при наведении мышки
    $('.accord-inner').find('img').mouseover(function(){
        var heightInner = $(this).parents('.accord-inner').height();
        var newHeight = heightInner*1.5;
        $(this).parents('.accord-inner').height(newHeight);
        $(this).css('transform','scale(1.5)');
    });

    $('.accord-inner').find('img').mouseout(function(){
        var heightInner = $(this).parents('.accord-inner').height();
        var newHeight = heightInner/1.5;
        $(this).parents('.accord-inner').height(newHeight);
        $(this).css('transform','scale(1)');
    });

    //добавление товара в заказ. Если такой товар уже есть, то не добавляем
    $('.accord-btn-icon').click(function(){
        if ($('.order-text').css('display')=='block'){
            $('.order-text').css('display','none');
        };
        if ($('.order-mobile-prompt').css('display')=='block'){
            $('.order-mobile-prompt').css('display','none');
        };
        var head = $(this).parents('.accord-inner').prev('.accord-heading').text();
        var count = 0;
        $('.new-order-form').each(function(){
            var exist = $(this).find('.article').val();
            if (exist==head){
                count=count+1;
            };
        });
        if (count<=0){
            $('.order-form').clone()
                .insertBefore( $('.order-send-div') )
                .addClass('new-order-form')
                .removeClass('order-form');
            $('.new-order-form').css('display','block');
            $(".new-order-form:last").find('.article').val(head); 
        }
        else{
            $('.order-announce').dialog({
                buttons: [{text: "ОК", click: function() {$(this).dialog("close")}}],
                modal:true,
                show:'drop',
                hide:'drop'            
            }); 
        }
        $('.order-send-div').css('display', 'block');
        $('[title]').tooltip({
        });
    });

    //удаление товара из заказа
    //проверяем есть ли хоть один товар в блоке ORDER. Если нет то возвращаем пояснения и убираем форму отсылки заказа
    $("#order").on("click", ".order-delete", function (){
        $(this).parents('.new-order-form').delay(100).fadeOut(300, function(){
            $(this).remove();
            if ($('#order').children('.new-order-form').length == 0 ) {
                $('.order-text').css('display', 'block');
                $('.order-send-div').css('display', 'none');
                if ($(document).width()>='481' && $(document).width()<='810'){
                    $('.order-mobile-prompt').css('display', 'block');
                }
            }; 
        });
    });

    //аккордеон
    $('.accordion').accordion({
        active:0,
        heightStyle:'content'
    });

    //это изменение IMG у логотипа при большом экране
    var width = $(document).width();
    //alert(width);
    if (width>=768){
        //alert(width);
        $('.logoImg').attr('src','src/img/logoBig.png');
    };

    // это управление переключением табов
    $('#menu-doors').click(function(){
        var kids = $('.main-content').children();
        kids.css('display','none');
        if ($(document).width()<='768'){
            $('.main-menu__list-item').css('display','none');
        };
        $('.main-content').css('padding-top','0');
        $('#doors').css('display','block');
        if ($(document).width()>='481' && $(document).width()<='810' && $('#order').css('display')!='block'){
            $('.accordion-string').css('display','block');
            $('.tabs-div').css('padding-top','0');
            $('.main-content').css('flex-direction','column');
            $('#order').css('display','block');
            $('#order').css('margin','0 auto');
            $('#order').css('min-width','90%');
            $('#doors').css('min-width','90%');
            $('.order-text').remove();
            $('.order-mobile-prompt').css('display','block');
        };
        
        if ($(document).width()>='811'){
            $('#order').css('display','block');
        };
    });

    $('#menu-jambs').click(function(){
        var kids = $('.main-content').children();
        kids.css('display','none');
        if ($(document).width()<='768'){
            $('.main-menu__list-item').css('display','none');
        };
        $('.main-content').css('padding-top','0');
        $('#jambs').css('display','block');
        if ($(document).width()>='481' && $(document).width()<='810' && $('#order').css('display')!='block'){
            $('.accordion-string').css('display','block');
            $('.tabs-div').css('padding-top','0');
            $('.main-content').css('flex-direction','column');
            $('#order').css('display','block');
            $('#order').css('margin','0 auto');
            $('#order').css('min-width','90%');
            $('#jambs').css('min-width','90%');
            $('.order-text').remove();
            $('.order-mobile-prompt').css('display','block');
        };
        if ($(document).width()>='811'){
            $('#order').css('display','block');
        };
    });

    $('#menu-plywood').click(function(){
        var kids = $('.main-content').children();
        kids.css('display','none');
        if ($(document).width()<='768'){
            $('.main-menu__list-item').css('display','none');
        };
        $('.main-content').css('padding-top','0');
        $('#plywood').css('display','block');
        if ($(document).width()>='481' && $(document).width()<='810' && $('#order').css('display')!='block'){
            $('.accordion-string').css('display','block');
            $('.tabs-div').css('padding-top','0');
            $('.main-content').css('flex-direction','column');
            $('#order').css('display','block');
            $('#order').css('margin','0 auto');
            $('#order').css('min-width','90%');
            $('#plywood').css('min-width','90%');
            $('.order-text').remove();
            $('.order-mobile-prompt').css('display','block');
        };
        if ($(document).width()>='811'){
            $('#order').css('display','block');
        };
    });

    $('#menu-particleboard').click(function(){
        var kids = $('.main-content').children();
        kids.css('display','none');
        if ($(document).width()<='768'){
            $('.main-menu__list-item').css('display','none');
        };
        $('.main-content').css('padding-top','0');
        $('#particleboard').css('display','block');
        if ($(document).width()>='481' && $(document).width()<='810' && $('#order').css('display')!='block'){
            $('.accordion-string').css('display','block');
            $('.tabs-div').css('padding-top','0');
            $('.main-content').css('flex-direction','column');
            $('#order').css('display','block');
            $('#order').css('margin','0 auto');
            $('#order').css('min-width','90%');
            $('#particleboard').css('min-width','90%');
            $('.order-text').remove();
            $('.order-mobile-prompt').css('display','block');
        };
        if ($(document).width()>='811'){
            $('#order').css('display','block');
        };
    });

    $('#menu-timber').click(function(){
        var kids = $('.main-content').children();
        kids.css('display','none');
        if ($(document).width()<='768'){
            $('.main-menu__list-item').css('display','none');
        };
        $('.main-content').css('padding-top','0');
        $('#timber').css('display','block');
        if ($(document).width()>='481' && $(document).width()<='810' && $('#order').css('display')!='block'){
            $('.accordion-string').css('display','block');
            $('.tabs-div').css('padding-top','0');
            $('.main-content').css('flex-direction','column');
            $('#order').css('display','block');
            $('#order').css('margin','0 auto');
            $('#order').css('min-width','90%');
            $('#timber').css('min-width','90%');
            $('.order-text').remove();
            $('.order-mobile-prompt').css('display','block');
        };
        if ($(document).width()>='811'){
            $('#order').css('display','block');
        };
    });

    // это управление диалоговым окном About Us
    $('.aboutUs').click(function(){

        $('#aboutUs').dialog({
            buttons: [{text: "ОК", click: function() {$(this).dialog("close")}}],
            modal:true,
            show:'drop',
            hide:'drop' 
        });
        if($(document).width()<='480'){
            $('.footer-large').css('display','none');
        };
    });

    // это управление диалоговым окном Contact Us
    $('.ContactUs').click(function(){
        if($(document).width()<='480'){
            $('.footer-large').css('display','none');
        };
        $('#contactUs').dialog({
            buttons: [{text: "ОК", click: function() {$(this).dialog("close")}}],
            modal:true,
            show:'drop',
            hide:'drop'            
        });
    });

    // это слайдер
    $('.Bigslide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.Smallslide',
        centerMode: true,
        autoplay:true,
        autoHeight:true
    });
    $('.Smallslide').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.Bigslide',
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        arrows: false,
        autoHeight:true
    });
});
