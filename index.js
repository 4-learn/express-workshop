const express = require('express');
const cors = require('cors');
const app = express();

// 使用 CORS 中間件
app.use(cors());

// 使用 express.json() 中間件來解析 JSON 格式的請求體
app.use(express.json());

let sensorData = {
  temperature: '25',
  humidity: '60'
};

// 根路徑的 GET 請求處理
app.get('/', (req, res) => {
  res.send('<h1>Hello</h1> Express');
});

// /sensor 路徑的 GET 請求處理，返回最新的溫濕度數據
app.get('/sensor', (req, res) => {
  const data = {
    message: "Sensor data received",
    temperature: sensorData.temperature,
    humidity: sensorData.humidity,
    timestamp: new Date().toISOString()
  };
  res.json(data);
});

// /sensor 路徑的 POST 請求處理，更新溫濕度數據
app.post('/sensor', (req, res) => {
  const temperature = req.body.temperature;
  const humidity = req.body.humidity;
  
  if (temperature) sensorData.temperature = temperature;
  if (humidity) sensorData.humidity = humidity;
  
  res.json({ message: "Sensor data updated", sensorData });
});

const server = app.listen(3000, () => {
  console.log('Listening on port 3000');
});

