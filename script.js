function getWeather() {
    let city = (document.getElementById("city").value).toLowerCase();
    if (city == "") {
        alert("Please enter a city name");
    } else {
        let API_KEY = `57f7c2a3ee87aec49c3f24c9fd849b00`;
        var url = `http://api.openweathermap.org/data/2.5/weather?q=` + city + `,india&appid=` + API_KEY + `&units=metric`;
        console.log(url);
        var request = new XMLHttpRequest();
        request.open('GET', url, true);
        request.onload = function () {
            if (request.status >= 200 && request.status < 400) {
                // Success!
                var data = JSON.parse(request.responseText);
                console.log(data);
            } else {
                // We reached our target server, but it returned an error
                console.log('target server error');
            }
        };
        request.onerror = function () {
            // There was a connection error of some sort
            console.log('Connection error');
        };
        request.send();
        request.onload = function () {
            var data = JSON.parse(request.responseText);
            // weather with relevant image
            document.getElementById('weather').innerHTML = data.weather[0].description;
            document.getElementById("weather-image").innerHTML = `<img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png">`;
            // temperature
            document.getElementById('temp').innerHTML = data.main.temp + "°C";
            document.getElementById('min-temp').innerHTML = data.main.temp_min + "°C";
            document.getElementById('max-temp').innerHTML = data.main.temp_max + "°C";
            // humidity
            document.getElementById('humidity').innerHTML = data.main.humidity + "%";
        }
    }
}