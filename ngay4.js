const show = document.querySelectorAll(".show");
const img = document.querySelector(".imgbig");
const big = document.querySelector(".big");
const close = document.querySelector(".close");

const next = document.querySelector(".control.next");
const prev = document.querySelector(".control.prev");

let a = 0;

show.forEach((img,index) =>{
    img.addEventListener("click",()=>{
        a = index;
        ShowImg();
    });
});

function ShowImg(){
     a == show.length - 1  
     ? next.classList.add("hide") 
     : next.classList.remove("hide");

    a == 0
    ? prev.classList.add("hide")
    : prev.classList.remove("hide");

    img.classList.add("display");
    big.src = show[a].src;  
}

close.addEventListener("click", () => {
        img.classList.remove("display");
    });

next.addEventListener("click",() => {
    a != show.length-1 ? a++ : undefined;
    ShowImg();
});

prev.addEventListener("click",() => {
    a != 0 ? a-- : undefined;
    ShowImg();
});

document.addEventListener("keydown", (e) => {
    if (e.keyCode == 27) show.classList.remove("display");
});
  