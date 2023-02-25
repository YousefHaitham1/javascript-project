let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river5 = document.getElementById('river');
let boat6 = document.getElementById('boat');
let Yousoft = document.querySelector('.Yousoft');

window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value * 4 + 'px';
    mountains3.style.top = value *2 + 'px';
    mountains4.style.top = value *1.5 + 'px';
    river5.style.top = value  + 'px';
    boat6.style.top = value  + 'px';
    boat6.style.left = value * 3 + 'px';
    Yousoft.style.fontSize = value  + 'px';
    if(scrollY>= 65){
        Yousoft.style.fontSize = 65  + 'px';
        Yousoft.style.position =  'fixed';
        if(scrollY>= 548){
            Yousoft.style.display =  'none'; 
        }else{
            Yousoft.style.display =  'block'; 
        }
    }
        

    if(scrollY >= 164){
            document.querySelector('.main').style.background = 'linear-gradient(#11c5e9,#10001f)'
          


    }else{
        
      
document.querySelector('.main').style.background = 'linear-gradient(#200016,#10001f)'
    }


}
