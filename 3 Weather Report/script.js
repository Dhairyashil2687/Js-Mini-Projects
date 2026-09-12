const input = document.querySelector('#city');
const btn = document.querySelector('#search');
const result = document.querySelector('#result');

btn.addEventListener('click',function(){

    const city = input.value;

    if(city ===''){
        result.innerHTML='Plz Enter City Name';
    }
    else{
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0c8a319ce820dc2b03918d067a6f89dd&units=metric`;

        // Calling API
        fetch(url)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            
            console.log(data);

            result.innerHTML = `
            City: ${data.name} <br>
            Temperature: ${data.main.temp} °C <br>
            Weather: ${data.weather[0].description}
            `;
        })
        .catch(function(error){
            console.log("Error is ",error);
            result.innerHTML = 'Error coming';
        })
    }
});