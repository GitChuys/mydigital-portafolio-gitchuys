
// Patron Modulo

(() => {

    window.onscroll = function(){

        var posicion = window.pageYOffset || document.documentElement.scrollTop;
    
        var elemento1 = document.getElementById("icon_heart");
        var elemento2 = document.getElementById("icon_fire");
    
        elemento1.style.bottom = posicion * 0.2 + "px";
        elemento2.style.top = posicion * 0.1 + "px";
    
    }
    
    const transforma = document.querySelector('#hov');
    const transforma2 = document.querySelector('#hov2');
    const transforma3 = document.querySelector('#hov3');
    const transforma4 = document.querySelector('#hov4');
    const transforma5 = document.querySelector('#hov5');

    click = 1;
    
    
    transforma.addEventListener('click',() => {
        if(click == 1){
            transforma.style.transform = 'scale(1.6)';
            transforma.style.boxShadow = '-10px 0px 30px';
            transforma.style.zIndex = '1000';
    
            click = click +1;
        }else{
            transforma.style.transform = 'scale(1) translate(0%, 0%)';
            transforma.style.boxShadow = '0px 0px 0px';
            transforma.style.zIndex = '10';
    
            click = 1;
        }
    })
    
    transforma2.addEventListener('click',() => {
        if(click == 1){
            transforma2.style.transform = 'scale(1.6)';
            transforma2.style.boxShadow = '-10px 0px 30px';
    
            click = click +1;
        }else{
            transforma2.style.transform = 'scale(1) translate(0%, 0%)';
            transforma2.style.boxShadow = '0px 0px 0px';
            transforma.style.zIndex = '10';
    
            click = 1;
        }
    })
    
    transforma3.addEventListener('click',() => {
        if(click == 1){
            transforma3.style.transform = 'scale(1.6)';
            transforma3.style.boxShadow = '-10px 0px 30px';
            transforma.style.zIndex = '1000';
    
            click = click +1;
        }else{
            transforma3.style.transform = 'scale(1) translate(0%, 0%)';
            transforma3.style.boxShadow = '0px 0px 0px';
            transforma.style.zIndex = '10';
    
            click = 1;
        }
    })
    
    transforma4.addEventListener('click',() => {
        if(click == 1){
            transforma4.style.transform = 'scale(1.6)';
            transforma4.style.boxShadow = '-10px 0px 30px';
    
            click = click +1;
        }else{
            transforma4.style.transform = 'scale(1) translate(0%, 0%)';
            transforma4.style.boxShadow = '0px 0px 0px';
            transforma.style.zIndex = '10';
    
            click = 1;
        }
    }) 

    transforma5.addEventListener('click',() => {
        if(click == 1){
            transforma5.style.transform = 'scale(1.6)';
            transforma5.style.boxShadow = '-10px 0px 30px';
    
            click = click +1;
        }else{
            transforma5.style.transform = 'scale(1) translate(0%, 0%)';
            transforma5.style.boxShadow = '0px 0px 0px';
            transforma.style.zIndex = '10';
    
            click = 1;
        }
    }) 

})();




