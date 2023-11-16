const $$ = document.querySelectorAll.bind(document);
const $ = document.querySelector.bind(document);

const Name = $('.name');
const Email = $('.email');
const Pass = $('.pass');
const Cofirm = $('.notpass');

Name.onclick = function(){
    Name.classList.add('color');
    Name.onblur = ()=>{
        Name.classList.remove('color');
    }
}

Email.onclick = function(){
    Email.classList.add('color');
    Email.onblur = ()=>{
        Email.classList.remove('color');
    }
}

Pass.onclick = function(){
    Pass.classList.add('color');
    Pass.onblur = ()=>{
        Pass.classList.remove('color');
    }
}

Cofirm.onclick = function(){
    Cofirm.classList.add('color');
    Cofirm.onblur = ()=>{
        Cofirm.classList.remove('color');
    }
}

const Span = $('span');

function ckechError(input,message){
    let Item = input;
    Item.classList.add('error');
    Span.innerText = message;
}

function ckechSuccess(input){
    let Item = input;
    Item.classList.remove('error');
    Span.innerText = "";
}

function ckechAll(List){
    List.forEach(input =>{
         input.value = input.value.trim();
    if(!input.value){
        ckechError(input,'Chua nhap thong tin')
    }
    else{
        ckechSuccess(input);
    }
    });
   
}

function ckechEmail(input){
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    input.value = input.value.trim();
    if(re.test(input.value)){
        ckechSuccess(input)
    }
    else{
        ckechError(input,'vui long nhap email');
    }
}

const Login = $('.login-item');

Login.addEventListener('click',function(e){
    ckechAll([Name,Email,Pass,Cofirm]);
    ckechEmail(Email);
})