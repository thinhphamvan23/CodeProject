var $ = document.querySelector.bind(document);

const search = $('.InputSearch');
const city = $('.city');
const area = $('.area');
const time = $('.time');
const poisonitem = $('.poisonitem');
const phenomena = $('.phenomena');
const eye  = $('.eye span');
const wind  = $('.wind span');
const sun  = $('.sun span');
const content = $('.content');
const body = $('body');



function RunAPI(run){
    city.innerText = run.name;
    area.innerText = run.sys.country;
    time.innerText = new Date().toLocaleString();
    let temp = Math.round(run.main.temp);
    poisonitem.innerText = temp;
    eye.innerText = run.visibility + ' (m)';
    wind.innerText = run.wind.speed + ' (m/s)';
    sun.innerText = run.clouds.all + ' (%)'; 
     body.setAttribute("class","hot");
          if(temp <= 25){
            body.setAttribute("class","hot");
          }
          if(temp <= 22){
             body.setAttribute("class","wair");
          }

          if(temp <= 19){
            body.setAttribute("class","could");
         }
}



async function weatherAPI(SearchInput){ 
    
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${SearchInput}&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667`

	const res = await fetch(API);
	const data = await res.json();
    

    if(data.cod == 200){

        content.classList.remove('hide');
          RunAPI(data);

          
        

         
    }
    else{
        content.classList.add('hide');
    }
 }

 search.addEventListener("keypress" , function(e){
    if(e.code === "Enter"){
        let  SearchInput= search.value.trim();
        weatherAPI(SearchInput);
    }
 })

 weatherAPI('ha noi');




