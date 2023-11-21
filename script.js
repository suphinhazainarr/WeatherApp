function getWeather() {
    const apiKey = 'YOUR_API_KEY'; // Replace with your API key from OpenWeatherMap
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
      })
      .catch(error => {
        console.error('Error:', error);
        document.getElementById('temperature').textContent = 'City not found';
      });
  }
  