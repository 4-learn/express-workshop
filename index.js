var express = require('express');
var app = express();

// 根路徑的 GET 請求處理
app.get('/', function(req, res) {
  res.send('<h1>Hello</h1> Express');
});

// /sensor 路徑的 GET 請求處理，帶查詢參數
app.get('/sensor', function(req, res) {
  // 獲取查詢參數
  const temperature = req.query.temperature || 'N/A';
  const humidity = req.query.humidity || 'N/A';
  
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
