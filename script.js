const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2b01345314msh063126d57db1ac2p10ded6jsn777384837ae9',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city) => {
	cityName.innerHTML = city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())
		.then(response => {
			//cloud_pct.innerHTML = response.cloud_pct
			temp.innerHTML = response.temp
			temp2.innerHTML = response.temp
			feels_like.innerHTML = response.feels_like
			humidity.innerHTML = response.humidity
			humidity2.innerHTML = response.humidity
			min_temp.innerHTML = response.min_temp
			max_temp.innerHTML = response.max_temp
			wind_speed.innerHTML = response.wind_speed
			wind_speed2.innerHTML = response.wind_speed
			wind_degrees.innerHTML = response.wind_degrees
			sunrise.innerHTML = response.sunrise
			sunset.innerHTML = response.sunset
			console.log(response)
		})
		.catch(err => console.error(err));
}

// submit.addEventListener("click", (e)=>{
// 	e.preventDefault()
// 	getWeather(city.value)
// })
(()=>{
	var cities = ["Mumbai","Kolkata","Delhi","Chennai","Bangalore","Pune"];
	for(let citi of cities){
		fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + citi, options)
		.then(response => response.json())
		.then(response => {
			document.getElementById(citi+"cloud_pct").innerHTML = response.cloud_pct
			document.getElementById(citi+"feels_like").innerHTML = response.feels_like
			document.getElementById(citi+"humidity").innerHTML = response.humidity
			document.getElementById(citi+"max_temp").innerHTML = response.max_temp
			document.getElementById(citi+"min_temp").innerHTML = response.min_temp
			document.getElementById(citi+"sunrise").innerHTML = response.sunrise
			document.getElementById(citi+"sunset").innerHTML = response.sunset
			document.getElementById(citi+"temp").innerHTML = response.temp
			document.getElementById(citi+"wind_degrees").innerHTML = response.wind_degrees
			document.getElementById(citi+"wind_speed").innerHTML = response.wind_speed
			
		})
		.catch(err => console.error(err));
	}
})();

submit.addEventListener("click", (e)=>{
	e.preventDefault()
	let seachQuery = document.getElementById('city');
	getWeather(seachQuery.value)
	// othercities();
})
getWeather("Delhi");