$(document).ready(function(){

    //это обработка данных формы перед пересылкой данных в PHP-файл

    $('#formMessage').submit(function(){
        if ($('#name').val()==''){
            $('#nameError').dialog({
                buttons: [{text: "ОК", click: function() {$(this).dialog("close")}}]
            });          $('#name').css({'borderColor':'red','backgroundColor':'pink'});
            return false;
        }
        else if ($('#email').val()==''){
            $('#emailError').dialog({
                buttons: [{text: "ОК", click: function() {$(this).dialog("close")}}]
            });       $('#email').css({'borderColor':'red','backgroundColor':'pink'});
            return false;
        }
        else if ($('#textArea').val()==''){
            $('#textAreaError').dialog({
                buttons: [{text: "ОК", click: function() {$(this).dialog("close")}}]
            });           $('#textArea').css({'borderColor':'red','backgroundColor':'pink'});
            return false;
        }  

        else if ($('#email').val().indexOf('@')+1 <= 0 || $('#email').val().indexOf('.')+1 <= 0) {
            $('#emailError1').dialog({
                buttons: [{text: "ОК", click: function() {$(this).dialog("close")}}]
            });           $('#email').css({'borderColor':'red','backgroundColor':'pink'});                      $('#email').css({'borderColor':'red','backgroundColor':'pink'});
            $('#email').css({'borderColor':'red','backgroundColor':'pink'});

            return false;
        }

        else if 
            ($('#name').val()!=''
             && $('#email').val()!='' && $('#textArea').val()!='' && $('#email').val().indexOf('@')+1 >= 0 && $('#email').val().indexOf('.')+1 >= 0)
        {
            $('#thankMessage').dialog({
                buttons: [{text: "ОК", click: function() {
                    //fooTrue(),
                    $(this).dialog("close")},
                          }]
            })
        }
    });
 /*   
function fooTrue(){
    return:true
}
*/
    // это управление фокусом на форме
    $(":input").focus(function(){$(this).css({'backgroundColor':'#fff','color':'#113f11','fontFamily':'arial','fontSize':'12px','fontStyle':'normal','border': '1px solid green'});
                                });

    // это управление потерей фокуса на форме
    $(":input").blur(function(){$(this).css({'backgroundColor':'#d1f9d1','color':'black','fontFamily':'arial','fontSize':'12px','fontStyle':'italic'});
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

    //это установка ширины поля формы TEXTAREA при экране шириной более 480 пикселей
    var width = $(document).width();

    if (width>=481){
        //alert(width);
        $('#textArea').attr('cols','50');
    };
});

