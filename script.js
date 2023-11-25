function getWeather() {
    const apiKey = '672b338af6ddecc2913caab2654873cb'; // Replace with your API key from OpenWeatherMap
    const city = document.getElementById('input-box').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('City not found');
        }
        return response.json();
      })
      .then(data => {
        const temperature = data.main.temp;
        document.getElementById('temperature').textContent = `${temperature}°C`;
        const cityName = data.name;
        document.getElementById('place').innerHTML = `${cityName}`;
      })
      .catch(error => {
        console.error('Error:', error);
        document.getElementById('temperature').textContent = 'City not found';
      });
  }
