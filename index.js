var express = require('express');
var app = express();

// 使用 express.json() 中間件來解析 JSON 格式的請求體
app.use(express.json());

// 根路徑的 GET 請求處理
app.get('/', function(req, res) {
  res.send('<h1>Hello</h1> Express');
});

// /sensor 路徑的 POST 請求處理，接收請求體中的 JSON 數據
app.post('/sensor', function(req, res) {
  // 獲取請求體中的數據
  const temperature = req.body.temperature || 'N/A';
  const humidity = req.body.humidity || 'N/A';
  
  // 準備回應數據
  const data = {
    message: "Sensor data received",
    temperature: temperature,
    humidity: humidity,
    timestamp: new Date().toISOString() // 回應 timestamp
  };

  // 回應 JSON 格式的數據
  res.json(data);
});

var server = app.listen(3000, function() {
  console.log('Listening on port 3000');
});
