async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = 'cd36ef62cba52fe532f71d8c7297c934'; // Replace with your real key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    const response = await fetch(url);
    const data = await response.json();
  
    const weatherDiv = document.getElementById("weatherResult");
  
    if (data.cod === 200) {
      weatherDiv.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
        <p><strong>Weather:</strong> ${data.weather[0].description}</p>
        <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
        <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
      `;
    } else {
      weatherDiv.innerHTML = `<p>City not found. Please try again.</p>`;
    }
  }
  
