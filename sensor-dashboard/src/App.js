import React, { useEffect, useState } from 'react';

function App() {
  const [sensorData, setSensorData] = useState({ temperature: '', humidity: '' });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/sensor');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setSensorData(data);
      } catch (error) {
        console.error('Error fetching sensor data:', error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 5000); // 每5秒獲取一次數據

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <h1>Sensor Dashboard</h1>
      <p>Temperature: {sensorData.temperature}°C</p>
      <p>Humidity: {sensorData.humidity}%</p>
      <p>Timestamp: {sensorData.timestamp}</p>
    </div>
  );
}

export default App;
