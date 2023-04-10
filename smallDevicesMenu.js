const body = document.querySelector('body');
const btn = document.getElementById("btn");
const menu = document.getElementById('menuMobile');
const overlay = document.getElementById('overlay');
const line1 = document.getElementsByClassName('line1')[0];
const line2 = document.getElementsByClassName('line2')[0];
const line3 = document.getElementsByClassName('line3')[0];

btn.addEventListener('click', function() {
    if (line1.classList.contains('activeLine1')) {
      line1.classList.remove("activeLine1");
      line2.classList.remove("activeLine2");
      line3.classList.remove("activeLine3");
      menu.style.display = 'none';
      overlay.style.display = 'none';
    } else {
      line1.classList.add("activeLine1");
      line2.classList.add("activeLine2");
      line3.classList.add("activeLine3");
      menu.style.display = 'block';
      overlay.style.display = 'block';
      body.style.overflowY = 'hidden';
    }
});

document.addEventListener('click',function(event){
    if(!event.target.closest('#overlay')){
        menu.style.display = 'active';
        overlay.style.display = 'active';
        body.style.over
    }else{
        menu.style.display = 'none';
        overlay.style.display = 'none';
        body.style.overflowY = 'visible';
        line1.classList.remove("activeLine1");
        line2.classList.remove("activeLine2");
        line3.classList.remove("activeLine3");
    }
})
