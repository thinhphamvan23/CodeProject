var open = document.querySelector(".open-item");
var run = document.querySelector(".run");
var icon =document.querySelector("i");
var bt = document.querySelector(".button");


open.onclick = function(){
    run.style.opacity = '1';
    run.style.transform = 'translateY(200px)';
    run.style.transition = '0.5s'
}

bt.onclick = function(){
    run.style.opacity = '0';
    run.style.transform = 'translateY(-200px)';
    run.style.transition = '';
}

icon.onclick = function(){
    run.style.opacity = '0';
    run.style.transform = 'translateY(-200px)';
    run.style.transition = '';
}