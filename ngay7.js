var Content = document.querySelector('.content');
var input = document.querySelector('.inp');
var removeall = document.querySelector('.remove');
var tags = ['NodeJs' , 'ReactJs']


function render(){

    Content.innerHTML = '';

    for(let i=0;i<tags.length;i++){
    const tag = tags[i];
    Content.innerHTML +=  `<li>
                            ${tag}
                                <i class="fas fa-times" onclick = removetag(${i})></i>
                          </li>`
   }

   Content.appendChild(input);
   input.focus();
}


render();

input.addEventListener("keydown", function(event){
    if(event.key == 'Enter'){
        tags.push(input.value.trim());
        input.value ='';
        render();
    }
})

function removetag(index){
    tags.splice(index,1);
    render();
}

removeall.addEventListener("click",function(){
    tags = [];
    render();
})