// это управление Футером на чистом JS. (нажатие на бургер на смартфоне)

var burger = document.getElementById('burger');
var footerLarge = document.getElementsByClassName('footer-large');
var footerVertical = document.getElementsByClassName('footer__vertical');
var usual = document.getElementsByClassName('usual');
var fa = document.getElementsByClassName('fa');

burger.onclick = function() {
    var user = (navigator.userAgent);
    
    //if(  user.indexOf()>-1 )

    if (footerLarge[0].style.display!='block'){
        footerLarge[0].style.display='block';
        footerLarge[0].style.position='absolute';
        footerLarge[0].style.bottom='30px';
        footerLarge[0].style.background='linear-gradient(to bottom, #202020, #505050)';
        
        usual[0].style.display='block';
        usual[1].style.display='block';
        usual[2].style.display='block';
        usual[0].style.display='-moz-block';
        usual[1].style.display='-moz-block';
        usual[2].style.display='-moz-block';

        usual[0].style.paddingBottom='10px';
        usual[1].style.paddingBottom='10px';
        usual[2].style.paddingBottom='10px';
        
        usual[0].style.paddingTop='7px';
        usual[1].style.paddingTop='7px';
        usual[2].style.paddingTop='7px';

        usual[0].style.paddingRight='10px';
        usual[1].style.paddingRight='10px';
        usual[2].style.paddingRight='10px';

        usual[0].style.textTransform='uppercase';
        usual[1].style.textTransform='uppercase';
        usual[2].style.textTransform='uppercase';

        fa[0].style.padding='0 10px';
        fa[1].style.padding='0 10px';
        fa[2].style.padding='0 10px';

        footerVertical[0].style.display='none';
        footerVertical[1].style.display='none';
        
        //для Mozilla
        
        footerLarge[0].style.position='-moz-absolute';
        footerLarge[0].style.top='-moz-90%';
        //footerLarge[0].style.left='-moz-30px';
    } 
    else {
        footerLarge[0].style.display='none'; 
    }
}

// это управление меню в Хэдере на чистом JS. (нажатие на MENU на смартфоне)

var menu = document.getElementById('mainMenu');
var menuItem = document.getElementsByClassName('main-menu__list-item');
var ul = document.getElementsByClassName('main-menu__list');
var mainMenu = document.getElementById('divMenu');

menu.onclick = function() {

    if (menuItem[0].style.display!='block'){

        mainMenu.style.justifyContent='center'; 
        mainMenu.style.boxSizing='border-box'; 
        //ul[0].style.position='relative'; 
        //ul[0].style.top='-15px'; 

        menu.style.justifyContent='flex-start';



        //ul[0].style.display='block';
        ul[0].style.display='flex';
        ul[0].style.flexDirection='column';
        ul[0].style.justifyContent='flex-start';

        menuItem[0].style.display='block';
        menuItem[1].style.display='block';
        menuItem[2].style.display='block';
        menuItem[3].style.display='block';
        menuItem[4].style.display='block';
        
        menuItem[0].style.fontSize='14px';
        menuItem[1].style.fontSize='14px';
        menuItem[2].style.fontSize='14px';
        menuItem[3].style.fontSize='14px';
        menuItem[4].style.fontSize='14px';
        
        menuItem[0].style.zIndex='10';
        menuItem[1].style.zIndex='10';
        menuItem[2].style.zIndex='10';
        menuItem[3].style.zIndex='10';
        menuItem[4].style.zIndex='10';
        menuItem[0].style.background='linear-gradient(to bottom, white 0%, #c5f1c5 50%, white 100%)';
        menuItem[1].style.background='linear-gradient(to bottom, white 0%, #c5f1c5 50%, white 100%)';
        menuItem[2].style.background='linear-gradient(to bottom, white 0%, #c5f1c5 50%, white 100%)';
        menuItem[3].style.background='linear-gradient(to bottom, white 0%, #c5f1c5 50%, white 100%)';
        menuItem[4].style.background='linear-gradient(to bottom, white 0%, #c5f1c5 50%, white 100%)';
        menuItem[0].style.paddingTop='0px';
        menuItem[1].style.paddingTop='5px';
        menuItem[2].style.paddingTop='5px';
        menuItem[3].style.paddingTop='5px';
        menuItem[4].style.paddingTop='5px';
    } 
    else {
        menuItem[0].style.display='none'; 
        menuItem[1].style.display='none'; 
        menuItem[2].style.display='none'; 
        menuItem[3].style.display='none'; 
        menuItem[4].style.display='none'; 
    }
}