// это управление Футером на чистом JS. (нажатие на бургер на смартфоне)

var burger = document.getElementById('burger');
var footerLarge = document.getElementsByClassName('footer-large');
var footerVertical = document.getElementsByClassName('footer__vertical');
var usual = document.getElementsByClassName('usual');
var faBook = document.getElementsByClassName('fa-book');
var faPhone = document.getElementsByClassName('fa-phone');
var faEnvelope = document.getElementsByClassName('fa-envelope');

burger.onclick = function() {

    if (footerLarge[0].style.display!='block'){
        footerLarge[0].style.display='block';
        footerLarge[0].style.position='absolute';
        footerLarge[0].style.bottom='30px';
        //footerLarge[0].style.left='30%';
        footerLarge[0].style.background='linear-gradient(to bottom, #202020, #505050)';

        usual[0].style.display='block';
        usual[1].style.display='block';
        usual[2].style.display='block';

        usual[0].style.paddingBottom='10px';
        usual[1].style.paddingBottom='10px';
        usual[2].style.paddingBottom='10px';
        
        usual[0].style.paddingTop='10px';
        usual[1].style.paddingTop='10px';
        usual[2].style.paddingTop='10px';

        usual[0].style.paddingRight='10px';
        usual[1].style.paddingRight='10px';
        usual[2].style.paddingRight='10px';
        
        usual[0].style.paddingLeft='10px';
        usual[1].style.paddingLeft='10px';
        usual[2].style.paddingLeft='10px';

        usual[0].style.textTransform='uppercase';
        usual[1].style.textTransform='uppercase';
        usual[2].style.textTransform='uppercase';

        faBook[0].style.padding='0 10px';
        faPhone[0].style.padding='0 10px';
        faEnvelope[0].style.padding='0 10px';
        //fa[1].style.paddingLeft='10px';
        //fa[2].style.paddingLeft='10px';

        footerVertical[0].style.display='none';
        footerVertical[1].style.display='none';
    } 
    else {
        footerLarge[0].style.display='none'; 
    }
}