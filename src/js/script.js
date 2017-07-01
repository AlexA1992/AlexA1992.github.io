$(document).ready(function(){

    //это отправка предварительного заказа
    $("#order").on("click", ".order-send", function(){
        var empty = 1;
        $('.new-order-form').each(function(){
            var quant = $(this).find('.quantity').val();
            if (quant==''){
                empty=0;
            }

        })
        if (empty==1){
            checkEmail();
        }
        else{
            $('#emptyField').dialog({
                buttons: [{text: "ОК", click: function() {$(this).dialog("close")}}],
                modal:true,
                show:{
                    effect:'drop',
                    duration:500,
                    easing:"easeOutBounce"
                },
                hide:{
                    effect:'drop',
                    duration:300,
                    delay:100
                }
            }); 
        }
        //alert(empty);
    })

    function checkEmail(){
        if($('#order').find('#email').val()=='')
        {
            $('#mistakeEmail').dialog({
                buttons: [{text: "ОК", click: function() {$(this).dialog("close")}}],
                modal:true,
                show:{
                    effect:'drop',
                    duration:500,
                    easing:"easeOutBounce"
                },
                hide:{
                    effect:'drop',
                    duration:300,
                    delay:100
                }
            });         
            $('#email').css({'borderColor':'red','background':'linear-gradient(to bottom, white 0%, pink 100%)'});
        }

        else if($('#order').find('#email').val().indexOf('@')+1 <= 0 || $('#order').find('#email').val().indexOf('.')+1 <= 0)
        {
            $('#wrongEmail').dialog({
                buttons: [{text: "ОК", click: function() {$(this).dialog("close")}}],
                modal:true,
                show:{
                    effect:'drop',
                    duration:500,
                    easing:"easeOutBounce"
                },
                hide:{
                    effect:'drop',
                    duration:300,
                    delay:100
                }
            });         
            $('#email').css({'borderColor':'red','background':'linear-gradient(to bottom, white 0%, pink 100%)'});
        }
        else {
            var email = $('#order').find('#email').val();
            //alert(email);
            var massiv = [];
            $('.new-order-form').each(function(){
                massiv.push($(this).find('.article').val());
                massiv.push('-');
                massiv.push($(this).find('.quantity').val());
                massiv.push(';');
                massiv.push('\n');
                return massiv;
            });
            var strokaTovarov = massiv.join(' ');
            strokaTovarov = strokaTovarov.replace(/\,/g, '\s');
            $('#forma-preliminaryOrder').find('#form-email').val(email);
            $('#forma-preliminaryOrder').find('#form-order').val(strokaTovarov);
            $('#forma-preliminaryOrder').find('#PreliminaryOrder').submit();
            $('#orderSent').dialog({
                modal:true,
                show:{
                    effect:'drop',
                    duration:500,
                    easing:"easeOutBounce"
                },
                hide:{
                    effect:'drop',
                    duration:300,
                    delay:100
                }
            });    
        }
    }


    // это вызов формы заказа обратного звонка
    $('#call').click(function(){
        $('#wantCall').dialog(
            {
                position:{
                    my:'left bottom',
                    at:'right center'
                },
                show:{
                    effect:'drop',
                    duration:500,
                    easing:"easeOutBounce"
                },
                hide:{
                    effect:'drop',
                    duration:300,
                    delay:100
                }  
            });
        
    })



    //это обработка данных формы перед пересылкой данных в PHP-файл
    $('#call-form').submit(function(){

        if ($('#call-name').val()==''){
            $('#nameError').dialog({
                buttons: [{text: "ОК", click: function() {$(this).dialog("close")}}],
                modal:true,
                show:{
                    effect:'drop',
                    duration:500,
                    easing:"easeOutBounce"
                },
                hide:{
                    effect:'drop',
                    duration:300,
                    delay:100
                }
            }
                                  );         
            $('#call-name').css({'borderColor':'yellow','background':'linear-gradient(to bottom, white 0%, lightgrey 100%)'});
            event.preventDefault();
        }
        else if ($('#call-number').val()==''){
            $('#phoneError').dialog({
                buttons: [{text: "ОК", click: function() {$(this).dialog("close")}}],
                modal:true,
                show:{
                    effect:'drop',
                    duration:500,
                    easing:"easeOutBounce"
                },
                hide:{
                    effect:'drop',
                    duration:300,
                    delay:100
                }
            });       
            $('#call-number').css({'borderColor':'yellow','background':'linear-gradient(to bottom, white 0%, lightgrey 100%)'});
            event.preventDefault();
        }
        else 
        {
            $('#promiseMessage').dialog({
                modal:true,
                show:{
                    effect:'drop',
                    duration:500,
                    easing:"easeOutBounce"
                },
                hide:{
                    effect:'drop',
                    duration:300,
                    delay:100
                }
            });
        }
    });


    // сделать галочку добавления товара белой при наведении мышки
    $('.accord-btn-icon').mouseover(function(){
        $('.fa-check').css('color','white');
    });

    $('.accord-btn-icon').mouseout(function(){
        $('.fa-check').css('color','darkgreen');
    });


    //подсказки
    $('[title]').tooltip({

        show:{
            effect:'drop',
            duration:500,
            easing:"easeOutBounce",
        },

        hide:{
            effect:'drop',
            duration:300,
            delay:100
        },
        position:{
            my:'left top',
            at:'right bottom'
        }
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
            show:{
                effect:'drop',
                duration:500,
                easing:"easeOutBounce"
            },
            hide:{
                effect:'drop',
                duration:300,
                delay:100
            }
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

    if (width>=768){
        $('.logoImg').attr('src','src/img/logoBig.png');
    };

    // это управление переключением табов
    $('#menu-doors').click(function(){
        var kids = $('.main-content').children();
        kids.css('display','none');
        if ($(document).width()<='481'){
            $('.main-menu__list-item').css('display','none');
        };
        $('.main-content').css('padding-top','0');
        $('#doors').css('display','block');
        if ($(document).width()>='481' /*&& $(document).width()<='810'*/ && $('#order').css('display')!='block'){
            //$('.main-menu__list-item').css('display','none');
            $('#accordion-string').css('display','block');
            $('.tabs-div').css('padding-top','0');
            $('.main-content').css('flex-direction','column');
            $('#order').css('display','block');
            $('#order').css('margin','0 auto');
            $('#order').css('min-width','90%');
            $('#doors').css('min-width','90%');
            $('.order-text').remove();
            $('.order-mobile-prompt').css('display','block');
        };
/*
        if ($(document).width()>='811'){
            $('#accordion-string').css('display','block');
            $('.tabs-div').css('padding-top','0');
            $('.main-content').css('flex-direction','column');
            $('#order').css('display','block');
            $('#order').css('margin','0 auto');
            $('#order').css('min-width','90%');
            $('#doors').css('min-width','90%');
            $('.order-text').remove();
            //$('.order-mobile-prompt').css('display','block');
        };*/
    });
/*
    $('#menu-jambs').click(function(){
        var kids = $('.main-content').children();
        kids.css('display','none');
        if ($(document).width()<='481'){
            $('.main-menu__list-item').css('display','none');
        };
        $('.main-content').css('padding-top','0');
        $('#jambs').css('display','block');
        if ($(document).width()>='481' && $(document).width()<='810' && $('#order').css('display')!='block'){
            //$('.main-menu__list-item').css('display','none');
            $('#accordion-string').css('display','block');
            $('.tabs-div').css('padding-top','0');
            $('.main-content').css('flex-direction','column');
            $('#order').css('display','block');
            $('#order').css('margin','0 auto');
            $('#order').css('min-width','90%');
            $('#doors').css('min-width','90%');
            $('.order-text').remove();
            //$('.order-mobile-prompt').css('display','block');
        };

        if ($(document).width()>='811'){
            $('#accordion-string').css('display','block');
            $('.tabs-div').css('padding-top','0');
            $('.main-content').css('flex-direction','column');
            $('#order').css('display','block');
            $('#order').css('margin','0 auto');
            $('#order').css('min-width','90%');
            $('#doors').css('min-width','90%');
            $('.order-text').remove();
            //$('.order-mobile-prompt').css('display','block');
        };
    });

    $('#menu-plywood').click(function(){
        var kids = $('.main-content').children();
        kids.css('display','none');
        if ($(document).width()<='481'){
            $('.main-menu__list-item').css('display','none');
        };
        $('.main-content').css('padding-top','0');
        $('#plywood').css('display','block');
        if ($(document).width()>='481' && $(document).width()<='810' && $('#order').css('display')!='block'){
            //$('.main-menu__list-item').css('display','none');
            $('#accordion-string').css('display','block');
            $('.tabs-div').css('padding-top','0');
            $('.main-content').css('flex-direction','column');
            $('#order').css('display','block');
            $('#order').css('margin','0 auto');
            $('#order').css('min-width','90%');
            $('#doors').css('min-width','90%');
            $('.order-text').remove();
            //$('.order-mobile-prompt').css('display','block');
        };

        if ($(document).width()>='811'){
            $('#accordion-string').css('display','block');
            $('.tabs-div').css('padding-top','0');
            $('.main-content').css('flex-direction','column');
            $('#order').css('display','block');
            $('#order').css('margin','0 auto');
            $('#order').css('min-width','90%');
            $('#doors').css('min-width','90%');
            $('.order-text').remove();
            //$('.order-mobile-prompt').css('display','block');
        };
    });

    $('#menu-particleboard').click(function(){
        var kids = $('.main-content').children();
        kids.css('display','none');
        if ($(document).width()<='481'){
            $('.main-menu__list-item').css('display','none');
        };
        $('.main-content').css('padding-top','0');
        $('#particleboard').css('display','block');
        if ($(document).width()>='481' && $(document).width()<='810' && $('#order').css('display')!='block'){
            //$('.main-menu__list-item').css('display','none');
            $('#accordion-string').css('display','block');
            $('.tabs-div').css('padding-top','0');
            $('.main-content').css('flex-direction','column');
            $('#order').css('display','block');
            $('#order').css('margin','0 auto');
            $('#order').css('min-width','90%');
            $('#doors').css('min-width','90%');
            $('.order-text').remove();
            //$('.order-mobile-prompt').css('display','block');
        };

        if ($(document).width()>='811'){
            $('#accordion-string').css('display','block');
            $('.tabs-div').css('padding-top','0');
            $('.main-content').css('flex-direction','column');
            $('#order').css('display','block');
            $('#order').css('margin','0 auto');
            $('#order').css('min-width','90%');
            $('#doors').css('min-width','90%');
            $('.order-text').remove();
            //$('.order-mobile-prompt').css('display','block');
        };
    });

    $('#menu-timber').click(function(){
        var kids = $('.main-content').children();
        kids.css('display','none');
        if ($(document).width()<='481'){
            $('.main-menu__list-item').css('display','none');
        };
        $('.main-content').css('padding-top','0');
        $('#timber').css('display','block');
        if ($(document).width()>='481' && $(document).width()<='810' && $('#order').css('display')!='block'){
            //$('.main-menu__list-item').css('display','none');
            $('#accordion-string').css('display','block');
            $('.tabs-div').css('padding-top','0');
            $('.main-content').css('flex-direction','column');
            $('#order').css('display','block');
            $('#order').css('margin','0 auto');
            $('#order').css('min-width','90%');
            $('#doors').css('min-width','90%');
            $('.order-text').remove();
            //$('.order-mobile-prompt').css('display','block');
        };

        if ($(document).width()>='811'){
            $('#accordion-string').css('display','block');
            $('.tabs-div').css('padding-top','0');
            $('.main-content').css('flex-direction','column');
            $('#order').css('display','block');
            $('#order').css('margin','0 auto');
            $('#order').css('min-width','90%');
            $('#doors').css('min-width','90%');
            $('.order-text').remove();
            //$('.order-mobile-prompt').css('display','block');
        };
    });
*/
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
})
