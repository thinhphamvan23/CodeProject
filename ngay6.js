const ekey = document.querySelector('.item.key .run');
const elocation = document.querySelector('.item.location .run');
const ewhich = document.querySelector('.item.which .run');
const ecode = document.querySelector('.item.code .run');

const Avata = document.querySelector('.avatar');
const ctn = document.querySelector('.container');
const re = document.querySelector('.returl');

document.addEventListener('keydown',e=>{
    ekey.innerText = e.key;
    elocation.innerText = e.location;
    ewhich.innerText = e.which;
    ecode.innerText = e.code;
    
    re.innerText = e.which;


    Avata.classList.add('hide');
    ctn.classList.remove('hide');
});