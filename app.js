let API_KEY = `api_key`;
let API_URL = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=${API_KEY}`; 
const input = document.getElementById('input');
 let search = document.getElementById('search');
 search.addEventListener('click',(event)=>{
    event.preventDefault();
    const xhr = new XMLHttpRequest();
    console.log(xhr.readyState);
    xhr.open('GET',API_URL);
    console.log(xhr.readyState);
    xhr.onload = function(){
        console.log(xhr.readyState);
        const response = xhr.responseText;
        console.log(JSON.parse(response));
    }
xhr.send();
});
 
// document.write(search.value);
