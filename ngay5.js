const search = document.querySelector(".search");

search.addEventListener("click", function(){
    this.parentElement.classList.toggle('width')
	this.previousElementSibling.focus()
});


